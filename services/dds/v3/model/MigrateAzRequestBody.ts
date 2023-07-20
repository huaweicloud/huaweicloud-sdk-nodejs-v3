

export class MigrateAzRequestBody {
    private 'target_azs'?: string;
    public constructor(targetAzs?: string) { 
        this['target_azs'] = targetAzs;
    }
    public withTargetAzs(targetAzs: string): MigrateAzRequestBody {
        this['target_azs'] = targetAzs;
        return this;
    }
    public set targetAzs(targetAzs: string  | undefined) {
        this['target_azs'] = targetAzs;
    }
    public get targetAzs(): string | undefined {
        return this['target_azs'];
    }
}