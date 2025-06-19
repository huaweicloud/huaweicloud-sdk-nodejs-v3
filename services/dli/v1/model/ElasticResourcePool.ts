

export class ElasticResourcePool {
    private 'elastic_resource_pool_name'?: string;
    public id?: number;
    private 'update_time'?: number;
    public queues?: Array<string>;
    public owner?: string;
    public description?: string;
    private 'max_cu'?: number;
    private 'min_cu'?: number;
    private 'actual_cu'?: number;
    private 'cidr_in_vpc'?: string;
    private 'create_time'?: number;
    private 'current_cu'?: number;
    public status?: string;
    private 'resource_id'?: string;
    private 'fail_reason'?: string;
    private 'enterprise_project_id'?: string;
    private 'prepay_cu'?: number;
    private 'charging_mode'?: number;
    public manager?: string;
    public label?: { [key: string]: string; };
    private 'ipv6_enable'?: boolean;
    private 'ipv6_cidr_in_subnet'?: string;
    public constructor() { 
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): ElasticResourcePool {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withId(id: number): ElasticResourcePool {
        this['id'] = id;
        return this;
    }
    public withUpdateTime(updateTime: number): ElasticResourcePool {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withQueues(queues: Array<string>): ElasticResourcePool {
        this['queues'] = queues;
        return this;
    }
    public withOwner(owner: string): ElasticResourcePool {
        this['owner'] = owner;
        return this;
    }
    public withDescription(description: string): ElasticResourcePool {
        this['description'] = description;
        return this;
    }
    public withMaxCu(maxCu: number): ElasticResourcePool {
        this['max_cu'] = maxCu;
        return this;
    }
    public set maxCu(maxCu: number  | undefined) {
        this['max_cu'] = maxCu;
    }
    public get maxCu(): number | undefined {
        return this['max_cu'];
    }
    public withMinCu(minCu: number): ElasticResourcePool {
        this['min_cu'] = minCu;
        return this;
    }
    public set minCu(minCu: number  | undefined) {
        this['min_cu'] = minCu;
    }
    public get minCu(): number | undefined {
        return this['min_cu'];
    }
    public withActualCu(actualCu: number): ElasticResourcePool {
        this['actual_cu'] = actualCu;
        return this;
    }
    public set actualCu(actualCu: number  | undefined) {
        this['actual_cu'] = actualCu;
    }
    public get actualCu(): number | undefined {
        return this['actual_cu'];
    }
    public withCidrInVpc(cidrInVpc: string): ElasticResourcePool {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
    public withCreateTime(createTime: number): ElasticResourcePool {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCurrentCu(currentCu: number): ElasticResourcePool {
        this['current_cu'] = currentCu;
        return this;
    }
    public set currentCu(currentCu: number  | undefined) {
        this['current_cu'] = currentCu;
    }
    public get currentCu(): number | undefined {
        return this['current_cu'];
    }
    public withStatus(status: string): ElasticResourcePool {
        this['status'] = status;
        return this;
    }
    public withResourceId(resourceId: string): ElasticResourcePool {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFailReason(failReason: string): ElasticResourcePool {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ElasticResourcePool {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPrepayCu(prepayCu: number): ElasticResourcePool {
        this['prepay_cu'] = prepayCu;
        return this;
    }
    public set prepayCu(prepayCu: number  | undefined) {
        this['prepay_cu'] = prepayCu;
    }
    public get prepayCu(): number | undefined {
        return this['prepay_cu'];
    }
    public withChargingMode(chargingMode: number): ElasticResourcePool {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withManager(manager: string): ElasticResourcePool {
        this['manager'] = manager;
        return this;
    }
    public withLabel(label: { [key: string]: string; }): ElasticResourcePool {
        this['label'] = label;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): ElasticResourcePool {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6CidrInSubnet(ipv6CidrInSubnet: string): ElasticResourcePool {
        this['ipv6_cidr_in_subnet'] = ipv6CidrInSubnet;
        return this;
    }
    public set ipv6CidrInSubnet(ipv6CidrInSubnet: string  | undefined) {
        this['ipv6_cidr_in_subnet'] = ipv6CidrInSubnet;
    }
    public get ipv6CidrInSubnet(): string | undefined {
        return this['ipv6_cidr_in_subnet'];
    }
}