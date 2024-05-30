

export class ResetBridgeSecret {
    private 'force_disconnect'?: boolean;
    public constructor() { 
    }
    public withForceDisconnect(forceDisconnect: boolean): ResetBridgeSecret {
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