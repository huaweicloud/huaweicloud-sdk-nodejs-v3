

export class PasswordPolicyDto {
    private 'minimum_password_length'?: number;
    private 'require_lowercase_characters'?: boolean;
    private 'require_numbers'?: boolean;
    private 'require_symbols'?: boolean;
    private 'require_uppercase_characters'?: boolean;
    private 'max_password_age'?: number;
    private 'password_reuse_prevention'?: number;
    public constructor() { 
    }
    public withMinimumPasswordLength(minimumPasswordLength: number): PasswordPolicyDto {
        this['minimum_password_length'] = minimumPasswordLength;
        return this;
    }
    public set minimumPasswordLength(minimumPasswordLength: number  | undefined) {
        this['minimum_password_length'] = minimumPasswordLength;
    }
    public get minimumPasswordLength(): number | undefined {
        return this['minimum_password_length'];
    }
    public withRequireLowercaseCharacters(requireLowercaseCharacters: boolean): PasswordPolicyDto {
        this['require_lowercase_characters'] = requireLowercaseCharacters;
        return this;
    }
    public set requireLowercaseCharacters(requireLowercaseCharacters: boolean  | undefined) {
        this['require_lowercase_characters'] = requireLowercaseCharacters;
    }
    public get requireLowercaseCharacters(): boolean | undefined {
        return this['require_lowercase_characters'];
    }
    public withRequireNumbers(requireNumbers: boolean): PasswordPolicyDto {
        this['require_numbers'] = requireNumbers;
        return this;
    }
    public set requireNumbers(requireNumbers: boolean  | undefined) {
        this['require_numbers'] = requireNumbers;
    }
    public get requireNumbers(): boolean | undefined {
        return this['require_numbers'];
    }
    public withRequireSymbols(requireSymbols: boolean): PasswordPolicyDto {
        this['require_symbols'] = requireSymbols;
        return this;
    }
    public set requireSymbols(requireSymbols: boolean  | undefined) {
        this['require_symbols'] = requireSymbols;
    }
    public get requireSymbols(): boolean | undefined {
        return this['require_symbols'];
    }
    public withRequireUppercaseCharacters(requireUppercaseCharacters: boolean): PasswordPolicyDto {
        this['require_uppercase_characters'] = requireUppercaseCharacters;
        return this;
    }
    public set requireUppercaseCharacters(requireUppercaseCharacters: boolean  | undefined) {
        this['require_uppercase_characters'] = requireUppercaseCharacters;
    }
    public get requireUppercaseCharacters(): boolean | undefined {
        return this['require_uppercase_characters'];
    }
    public withMaxPasswordAge(maxPasswordAge: number): PasswordPolicyDto {
        this['max_password_age'] = maxPasswordAge;
        return this;
    }
    public set maxPasswordAge(maxPasswordAge: number  | undefined) {
        this['max_password_age'] = maxPasswordAge;
    }
    public get maxPasswordAge(): number | undefined {
        return this['max_password_age'];
    }
    public withPasswordReusePrevention(passwordReusePrevention: number): PasswordPolicyDto {
        this['password_reuse_prevention'] = passwordReusePrevention;
        return this;
    }
    public set passwordReusePrevention(passwordReusePrevention: number  | undefined) {
        this['password_reuse_prevention'] = passwordReusePrevention;
    }
    public get passwordReusePrevention(): number | undefined {
        return this['password_reuse_prevention'];
    }
}