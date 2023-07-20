

export class SetQuota {
    private 'enterprise_project_id'?: string;
    private 'instance_quota'?: number;
    private 'vcpus_quota'?: number;
    private 'ram_quota'?: number;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetQuota {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceQuota(instanceQuota: number): SetQuota {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: number  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): number | undefined {
        return this['instance_quota'];
    }
    public withVcpusQuota(vcpusQuota: number): SetQuota {
        this['vcpus_quota'] = vcpusQuota;
        return this;
    }
    public set vcpusQuota(vcpusQuota: number  | undefined) {
        this['vcpus_quota'] = vcpusQuota;
    }
    public get vcpusQuota(): number | undefined {
        return this['vcpus_quota'];
    }
    public withRamQuota(ramQuota: number): SetQuota {
        this['ram_quota'] = ramQuota;
        return this;
    }
    public set ramQuota(ramQuota: number  | undefined) {
        this['ram_quota'] = ramQuota;
    }
    public get ramQuota(): number | undefined {
        return this['ram_quota'];
    }
}