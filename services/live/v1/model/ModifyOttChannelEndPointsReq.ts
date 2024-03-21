import { EndpointItem } from './EndpointItem';


export class ModifyOttChannelEndPointsReq {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public endpoints?: Array<EndpointItem>;
    public constructor(domain?: string, appName?: string, id?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
    }
    public withDomain(domain: string): ModifyOttChannelEndPointsReq {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelEndPointsReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelEndPointsReq {
        this['id'] = id;
        return this;
    }
    public withEndpoints(endpoints: Array<EndpointItem>): ModifyOttChannelEndPointsReq {
        this['endpoints'] = endpoints;
        return this;
    }
}