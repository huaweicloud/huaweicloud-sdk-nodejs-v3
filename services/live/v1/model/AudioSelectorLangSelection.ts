

export class AudioSelectorLangSelection {
    private 'language_code'?: string;
    private 'language_selection_policy'?: AudioSelectorLangSelectionLanguageSelectionPolicyEnum | string;
    public constructor(languageCode?: string) { 
        this['language_code'] = languageCode;
    }
    public withLanguageCode(languageCode: string): AudioSelectorLangSelection {
        this['language_code'] = languageCode;
        return this;
    }
    public set languageCode(languageCode: string  | undefined) {
        this['language_code'] = languageCode;
    }
    public get languageCode(): string | undefined {
        return this['language_code'];
    }
    public withLanguageSelectionPolicy(languageSelectionPolicy: AudioSelectorLangSelectionLanguageSelectionPolicyEnum | string): AudioSelectorLangSelection {
        this['language_selection_policy'] = languageSelectionPolicy;
        return this;
    }
    public set languageSelectionPolicy(languageSelectionPolicy: AudioSelectorLangSelectionLanguageSelectionPolicyEnum | string  | undefined) {
        this['language_selection_policy'] = languageSelectionPolicy;
    }
    public get languageSelectionPolicy(): AudioSelectorLangSelectionLanguageSelectionPolicyEnum | string | undefined {
        return this['language_selection_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioSelectorLangSelectionLanguageSelectionPolicyEnum {
    LOOSE = 'LOOSE',
    STRICT = 'STRICT'
}
