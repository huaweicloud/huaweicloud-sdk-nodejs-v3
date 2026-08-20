

export class ExtensionParameterValidation {
    public isRequired?: boolean;
    public pattern?: string;
    public patternDescription?: string;
    public constructor() { 
    }
    public withIsRequired(isRequired: boolean): ExtensionParameterValidation {
        this['isRequired'] = isRequired;
        return this;
    }
    public withPattern(pattern: string): ExtensionParameterValidation {
        this['pattern'] = pattern;
        return this;
    }
    public withPatternDescription(patternDescription: string): ExtensionParameterValidation {
        this['patternDescription'] = patternDescription;
        return this;
    }
}