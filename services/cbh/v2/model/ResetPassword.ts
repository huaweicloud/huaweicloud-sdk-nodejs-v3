

export class ResetPassword {
    private 'new_password'?: string;
    private 'server_id'?: object;
    public constructor(newPassword?: string, serverId?: object) { 
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
    public withServerId(serverId: object): ResetPassword {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: object  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): object | undefined {
        return this['server_id'];
    }
}