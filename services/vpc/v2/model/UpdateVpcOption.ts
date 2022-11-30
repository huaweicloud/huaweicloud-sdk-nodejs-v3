import { Route } from './Route';


export class UpdateVpcOption {
    public name?: string;
    public description?: string;
    public cidr?: string;
    public routes?: Array<Route>;
    public constructor() { 
    }
    public withName(name: string): UpdateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVpcOption {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): UpdateVpcOption {
        this['cidr'] = cidr;
        return this;
    }
    public withRoutes(routes: Array<Route>): UpdateVpcOption {
        this['routes'] = routes;
        return this;
    }
}