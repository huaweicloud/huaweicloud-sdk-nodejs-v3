import { RouteServerBody } from './RouteServerBody';


export class RouteBody {
    public cname?: string;
    public name?: string;
    public servers?: Array<RouteServerBody>;
    public constructor() { 
    }
    public withCname(cname: string): RouteBody {
        this['cname'] = cname;
        return this;
    }
    public withName(name: string): RouteBody {
        this['name'] = name;
        return this;
    }
    public withServers(servers: Array<RouteServerBody>): RouteBody {
        this['servers'] = servers;
        return this;
    }
}