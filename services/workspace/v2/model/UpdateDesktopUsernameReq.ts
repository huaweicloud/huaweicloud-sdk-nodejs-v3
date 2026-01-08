

export class UpdateDesktopUsernameReq {
    private 'old_username'?: string;
    private 'old_user_domain'?: string;
    private 'new_username'?: string;
    private 'new_user_domain'?: string;
    private 'is_reboot'?: boolean;
    public constructor(oldUsername?: string, newUsername?: string) { 
        this['old_username'] = oldUsername;
        this['new_username'] = newUsername;
    }
    public withOldUsername(oldUsername: string): UpdateDesktopUsernameReq {
        this['old_username'] = oldUsername;
        return this;
    }
    public set oldUsername(oldUsername: string  | undefined) {
        this['old_username'] = oldUsername;
    }
    public get oldUsername(): string | undefined {
        return this['old_username'];
    }
    public withOldUserDomain(oldUserDomain: string): UpdateDesktopUsernameReq {
        this['old_user_domain'] = oldUserDomain;
        return this;
    }
    public set oldUserDomain(oldUserDomain: string  | undefined) {
        this['old_user_domain'] = oldUserDomain;
    }
    public get oldUserDomain(): string | undefined {
        return this['old_user_domain'];
    }
    public withNewUsername(newUsername: string): UpdateDesktopUsernameReq {
        this['new_username'] = newUsername;
        return this;
    }
    public set newUsername(newUsername: string  | undefined) {
        this['new_username'] = newUsername;
    }
    public get newUsername(): string | undefined {
        return this['new_username'];
    }
    public withNewUserDomain(newUserDomain: string): UpdateDesktopUsernameReq {
        this['new_user_domain'] = newUserDomain;
        return this;
    }
    public set newUserDomain(newUserDomain: string  | undefined) {
        this['new_user_domain'] = newUserDomain;
    }
    public get newUserDomain(): string | undefined {
        return this['new_user_domain'];
    }
    public withIsReboot(isReboot: boolean): UpdateDesktopUsernameReq {
        this['is_reboot'] = isReboot;
        return this;
    }
    public set isReboot(isReboot: boolean  | undefined) {
        this['is_reboot'] = isReboot;
    }
    public get isReboot(): boolean | undefined {
        return this['is_reboot'];
    }
}