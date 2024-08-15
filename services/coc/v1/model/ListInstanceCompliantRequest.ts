

export class ListInstanceCompliantRequest {
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'instance_id'?: string;
    public ip?: string;
    public eip?: string;
    private 'operating_system'?: string;
    public region?: string;
    public group?: string;
    private 'compliant_status'?: string;
    private 'order_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    private 'report_scene'?: string;
    private 'cce_info_id'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceCompliantRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ListInstanceCompliantRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstanceCompliantRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): ListInstanceCompliantRequest {
        this['ip'] = ip;
        return this;
    }
    public withEip(eip: string): ListInstanceCompliantRequest {
        this['eip'] = eip;
        return this;
    }
    public withOperatingSystem(operatingSystem: string): ListInstanceCompliantRequest {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withRegion(region: string): ListInstanceCompliantRequest {
        this['region'] = region;
        return this;
    }
    public withGroup(group: string): ListInstanceCompliantRequest {
        this['group'] = group;
        return this;
    }
    public withCompliantStatus(compliantStatus: string): ListInstanceCompliantRequest {
        this['compliant_status'] = compliantStatus;
        return this;
    }
    public set compliantStatus(compliantStatus: string  | undefined) {
        this['compliant_status'] = compliantStatus;
    }
    public get compliantStatus(): string | undefined {
        return this['compliant_status'];
    }
    public withOrderId(orderId: string): ListInstanceCompliantRequest {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOffset(offset: number): ListInstanceCompliantRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceCompliantRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortDir(sortDir: string): ListInstanceCompliantRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListInstanceCompliantRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withReportScene(reportScene: string): ListInstanceCompliantRequest {
        this['report_scene'] = reportScene;
        return this;
    }
    public set reportScene(reportScene: string  | undefined) {
        this['report_scene'] = reportScene;
    }
    public get reportScene(): string | undefined {
        return this['report_scene'];
    }
    public withCceInfoId(cceInfoId: string): ListInstanceCompliantRequest {
        this['cce_info_id'] = cceInfoId;
        return this;
    }
    public set cceInfoId(cceInfoId: string  | undefined) {
        this['cce_info_id'] = cceInfoId;
    }
    public get cceInfoId(): string | undefined {
        return this['cce_info_id'];
    }
}