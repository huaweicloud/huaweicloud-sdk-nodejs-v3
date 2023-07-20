

export class ResetFingerprint {
    public fingerprint?: string;
    private 'force_disconnect'?: boolean;
    public constructor() { 
    }
    public withFingerprint(fingerprint: string): ResetFingerprint {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withForceDisconnect(forceDisconnect: boolean): ResetFingerprint {
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