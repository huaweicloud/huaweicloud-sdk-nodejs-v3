

export class UpdateDesktopUsernameReq {
    private 'old_username'?: string;
    private 'new_username'?: string;
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