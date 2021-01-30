

export class SecurityCompliance {
    private 'password_regex': string | undefined;
    private 'password_regex_description': string | undefined;
    public constructor(passwordRegex: any, passwordRegexDescription: any) { 
        this['password_regex'] = passwordRegex;
        this['password_regex_description'] = passwordRegexDescription;
    }
    public withPasswordRegex(passwordRegex: string): SecurityCompliance {
        this['password_regex'] = passwordRegex;
        return this;
    }
    public set passwordRegex(passwordRegex: string | undefined) {
        this['password_regex'] = passwordRegex;
    }
    public get passwordRegex() {
        return this['password_regex'];
    }
    public withPasswordRegexDescription(passwordRegexDescription: string): SecurityCompliance {
        this['password_regex_description'] = passwordRegexDescription;
        return this;
    }
    public set passwordRegexDescription(passwordRegexDescription: string | undefined) {
        this['password_regex_description'] = passwordRegexDescription;
    }
    public get passwordRegexDescription() {
        return this['password_regex_description'];
    }
}