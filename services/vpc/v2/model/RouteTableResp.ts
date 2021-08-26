import { RouteTableRoute } from './RouteTableRoute';
import { SubnetList } from './SubnetList';


export class RouteTableResp {
    public id: string;
    public name: string;
    private 'default': boolean | undefined;
    public routes: Array<RouteTableRoute>;
    public subnets: Array<SubnetList>;
    private 'tenant_id': string | undefined;
    private 'vpc_id': string | undefined;
    public description: string;
    public constructor(id?: any, name?: any, _default?: any, routes?: any, subnets?: any, tenantId?: any, vpcId?: any, description?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['default'] = _default;
        this['routes'] = routes;
        this['subnets'] = subnets;
        this['tenant_id'] = tenantId;
        this['vpc_id'] = vpcId;
        this['description'] = description;
    }
    public withId(id: string): RouteTableResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RouteTableResp {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: boolean): RouteTableResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withRoutes(routes: Array<RouteTableRoute>): RouteTableResp {
        this['routes'] = routes;
        return this;
    }
    public withSubnets(subnets: Array<SubnetList>): RouteTableResp {
        this['subnets'] = subnets;
        return this;
    }
    public withTenantId(tenantId: string): RouteTableResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withVpcId(vpcId: string): RouteTableResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDescription(description: string): RouteTableResp {
        this['description'] = description;
        return this;
    }
}