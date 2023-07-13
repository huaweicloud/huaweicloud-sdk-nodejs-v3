

export class ClusterElbInfo {
    public id?: string;
    private 'cluster_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'vip_address'?: string | undefined;
    private 'vip_subnet_id'?: string | undefined;
    private 'tenant_id'?: string | undefined;
    public type?: string;
    private 'admin_state_up'?: boolean | undefined;
    public bandwidth?: number;
    private 'vpc_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): ClusterElbInfo {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): ClusterElbInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withName(name: string): ClusterElbInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ClusterElbInfo {
        this['description'] = description;
        return this;
    }
    public withVipAddress(vipAddress: string): ClusterElbInfo {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress() {
        return this['vip_address'];
    }
    public withVipSubnetId(vipSubnetId: string): ClusterElbInfo {
        this['vip_subnet_id'] = vipSubnetId;
        return this;
    }
    public set vipSubnetId(vipSubnetId: string | undefined) {
        this['vip_subnet_id'] = vipSubnetId;
    }
    public get vipSubnetId() {
        return this['vip_subnet_id'];
    }
    public withTenantId(tenantId: string): ClusterElbInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withType(type: string): ClusterElbInfo {
        this['type'] = type;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ClusterElbInfo {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withBandwidth(bandwidth: number): ClusterElbInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withVpcId(vpcId: string): ClusterElbInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}