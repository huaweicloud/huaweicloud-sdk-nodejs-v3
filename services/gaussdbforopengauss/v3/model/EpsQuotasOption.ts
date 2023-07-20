

export class EpsQuotasOption {
    private 'enterprise_projects_id'?: string;
    private 'instance_quota'?: number;
    private 'vcpus_quota'?: number;
    private 'ram_quota'?: number;
    private 'volume_quota'?: number;
    public constructor(enterpriseProjectsId?: string) { 
        this['enterprise_projects_id'] = enterpriseProjectsId;
    }
    public withEnterpriseProjectsId(enterpriseProjectsId: string): EpsQuotasOption {
        this['enterprise_projects_id'] = enterpriseProjectsId;
        return this;
    }
    public set enterpriseProjectsId(enterpriseProjectsId: string  | undefined) {
        this['enterprise_projects_id'] = enterpriseProjectsId;
    }
    public get enterpriseProjectsId(): string | undefined {
        return this['enterprise_projects_id'];
    }
    public withInstanceQuota(instanceQuota: number): EpsQuotasOption {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: number  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): number | undefined {
        return this['instance_quota'];
    }
    public withVcpusQuota(vcpusQuota: number): EpsQuotasOption {
        this['vcpus_quota'] = vcpusQuota;
        return this;
    }
    public set vcpusQuota(vcpusQuota: number  | undefined) {
        this['vcpus_quota'] = vcpusQuota;
    }
    public get vcpusQuota(): number | undefined {
        return this['vcpus_quota'];
    }
    public withRamQuota(ramQuota: number): EpsQuotasOption {
        this['ram_quota'] = ramQuota;
        return this;
    }
    public set ramQuota(ramQuota: number  | undefined) {
        this['ram_quota'] = ramQuota;
    }
    public get ramQuota(): number | undefined {
        return this['ram_quota'];
    }
    public withVolumeQuota(volumeQuota: number): EpsQuotasOption {
        this['volume_quota'] = volumeQuota;
        return this;
    }
    public set volumeQuota(volumeQuota: number  | undefined) {
        this['volume_quota'] = volumeQuota;
    }
    public get volumeQuota(): number | undefined {
        return this['volume_quota'];
    }
}