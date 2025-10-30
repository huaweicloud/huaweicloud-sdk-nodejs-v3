

export class ChangeExtendedWeakPasswordRequestInfo {
    private 'extended_weak_password'?: Array<string>;
    public constructor() { 
    }
    public withExtendedWeakPassword(extendedWeakPassword: Array<string>): ChangeExtendedWeakPasswordRequestInfo {
        this['extended_weak_password'] = extendedWeakPassword;
        return this;
    }
    public set extendedWeakPassword(extendedWeakPassword: Array<string>  | undefined) {
        this['extended_weak_password'] = extendedWeakPassword;
    }
    public get extendedWeakPassword(): Array<string> | undefined {
        return this['extended_weak_password'];
    }
}