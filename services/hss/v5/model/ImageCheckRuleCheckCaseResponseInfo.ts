

export class ImageCheckRuleCheckCaseResponseInfo {
    private 'check_description'?: string;
    private 'current_value'?: string;
    private 'suggest_value'?: string;
    public constructor() { 
    }
    public withCheckDescription(checkDescription: string): ImageCheckRuleCheckCaseResponseInfo {
        this['check_description'] = checkDescription;
        return this;
    }
    public set checkDescription(checkDescription: string  | undefined) {
        this['check_description'] = checkDescription;
    }
    public get checkDescription(): string | undefined {
        return this['check_description'];
    }
    public withCurrentValue(currentValue: string): ImageCheckRuleCheckCaseResponseInfo {
        this['current_value'] = currentValue;
        return this;
    }
    public set currentValue(currentValue: string  | undefined) {
        this['current_value'] = currentValue;
    }
    public get currentValue(): string | undefined {
        return this['current_value'];
    }
    public withSuggestValue(suggestValue: string): ImageCheckRuleCheckCaseResponseInfo {
        this['suggest_value'] = suggestValue;
        return this;
    }
    public set suggestValue(suggestValue: string  | undefined) {
        this['suggest_value'] = suggestValue;
    }
    public get suggestValue(): string | undefined {
        return this['suggest_value'];
    }
}