

export class VaultBatchUpdate {
    private 'smn_notify'?: boolean;
    public threshold?: number;
    public constructor() { 
    }
    public withSmnNotify(smnNotify: boolean): VaultBatchUpdate {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean  | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify(): boolean | undefined {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): VaultBatchUpdate {
        this['threshold'] = threshold;
        return this;
    }
}