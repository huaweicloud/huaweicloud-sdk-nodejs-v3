

export class ApplyCertificateToHostRequestBody {
    private 'cloud_host_ids'?: Array<string>;
    private 'premium_host_ids'?: Array<string>;
    public constructor() { 
    }
    public withCloudHostIds(cloudHostIds: Array<string>): ApplyCertificateToHostRequestBody {
        this['cloud_host_ids'] = cloudHostIds;
        return this;
    }
    public set cloudHostIds(cloudHostIds: Array<string>  | undefined) {
        this['cloud_host_ids'] = cloudHostIds;
    }
    public get cloudHostIds(): Array<string> | undefined {
        return this['cloud_host_ids'];
    }
    public withPremiumHostIds(premiumHostIds: Array<string>): ApplyCertificateToHostRequestBody {
        this['premium_host_ids'] = premiumHostIds;
        return this;
    }
    public set premiumHostIds(premiumHostIds: Array<string>  | undefined) {
        this['premium_host_ids'] = premiumHostIds;
    }
    public get premiumHostIds(): Array<string> | undefined {
        return this['premium_host_ids'];
    }
}