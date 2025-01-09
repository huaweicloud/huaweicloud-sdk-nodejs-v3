

export class DisconnectLogoutOptions {
    private 'disconnect_logout_minutes'?: number;
    public constructor() { 
    }
    public withDisconnectLogoutMinutes(disconnectLogoutMinutes: number): DisconnectLogoutOptions {
        this['disconnect_logout_minutes'] = disconnectLogoutMinutes;
        return this;
    }
    public set disconnectLogoutMinutes(disconnectLogoutMinutes: number  | undefined) {
        this['disconnect_logout_minutes'] = disconnectLogoutMinutes;
    }
    public get disconnectLogoutMinutes(): number | undefined {
        return this['disconnect_logout_minutes'];
    }
}