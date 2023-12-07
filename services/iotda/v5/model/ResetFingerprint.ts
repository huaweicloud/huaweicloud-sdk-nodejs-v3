

export class ResetFingerprint {
    public fingerprint?: string;
    private 'force_disconnect'?: boolean;
    private 'fingerprint_type'?: string;
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
    public withFingerprintType(fingerprintType: string): ResetFingerprint {
        this['fingerprint_type'] = fingerprintType;
        return this;
    }
    public set fingerprintType(fingerprintType: string  | undefined) {
        this['fingerprint_type'] = fingerprintType;
    }
    public get fingerprintType(): string | undefined {
        return this['fingerprint_type'];
    }
}