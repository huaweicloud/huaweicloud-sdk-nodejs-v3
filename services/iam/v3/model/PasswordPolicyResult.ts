

export class PasswordPolicyResult {
    private 'maximum_consecutive_identical_chars': number | undefined;
    private 'maximum_password_length': number | undefined;
    private 'minimum_password_age': number | undefined;
    private 'minimum_password_length': number | undefined;
    private 'number_of_recent_passwords_disallowed': number | undefined;
    private 'password_not_username_or_invert': boolean | undefined;
    private 'password_requirements': string | undefined;
    private 'password_validity_period': number | undefined;
    private 'password_char_combination': number | undefined;
    public constructor(maximumConsecutiveIdenticalChars: any, maximumPasswordLength: any, minimumPasswordAge: any, minimumPasswordLength: any, numberOfRecentPasswordsDisallowed: any, passwordNotUsernameOrInvert: any, passwordRequirements: any, passwordValidityPeriod: any, passwordCharCombination: any) { 
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
        this['maximum_password_length'] = maximumPasswordLength;
        this['minimum_password_age'] = minimumPasswordAge;
        this['minimum_password_length'] = minimumPasswordLength;
        this['number_of_recent_passwords_disallowed'] = numberOfRecentPasswordsDisallowed;
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
        this['password_requirements'] = passwordRequirements;
        this['password_validity_period'] = passwordValidityPeriod;
        this['password_char_combination'] = passwordCharCombination;
    }
    public withMaximumConsecutiveIdenticalChars(maximumConsecutiveIdenticalChars: number): PasswordPolicyResult {
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
        return this;
    }
    public set maximumConsecutiveIdenticalChars(maximumConsecutiveIdenticalChars: number | undefined) {
        this['maximum_consecutive_identical_chars'] = maximumConsecutiveIdenticalChars;
    }
    public get maximumConsecutiveIdenticalChars() {
        return this['maximum_consecutive_identical_chars'];
    }
    public withMaximumPasswordLength(maximumPasswordLength: number): PasswordPolicyResult {
        this['maximum_password_length'] = maximumPasswordLength;
        return this;
    }
    public set maximumPasswordLength(maximumPasswordLength: number | undefined) {
        this['maximum_password_length'] = maximumPasswordLength;
    }
    public get maximumPasswordLength() {
        return this['maximum_password_length'];
    }
    public withMinimumPasswordAge(minimumPasswordAge: number): PasswordPolicyResult {
        this['minimum_password_age'] = minimumPasswordAge;
        return this;
    }
    public set minimumPasswordAge(minimumPasswordAge: number | undefined) {
        this['minimum_password_age'] = minimumPasswordAge;
    }
    public get minimumPasswordAge() {
        return this['minimum_password_age'];
    }
    public withMinimumPasswordLength(minimumPasswordLength: number): PasswordPolicyResult {
        this['minimum_password_length'] = minimumPasswordLength;
        return this;
    }
    public set minimumPasswordLength(minimumPasswordLength: number | undefined) {
        this['minimum_password_length'] = minimumPasswordLength;
    }
    public get minimumPasswordLength() {
        return this['minimum_password_length'];
    }
    public withNumberOfRecentPasswordsDisallowed(numberOfRecentPasswordsDisallowed: number): PasswordPolicyResult {
        this['number_of_recent_passwords_disallowed'] = numberOfRecentPasswordsDisallowed;
        return this;
    }
    public set numberOfRecentPasswordsDisallowed(numberOfRecentPasswordsDisallowed: number | undefined) {
        this['number_of_recent_passwords_disallowed'] = numberOfRecentPasswordsDisallowed;
    }
    public get numberOfRecentPasswordsDisallowed() {
        return this['number_of_recent_passwords_disallowed'];
    }
    public withPasswordNotUsernameOrInvert(passwordNotUsernameOrInvert: boolean): PasswordPolicyResult {
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
        return this;
    }
    public set passwordNotUsernameOrInvert(passwordNotUsernameOrInvert: boolean | undefined) {
        this['password_not_username_or_invert'] = passwordNotUsernameOrInvert;
    }
    public get passwordNotUsernameOrInvert() {
        return this['password_not_username_or_invert'];
    }
    public withPasswordRequirements(passwordRequirements: string): PasswordPolicyResult {
        this['password_requirements'] = passwordRequirements;
        return this;
    }
    public set passwordRequirements(passwordRequirements: string | undefined) {
        this['password_requirements'] = passwordRequirements;
    }
    public get passwordRequirements() {
        return this['password_requirements'];
    }
    public withPasswordValidityPeriod(passwordValidityPeriod: number): PasswordPolicyResult {
        this['password_validity_period'] = passwordValidityPeriod;
        return this;
    }
    public set passwordValidityPeriod(passwordValidityPeriod: number | undefined) {
        this['password_validity_period'] = passwordValidityPeriod;
    }
    public get passwordValidityPeriod() {
        return this['password_validity_period'];
    }
    public withPasswordCharCombination(passwordCharCombination: number): PasswordPolicyResult {
        this['password_char_combination'] = passwordCharCombination;
        return this;
    }
    public set passwordCharCombination(passwordCharCombination: number | undefined) {
        this['password_char_combination'] = passwordCharCombination;
    }
    public get passwordCharCombination() {
        return this['password_char_combination'];
    }
}