/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { classes } from "@utils/misc";
import { openModal } from "@utils/modal";
import { Alerts, Forms, Tooltip, useEffect, useState } from "@webpack/common";

import { settings } from "./settings";
import { SlangTranslatorModal } from "./SlangTranslatorModal";
import { cl } from "./utils";

export function SlangTranslatorIcon({ height = 24, width = 24, className }: { height?: number; width?: number; className?: string; }) {
    return (
        <svg
            viewBox="0 0 24 24"
            height={height}
            width={width}
            className={classes(cl("icon"), className)}
        >
            <path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
    );
}

export let setShowSlangTranslationTooltip: undefined | ((show: boolean) => void);

export const SlangTranslatorChatBarIcon: ChatBarButtonFactory = ({ isMainChat }) => {
    const { autoTranslate, showChatBarButton } = settings.use(["autoTranslate", "showChatBarButton"]);

    const [shouldShowTranslateEnabledTooltip, setter] = useState(false);
    useEffect(() => {
        setShowSlangTranslationTooltip = setter;
        return () => setShowSlangTranslationTooltip = undefined;
    }, []);

    if (!isMainChat || !showChatBarButton) return null;

    const toggle = () => {
        const newState = !autoTranslate;
        settings.store.autoTranslate = newState;
        if (newState && settings.store.showAutoTranslateAlert !== false)
            Alerts.show({
                title: "Slang Translator Auto-Translate Enabled",
                body: <>
                    <Forms.FormText>
                        You just enabled Auto Translate! Any slang in your messages <b>will automatically be translated</b> before being sent.
                    </Forms.FormText>
                </>,
                confirmText: "Disable Auto-Translate",
                cancelText: "Got it",
                secondaryConfirmText: "Don't show again",
                onConfirmSecondary: () => settings.store.showAutoTranslateAlert = false,
                onConfirm: () => settings.store.autoTranslate = false,
                confirmColor: "vc-notification-log-danger-btn",
            });
    };

    const button = (
        <ChatBarButton
            tooltip="Open Slang Translator"
            onClick={e => {
                if (e.shiftKey) return toggle();

                openModal(props => (
                    <SlangTranslatorModal rootProps={props} />
                ));
            }}
            onContextMenu={toggle}
            buttonProps={{
                "aria-haspopup": "dialog"
            }}
        >
            <SlangTranslatorIcon className={cl({ "auto-translate": autoTranslate, "chat-button": true })} />
        </ChatBarButton>
    );

    if (shouldShowTranslateEnabledTooltip && settings.store.showAutoTranslateTooltip)
        return (
            <Tooltip text="Slang Auto Translate Enabled" forceOpen>
                {() => button}
            </Tooltip>
        );

    return button;
};