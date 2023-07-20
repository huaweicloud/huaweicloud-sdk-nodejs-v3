

export class ListQuotaResult {
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'instance_eps_quota'?: number;
    private 'vcpus_eps_quota'?: number;
    private 'ram_eps_quota'?: number;
    private 'volume_eps_quota'?: number;
    private 'instance_used'?: number;
    private 'vcpus_used'?: number;
    private 'ram_used'?: number;
    private 'volume_used'?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListQuotaResult {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ListQuotaResult {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withInstanceEpsQuota(instanceEpsQuota: number): ListQuotaResult {
        this['instance_eps_quota'] = instanceEpsQuota;
        return this;
    }
    public set instanceEpsQuota(instanceEpsQuota: number  | undefined) {
        this['instance_eps_quota'] = instanceEpsQuota;
    }
    public get instanceEpsQuota(): number | undefined {
        return this['instance_eps_quota'];
    }
    public withVcpusEpsQuota(vcpusEpsQuota: number): ListQuotaResult {
        this['vcpus_eps_quota'] = vcpusEpsQuota;
        return this;
    }
    public set vcpusEpsQuota(vcpusEpsQuota: number  | undefined) {
        this['vcpus_eps_quota'] = vcpusEpsQuota;
    }
    public get vcpusEpsQuota(): number | undefined {
        return this['vcpus_eps_quota'];
    }
    public withRamEpsQuota(ramEpsQuota: number): ListQuotaResult {
        this['ram_eps_quota'] = ramEpsQuota;
        return this;
    }
    public set ramEpsQuota(ramEpsQuota: number  | undefined) {
        this['ram_eps_quota'] = ramEpsQuota;
    }
    public get ramEpsQuota(): number | undefined {
        return this['ram_eps_quota'];
    }
    public withVolumeEpsQuota(volumeEpsQuota: number): ListQuotaResult {
        this['volume_eps_quota'] = volumeEpsQuota;
        return this;
    }
    public set volumeEpsQuota(volumeEpsQuota: number  | undefined) {
        this['volume_eps_quota'] = volumeEpsQuota;
    }
    public get volumeEpsQuota(): number | undefined {
        return this['volume_eps_quota'];
    }
    public withInstanceUsed(instanceUsed: number): ListQuotaResult {
        this['instance_used'] = instanceUsed;
        return this;
    }
    public set instanceUsed(instanceUsed: number  | undefined) {
        this['instance_used'] = instanceUsed;
    }
    public get instanceUsed(): number | undefined {
        return this['instance_used'];
    }
    public withVcpusUsed(vcpusUsed: number): ListQuotaResult {
        this['vcpus_used'] = vcpusUsed;
        return this;
    }
    public set vcpusUsed(vcpusUsed: number  | undefined) {
        this['vcpus_used'] = vcpusUsed;
    }
    public get vcpusUsed(): number | undefined {
        return this['vcpus_used'];
    }
    public withRamUsed(ramUsed: number): ListQuotaResult {
        this['ram_used'] = ramUsed;
        return this;
    }
    public set ramUsed(ramUsed: number  | undefined) {
        this['ram_used'] = ramUsed;
    }
    public get ramUsed(): number | undefined {
        return this['ram_used'];
    }
    public withVolumeUsed(volumeUsed: number): ListQuotaResult {
        this['volume_used'] = volumeUsed;
        return this;
    }
    public set volumeUsed(volumeUsed: number  | undefined) {
        this['volume_used'] = volumeUsed;
    }
    public get volumeUsed(): number | undefined {
        return this['volume_used'];
    }
}