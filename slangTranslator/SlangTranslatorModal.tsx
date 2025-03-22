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

import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { Forms, SearchableSelect, Switch } from "@webpack/common";

import { settings } from "./settings";
import { cl } from "./utils";

export function SlangTranslatorModal({ rootProps }: { rootProps: ModalProps; }) {
    const { direction, autoTranslate, translateFullMessages } = settings.use([
        "direction", "autoTranslate", "translateFullMessages"
    ]);

    const directionOptions = [
        { value: "en-pt", label: "English to Portuguese" },
        { value: "pt-en", label: "Portuguese to English" }
    ];

    return (
        <ModalRoot {...rootProps}>
            <ModalHeader className={cl("modal-header")}>
                <Forms.FormTitle tag="h2" className={cl("modal-title")}>
                    Slang Translator Settings
                </Forms.FormTitle>
                <ModalCloseButton onClick={rootProps.onClose} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
                <section className={Margins.bottom16}>
                    <Forms.FormTitle tag="h3">
                        Translation Direction
                    </Forms.FormTitle>

                    <SearchableSelect
                        options={directionOptions}
                        value={directionOptions.find(o => o.value === direction)}
                        placeholder={"Select direction"}
                        maxVisibleItems={5}
                        closeOnSelect={true}
                        onChange={v => settings.store.direction = v}
                    />
                </section>

                <Switch
                    value={translateFullMessages}
                    onChange={v => settings.store.translateFullMessages = v}
                    note="Translate entire messages (slower but more accurate)"
                >
                    Full Message Translation
                </Switch>

                <Forms.FormDivider className={Margins.bottom16 + " " + Margins.top16} />

                <Switch
                    value={autoTranslate}
                    onChange={v => settings.store.autoTranslate = v}
                    note={settings.def.autoTranslate.description}
                    hideBorder
                >
                    Auto Translate
                </Switch>
            </ModalContent>
        </ModalRoot>
    );
}