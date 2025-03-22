/*
 * SlangTranslator, a Vencord plugin for translating English slang into Portuguese
 * Copyright (c) 2025 redlovespython
 * https://github.com/redlovespython
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

// This is an example file to demonstrate how to add support for new languages
// To actually implement Portuguese to Spanish translation:
// 1. Rename this file to pt-es.ts
// 2. Add the proper dictionary entries below
// 3. Update the utils.ts file to import and use this dictionary
// 4. Update the settings.ts file to add the new language option

// Portuguese to Spanish slang dictionary
export const portugueseToSpanishSlang: Record<string, string> = {
    // Common Portuguese internet slang and their Spanish equivalents
    "kkkk": "jajaja",
    "rsrs": "jeje",
    "mds": "dios mío",
    "vlw": "gracias",
    "flw": "chao",
    "blz": "vale",
    "mano": "tío",
    "cara": "tío",
    "véi": "tío",
    "guria": "chica",
    "guri": "chico",
    "legal": "chévere",
    "massa": "guay",
    "maneiro": "guay",
    "dahora": "guay",
    "top": "top",
    "firmeza": "genial",
    "beleza": "guay",
    "rolê": "salir",
    "dar um rolê": "dar una vuelta",
    "bagunça": "lío",
    "bagunceiro": "desordenado",
    "pegar": "ligar",
    "ficar": "rollo",
    "crush": "crush",
    "mó": "muy",
    "da hora": "guay",
    "foda": "jodido",
    "fodão": "cabrón",
    "grana": "pasta",
    "trampo": "curro",
    "caô": "mentira",
    "rolar": "pasar",
    "bombar": "explotar",
    "marcar": "agendar",
    "mina": "tía",
    "coroa": "maduro",
    "cê": "tú",
    "tá": "vale",
    
    // Add more slang terms as needed...
};
