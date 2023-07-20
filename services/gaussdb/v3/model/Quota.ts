

export class Quota {
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'instance_quota'?: number;
    private 'vcpus_quota'?: number;
    private 'ram_quota'?: number;
    private 'availability_instance_quota'?: number;
    private 'availability_vcpus_quota'?: number;
    private 'availability_ram_quota'?: number;
    public constructor(enterpriseProjectId?: string, enterpriseProjectName?: string, instanceQuota?: number, vcpusQuota?: number, ramQuota?: number, availabilityInstanceQuota?: number, availabilityRamQuota?: number) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['enterprise_project_name'] = enterpriseProjectName;
        this['instance_quota'] = instanceQuota;
        this['vcpus_quota'] = vcpusQuota;
        this['ram_quota'] = ramQuota;
        this['availability_instance_quota'] = availabilityInstanceQuota;
        this['availability_ram_quota'] = availabilityRamQuota;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Quota {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): Quota {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withInstanceQuota(instanceQuota: number): Quota {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: number  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): number | undefined {
        return this['instance_quota'];
    }
    public withVcpusQuota(vcpusQuota: number): Quota {
        this['vcpus_quota'] = vcpusQuota;
        return this;
    }
    public set vcpusQuota(vcpusQuota: number  | undefined) {
        this['vcpus_quota'] = vcpusQuota;
    }
    public get vcpusQuota(): number | undefined {
        return this['vcpus_quota'];
    }
    public withRamQuota(ramQuota: number): Quota {
        this['ram_quota'] = ramQuota;
        return this;
    }
    public set ramQuota(ramQuota: number  | undefined) {
        this['ram_quota'] = ramQuota;
    }
    public get ramQuota(): number | undefined {
        return this['ram_quota'];
    }
    public withAvailabilityInstanceQuota(availabilityInstanceQuota: number): Quota {
        this['availability_instance_quota'] = availabilityInstanceQuota;
        return this;
    }
    public set availabilityInstanceQuota(availabilityInstanceQuota: number  | undefined) {
        this['availability_instance_quota'] = availabilityInstanceQuota;
    }
    public get availabilityInstanceQuota(): number | undefined {
        return this['availability_instance_quota'];
    }
    public withAvailabilityVcpusQuota(availabilityVcpusQuota: number): Quota {
        this['availability_vcpus_quota'] = availabilityVcpusQuota;
        return this;
    }
    public set availabilityVcpusQuota(availabilityVcpusQuota: number  | undefined) {
        this['availability_vcpus_quota'] = availabilityVcpusQuota;
    }
    public get availabilityVcpusQuota(): number | undefined {
        return this['availability_vcpus_quota'];
    }
    public withAvailabilityRamQuota(availabilityRamQuota: number): Quota {
        this['availability_ram_quota'] = availabilityRamQuota;
        return this;
    }
    public set availabilityRamQuota(availabilityRamQuota: number  | undefined) {
        this['availability_ram_quota'] = availabilityRamQuota;
    }
    public get availabilityRamQuota(): number | undefined {
        return this['availability_ram_quota'];
    }
}