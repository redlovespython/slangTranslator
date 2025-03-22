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

import { classNameFactory } from "@api/Styles";
import { showToast, Toasts } from "@webpack/common";

import { settings } from "./settings";
import { englishToPortugueseSlang } from "./slangDictionaries/en-pt";

export const cl = classNameFactory("vc-slang-trans-");

export interface SlangTranslationValue {
    sourceLanguage: string;
    targetLanguage: string;
    text: string;
    slangTranslated: boolean;
}

export async function translateSlang(text: string, reverseTranslation: boolean = false): Promise<SlangTranslationValue> {
    try {
        if (!settings.store.enabled) {
            return {
                sourceLanguage: "English",
                targetLanguage: "Portuguese",
                text,
                slangTranslated: false
            };
        }

        // Split the text into words and translate slang terms
        let translatedText = text;
        let slangTranslated = false;
        
        // Determine source and target languages based on settings
        let sourceLanguage = "English";
        let targetLanguage = "Portuguese";
        let dictionary = englishToPortugueseSlang;
        
        switch (settings.store.direction) {
            case "en-pt":
                sourceLanguage = !reverseTranslation ? "English" : "Portuguese";
                targetLanguage = !reverseTranslation ? "Portuguese" : "English";
                dictionary = !reverseTranslation ? englishToPortugueseSlang : invertDictionary(englishToPortugueseSlang);
                break;
            case "pt-en":
                sourceLanguage = !reverseTranslation ? "Portuguese" : "English";
                targetLanguage = !reverseTranslation ? "English" : "Portuguese";
                dictionary = !reverseTranslation ? invertDictionary(englishToPortugueseSlang) : englishToPortugueseSlang;
                break;
            default:
                // Default to English -> Portuguese
                dictionary = !reverseTranslation ? englishToPortugueseSlang : invertDictionary(englishToPortugueseSlang);
        }
        
        // Process whole phrases first (if they exist in the dictionary)
        Object.entries(dictionary).forEach(([slang, translation]) => {
            // Use a case-insensitive regex with word boundaries
            const regex = new RegExp(`\\b${escapeRegex(slang)}\\b`, 'gi');
            if (regex.test(translatedText)) {
                translatedText = translatedText.replace(regex, translation);
                slangTranslated = true;
            }
        });
        
        return {
            sourceLanguage,
            targetLanguage,
            text: translatedText,
            slangTranslated
        };
    } catch (e) {
        showToast("Failed to translate slang", Toasts.Type.FAILURE);
        
        throw e instanceof Error
            ? e
            : new Error("Failed to translate slang");
    }
}

// Helper function to escape special regex characters
function escapeRegex(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper function to invert a dictionary for reverse translation
function invertDictionary(dict: Record<string, string>): Record<string, string> {
    const result: Record<string, string> = {};
    Object.entries(dict).forEach(([key, value]) => {
        result[value] = key;
    });
    return result;
}