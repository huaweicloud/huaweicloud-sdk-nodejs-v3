

export class KeystoneUpdatePasswordOption {
    public password?: string;
    private 'original_password'?: string;
    public constructor(password?: string, originalPassword?: string) { 
        this['password'] = password;
        this['original_password'] = originalPassword;
    }
    public withPassword(password: string): KeystoneUpdatePasswordOption {
        this['password'] = password;
        return this;
    }
    public withOriginalPassword(originalPassword: string): KeystoneUpdatePasswordOption {
        this['original_password'] = originalPassword;
        return this;
    }
    public set originalPassword(originalPassword: string  | undefined) {
        this['original_password'] = originalPassword;
    }
    public get originalPassword(): string | undefined {
        return this['original_password'];
    }
}