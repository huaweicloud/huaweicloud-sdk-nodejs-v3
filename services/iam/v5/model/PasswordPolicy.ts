

export class PasswordPolicy {
    private 'maximum_consecutive_identical_chars'?: number;
    private 'maximum_password_length'?: number;
    private 'minimum_password_age'?: number;
    private 'minimum_password_length'?: number;
    private 'password_reuse_prevention'?: number;
    private 'password_not_username_or_invert'?: boolean;
    private 'password_requirements'?: string;
    private 'password_validity_period'?: number;
    private 'password_char_combination'?: number;
    private 'allow_user_to_change_password'?: boolean;
    public constructor(maximumConsecutiveIdenticalChars?: number, maximumPasswordLength?: number, minimumPasswordAge?: number, minimumPasswordLength?: number, passwordReusePrevention?: number, passwordNotUsernameOrInvert?: boolean, passwordRequirements?: string, passwordValidityPeriod?: number, passwordCharCombination?: number, allowUserToChangePassword?: boolean) { 
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
        this['maximum_password_length'] = maximumPasswordLength;
        this['minimum_password_age'] = minimumPasswordAge;
        this['minimum_password_length'] = minimumPasswordLength;
        this['password_reuse_prevention'] = passwordReusePrevention;
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
        this['password_requirements'] = passwordRequirements;
        this['password_validity_period'] = passwordValidityPeriod;
        this['password_char_combination'] = passwordCharCombination;
        this['allow_user_to_change_password'] = allowUserToChangePassword;
    }
    public withMaximumConsecutiveIdenticalChars(maximumConsecutiveIdenticalChars: number): PasswordPolicy {
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
        return this;
    }
    public set maximumConsecutiveIdenticalChars(maximumConsecutiveIdenticalChars: number  | undefined) {
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
    }
    public get maximumConsecutiveIdenticalChars(): number | undefined {
        return this['maximum_consecutive_identical_chars'];
    }
    public withMaximumPasswordLength(maximumPasswordLength: number): PasswordPolicy {
        this['maximum_password_length'] = maximumPasswordLength;
        return this;
    }
    public set maximumPasswordLength(maximumPasswordLength: number  | undefined) {
        this['maximum_password_length'] = maximumPasswordLength;
    }
    public get maximumPasswordLength(): number | undefined {
        return this['maximum_password_length'];
    }
    public withMinimumPasswordAge(minimumPasswordAge: number): PasswordPolicy {
        this['minimum_password_age'] = minimumPasswordAge;
        return this;
    }
    public set minimumPasswordAge(minimumPasswordAge: number  | undefined) {
        this['minimum_password_age'] = minimumPasswordAge;
    }
    public get minimumPasswordAge(): number | undefined {
        return this['minimum_password_age'];
    }
    public withMinimumPasswordLength(minimumPasswordLength: number): PasswordPolicy {
        this['minimum_password_length'] = minimumPasswordLength;
        return this;
    }
    public set minimumPasswordLength(minimumPasswordLength: number  | undefined) {
        this['minimum_password_length'] = minimumPasswordLength;
    }
    public get minimumPasswordLength(): number | undefined {
        return this['minimum_password_length'];
    }
    public withPasswordReusePrevention(passwordReusePrevention: number): PasswordPolicy {
        this['password_reuse_prevention'] = passwordReusePrevention;
        return this;
    }
    public set passwordReusePrevention(passwordReusePrevention: number  | undefined) {
        this['password_reuse_prevention'] = passwordReusePrevention;
    }
    public get passwordReusePrevention(): number | undefined {
        return this['password_reuse_prevention'];
    }
    public withPasswordNotUsernameOrInvert(passwordNotUsernameOrInvert: boolean): PasswordPolicy {
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
        return this;
    }
    public set passwordNotUsernameOrInvert(passwordNotUsernameOrInvert: boolean  | undefined) {
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
    }
    public get passwordNotUsernameOrInvert(): boolean | undefined {
        return this['password_not_username_or_invert'];
    }
    public withPasswordRequirements(passwordRequirements: string): PasswordPolicy {
        this['password_requirements'] = passwordRequirements;
        return this;
    }
    public set passwordRequirements(passwordRequirements: string  | undefined) {
        this['password_requirements'] = passwordRequirements;
    }
    public get passwordRequirements(): string | undefined {
        return this['password_requirements'];
    }
    public withPasswordValidityPeriod(passwordValidityPeriod: number): PasswordPolicy {
        this['password_validity_period'] = passwordValidityPeriod;
        return this;
    }
    public set passwordValidityPeriod(passwordValidityPeriod: number  | undefined) {
        this['password_validity_period'] = passwordValidityPeriod;
    }
    public get passwordValidityPeriod(): number | undefined {
        return this['password_validity_period'];
    }
    public withPasswordCharCombination(passwordCharCombination: number): PasswordPolicy {
        this['password_char_combination'] = passwordCharCombination;
        return this;
    }
    public set passwordCharCombination(passwordCharCombination: number  | undefined) {
        this['password_char_combination'] = passwordCharCombination;
    }
    public get passwordCharCombination(): number | undefined {
        return this['password_char_combination'];
    }
    public withAllowUserToChangePassword(allowUserToChangePassword: boolean): PasswordPolicy {
        this['allow_user_to_change_password'] = allowUserToChangePassword;
        return this;
    }
    public set allowUserToChangePassword(allowUserToChangePassword: boolean  | undefined) {
        this['allow_user_to_change_password'] = allowUserToChangePassword;
    }
    public get allowUserToChangePassword(): boolean | undefined {
        return this['allow_user_to_change_password'];
    }
}