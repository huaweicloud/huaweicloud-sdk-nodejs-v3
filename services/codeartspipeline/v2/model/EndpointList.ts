import { Endpoint } from './Endpoint';


export class EndpointList {
    public endpoints?: Array<Endpoint>;
    public total?: number;
    public constructor() { 
    }
    public withEndpoints(endpoints: Array<Endpoint>): EndpointList {
        this['endpoints'] = endpoints;
        return this;
    }
    public withTotal(total: number): EndpointList {
        this['total'] = total;
        return this;
    }
}