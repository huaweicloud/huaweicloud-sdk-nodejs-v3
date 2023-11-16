

export class ExtensionValidation {
    private 'required_message'?: string;
    public regex?: string;
    private 'regex_message'?: string;
    private 'max_length'?: number;
    private 'min_length'?: number;
    public constructor() { 
    }
    public withRequiredMessage(requiredMessage: string): ExtensionValidation {
        this['required_message'] = requiredMessage;
        return this;
    }
    public set requiredMessage(requiredMessage: string  | undefined) {
        this['required_message'] = requiredMessage;
    }
    public get requiredMessage(): string | undefined {
        return this['required_message'];
    }
    public withRegex(regex: string): ExtensionValidation {
        this['regex'] = regex;
        return this;
    }
    public withRegexMessage(regexMessage: string): ExtensionValidation {
        this['regex_message'] = regexMessage;
        return this;
    }
    public set regexMessage(regexMessage: string  | undefined) {
        this['regex_message'] = regexMessage;
    }
    public get regexMessage(): string | undefined {
        return this['regex_message'];
    }
    public withMaxLength(maxLength: number): ExtensionValidation {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withMinLength(minLength: number): ExtensionValidation {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: number  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): number | undefined {
        return this['min_length'];
    }
}