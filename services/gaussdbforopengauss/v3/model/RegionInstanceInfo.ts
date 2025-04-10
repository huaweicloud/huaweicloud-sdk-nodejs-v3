

export class RegionInstanceInfo {
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'region_code'?: string;
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): RegionInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): RegionInstanceInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): RegionInstanceInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRegionCode(regionCode: string): RegionInstanceInfo {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withIpAddress(ipAddress: string): RegionInstanceInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}