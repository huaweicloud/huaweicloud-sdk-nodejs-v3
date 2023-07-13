import { SubnetList } from './SubnetList';


export class RouteTableListResp {
    public id: string;
    public name: string;
    private 'default': boolean | undefined;
    public subnets: Array<SubnetList>;
    private 'tenant_id': string | undefined;
    private 'vpc_id': string | undefined;
    public description: string;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(id?: any, name?: any, _default?: any, subnets?: any, tenantId?: any, vpcId?: any, description?: any, createdAt?: any, updatedAt?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['default'] = _default;
        this['subnets'] = subnets;
        this['tenant_id'] = tenantId;
        this['vpc_id'] = vpcId;
        this['description'] = description;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): RouteTableListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RouteTableListResp {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: boolean): RouteTableListResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withSubnets(subnets: Array<SubnetList>): RouteTableListResp {
        this['subnets'] = subnets;
        return this;
    }
    public withTenantId(tenantId: string): RouteTableListResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withVpcId(vpcId: string): RouteTableListResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDescription(description: string): RouteTableListResp {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): RouteTableListResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): RouteTableListResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}