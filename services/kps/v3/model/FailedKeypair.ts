

export class FailedKeypair {
    private 'keypair_name'?: string;
    private 'failed_reason'?: string;
    public constructor(keypairName?: string, failedReason?: string) { 
        this['keypair_name'] = keypairName;
        this['failed_reason'] = failedReason;
    }
    public withKeypairName(keypairName: string): FailedKeypair {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withFailedReason(failedReason: string): FailedKeypair {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
}