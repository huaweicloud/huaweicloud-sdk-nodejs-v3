

export class ResetPassword {
    private 'new_password'?: string;
    private 'server_id'?: string;
    public constructor(newPassword?: string, serverId?: string) { 
        this['new_password'] = newPassword;
        this['server_id'] = serverId;
    }
    public withNewPassword(newPassword: string): ResetPassword {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
    public withServerId(serverId: string): ResetPassword {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}