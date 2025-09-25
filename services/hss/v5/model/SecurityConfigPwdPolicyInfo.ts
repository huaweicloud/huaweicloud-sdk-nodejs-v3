

export class SecurityConfigPwdPolicyInfo {
    private 'min_length'?: boolean;
    private 'uppercase_letter'?: boolean;
    private 'lowercase_letter'?: boolean;
    private 'number'?: boolean;
    private 'special_character'?: boolean;
    public suggestion?: string;
    public constructor() { 
    }
    public withMinLength(minLength: boolean): SecurityConfigPwdPolicyInfo {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: boolean  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): boolean | undefined {
        return this['min_length'];
    }
    public withUppercaseLetter(uppercaseLetter: boolean): SecurityConfigPwdPolicyInfo {
        this['uppercase_letter'] = uppercaseLetter;
        return this;
    }
    public set uppercaseLetter(uppercaseLetter: boolean  | undefined) {
        this['uppercase_letter'] = uppercaseLetter;
    }
    public get uppercaseLetter(): boolean | undefined {
        return this['uppercase_letter'];
    }
    public withLowercaseLetter(lowercaseLetter: boolean): SecurityConfigPwdPolicyInfo {
        this['lowercase_letter'] = lowercaseLetter;
        return this;
    }
    public set lowercaseLetter(lowercaseLetter: boolean  | undefined) {
        this['lowercase_letter'] = lowercaseLetter;
    }
    public get lowercaseLetter(): boolean | undefined {
        return this['lowercase_letter'];
    }
    public withModelNumber(modelNumber: boolean): SecurityConfigPwdPolicyInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: boolean  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): boolean | undefined {
        return this['number'];
    }
    public withSpecialCharacter(specialCharacter: boolean): SecurityConfigPwdPolicyInfo {
        this['special_character'] = specialCharacter;
        return this;
    }
    public set specialCharacter(specialCharacter: boolean  | undefined) {
        this['special_character'] = specialCharacter;
    }
    public get specialCharacter(): boolean | undefined {
        return this['special_character'];
    }
    public withSuggestion(suggestion: string): SecurityConfigPwdPolicyInfo {
        this['suggestion'] = suggestion;
        return this;
    }
}