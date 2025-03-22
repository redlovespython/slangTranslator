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

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    enabled: {
        type: OptionType.BOOLEAN,
        description: "Enable slang translation",
        default: true
    },
    showChatBarButton: {
        type: OptionType.BOOLEAN,
        description: "Show slang translator button in chat bar",
        default: true
    },
    autoTranslate: {
        type: OptionType.BOOLEAN,
        description: "Automatically translate slang before sending. You can also shift/right click the translate button to toggle this",
        default: false
    },
    showAutoTranslateTooltip: {
        type: OptionType.BOOLEAN,
        description: "Show a tooltip on the ChatBar button whenever a message is automatically translated",
        default: true
    },
    direction: {
        type: OptionType.SELECT,
        description: "Translation direction",
        options: [
            { label: "English to Portuguese", value: "en-pt", default: true },
            { label: "Portuguese to English", value: "pt-en" }
        ] as const
    },
    translateFullMessages: {
        type: OptionType.BOOLEAN,
        description: "Translate entire messages (slower but more accurate)",
        default: false
    }
}).withPrivateSettings<{
    showAutoTranslateAlert: boolean;
}>();