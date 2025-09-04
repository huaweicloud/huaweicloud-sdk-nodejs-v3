

export class ShowDomainStatusResult {
    public status?: number;
    private 'free_quota'?: boolean;
    private 'allow_custom_env'?: number;
    public constructor() { 
    }
    public withStatus(status: number): ShowDomainStatusResult {
        this['status'] = status;
        return this;
    }
    public withFreeQuota(freeQuota: boolean): ShowDomainStatusResult {
        this['free_quota'] = freeQuota;
        return this;
    }
    public set freeQuota(freeQuota: boolean  | undefined) {
        this['free_quota'] = freeQuota;
    }
    public get freeQuota(): boolean | undefined {
        return this['free_quota'];
    }
    public withAllowCustomEnv(allowCustomEnv: number): ShowDomainStatusResult {
        this['allow_custom_env'] = allowCustomEnv;
        return this;
    }
    public set allowCustomEnv(allowCustomEnv: number  | undefined) {
        this['allow_custom_env'] = allowCustomEnv;
    }
    public get allowCustomEnv(): number | undefined {
        return this['allow_custom_env'];
    }
}