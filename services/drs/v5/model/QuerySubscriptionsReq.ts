

export class QuerySubscriptionsReq {
    private 'job_type'?: string;
    private 'engine_type'?: string;
    private 'net_type'?: string;
    public name?: string;
    public status?: string;
    private 'enterprise_project_id'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'instance_ids'?: Array<string>;
    private 'instance_ip'?: string;
    public tags?: { [key: string]: string; };
    private 'service_name'?: string;
    public description?: string;
    private 'is_billing'?: boolean;
    private 'begin_at'?: string;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withJobType(jobType: string): QuerySubscriptionsReq {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withEngineType(engineType: string): QuerySubscriptionsReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: string): QuerySubscriptionsReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): string | undefined {
        return this['net_type'];
    }
    public withName(name: string): QuerySubscriptionsReq {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): QuerySubscriptionsReq {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QuerySubscriptionsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSortKey(sortKey: string): QuerySubscriptionsReq {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): QuerySubscriptionsReq {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withInstanceIds(instanceIds: Array<string>): QuerySubscriptionsReq {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withInstanceIp(instanceIp: string): QuerySubscriptionsReq {
        this['instance_ip'] = instanceIp;
        return this;
    }
    public set instanceIp(instanceIp: string  | undefined) {
        this['instance_ip'] = instanceIp;
    }
    public get instanceIp(): string | undefined {
        return this['instance_ip'];
    }
    public withTags(tags: { [key: string]: string; }): QuerySubscriptionsReq {
        this['tags'] = tags;
        return this;
    }
    public withServiceName(serviceName: string): QuerySubscriptionsReq {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withDescription(description: string): QuerySubscriptionsReq {
        this['description'] = description;
        return this;
    }
    public withIsBilling(isBilling: boolean): QuerySubscriptionsReq {
        this['is_billing'] = isBilling;
        return this;
    }
    public set isBilling(isBilling: boolean  | undefined) {
        this['is_billing'] = isBilling;
    }
    public get isBilling(): boolean | undefined {
        return this['is_billing'];
    }
    public withBeginAt(beginAt: string): QuerySubscriptionsReq {
        this['begin_at'] = beginAt;
        return this;
    }
    public set beginAt(beginAt: string  | undefined) {
        this['begin_at'] = beginAt;
    }
    public get beginAt(): string | undefined {
        return this['begin_at'];
    }
}