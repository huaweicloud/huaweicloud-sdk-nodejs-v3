

export class ResetDeviceSecret {
    public secret?: string;
    private 'force_disconnect'?: boolean;
    public constructor() { 
    }
    public withSecret(secret: string): ResetDeviceSecret {
        this['secret'] = secret;
        return this;
    }
    public withForceDisconnect(forceDisconnect: boolean): ResetDeviceSecret {
        this['force_disconnect'] = forceDisconnect;
        return this;
    }
    public set forceDisconnect(forceDisconnect: boolean  | undefined) {
        this['force_disconnect'] = forceDisconnect;
    }
    public get forceDisconnect(): boolean | undefined {
        return this['force_disconnect'];
    }
}