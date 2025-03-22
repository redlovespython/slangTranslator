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

import "./styles.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore, Menu } from "@webpack/common";

import { settings } from "./settings";
import { setShowSlangTranslationTooltip, SlangTranslatorChatBarIcon, SlangTranslatorIcon } from "./SlangTranslatorIcon";
import { handleTranslate, SlangTranslatorAccessory } from "./SlangTranslatorAccessory";
import { translateSlang } from "./utils";

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message }) => {
    if (!message.content) return;

    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, (
        <Menu.MenuItem
            id="vc-slang-trans"
            label="Translate Slang"
            icon={SlangTranslatorIcon}
            action={async () => {
                const trans = await translateSlang(message.content);
                handleTranslate(message.id, trans);
            }}
        />
    ));
};

let tooltipTimeout: any;

export default definePlugin({
    name: "SlangTranslator",
    description: "Translate English slang into Portuguese",
    authors: [
        {
            id: "103971320",
            name: "redlovespython"
        }
    ],
    dependencies: ["MessageAccessories"],
    settings,
    contextMenus: {
        "message": messageCtxPatch
    },
    // not used, just here in case some other plugin wants it or w/e
    translateSlang,

    renderMessageAccessory: props => <SlangTranslatorAccessory message={props.message} />,

    renderChatBarButton: SlangTranslatorChatBarIcon,

    renderMessagePopoverButton(message) {
        if (!message.content) return null;

        return {
            label: "Translate Slang",
            icon: SlangTranslatorIcon,
            message,
            channel: ChannelStore.getChannel(message.channel_id),
            onClick: async () => {
                const trans = await translateSlang(message.content);
                handleTranslate(message.id, trans);
            }
        };
    },

    async onBeforeMessageSend(_, message) {
        if (!settings.store.autoTranslate) return;
        if (!message.content) return;

        setShowSlangTranslationTooltip?.(true);
        clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => setShowSlangTranslationTooltip?.(false), 2000);

        const trans = await translateSlang(message.content, true);
        message.content = trans.text;
    }
});