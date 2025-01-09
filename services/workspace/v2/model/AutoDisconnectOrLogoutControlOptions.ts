

export class AutoDisconnectOrLogoutControlOptions {
    private 'auto_disconnect_minutes'?: number;
    public constructor() { 
    }
    public withAutoDisconnectMinutes(autoDisconnectMinutes: number): AutoDisconnectOrLogoutControlOptions {
        this['auto_disconnect_minutes'] = autoDisconnectMinutes;
        return this;
    }
    public set autoDisconnectMinutes(autoDisconnectMinutes: number  | undefined) {
        this['auto_disconnect_minutes'] = autoDisconnectMinutes;
    }
    public get autoDisconnectMinutes(): number | undefined {
        return this['auto_disconnect_minutes'];
    }
}