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

import { Parser, useEffect, useState } from "@webpack/common";
import { Message } from "discord-types/general";

import { SlangTranslatorIcon } from "./SlangTranslatorIcon";
import { cl, SlangTranslationValue } from "./utils";

const TranslationSetters = new Map<string, (v: SlangTranslationValue) => void>();

export function handleTranslate(messageId: string, data: SlangTranslationValue) {
    TranslationSetters.get(messageId)?.(data);
}

function Dismiss({ onDismiss }: { onDismiss: () => void; }) {
    return (
        <button
            onClick={onDismiss}
            className={cl("dismiss")}
        >
            Dismiss
        </button>
    );
}

export function SlangTranslatorAccessory({ message }: { message: Message; }) {
    const [translation, setTranslation] = useState<SlangTranslationValue>();

    useEffect(() => {
        // Ignore MessageLinkEmbeds messages
        if ((message as any).vencordEmbeddedBy) return;

        TranslationSetters.set(message.id, setTranslation);

        return () => void TranslationSetters.delete(message.id);
    }, []);

    if (!translation || !translation.slangTranslated) return null;

    return (
        <span className={cl("accessory")}>
            <SlangTranslatorIcon width={16} height={16} className={cl("accessory-icon")} />
            {Parser.parse(translation.text)}
            {" "}
            (slang translated from {translation.sourceLanguage} to {translation.targetLanguage} - <Dismiss onDismiss={() => setTranslation(undefined)} />)
        </span>
    );
}