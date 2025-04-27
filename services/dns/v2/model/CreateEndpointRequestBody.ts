import { IpaddressInfo } from './IpaddressInfo';


export class CreateEndpointRequestBody {
    public name?: string;
    public direction?: string;
    public region?: string;
    public ipaddresses?: Array<IpaddressInfo>;
    public constructor(name?: string, direction?: string, region?: string, ipaddresses?: Array<IpaddressInfo>) { 
        this['name'] = name;
        this['direction'] = direction;
        this['region'] = region;
        this['ipaddresses'] = ipaddresses;
    }
    public withName(name: string): CreateEndpointRequestBody {
        this['name'] = name;
        return this;
    }
    public withDirection(direction: string): CreateEndpointRequestBody {
        this['direction'] = direction;
        return this;
    }
    public withRegion(region: string): CreateEndpointRequestBody {
        this['region'] = region;
        return this;
    }
    public withIpaddresses(ipaddresses: Array<IpaddressInfo>): CreateEndpointRequestBody {
        this['ipaddresses'] = ipaddresses;
        return this;
    }
}