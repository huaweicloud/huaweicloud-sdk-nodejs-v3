import { RestQosRequestDTO } from './RestQosRequestDTO';


export class ListNetworkQualityRequest {
    public conferenceid?: string;
    public confToken?: string;
    public appid?: string;
    public confuuid?: string;
    public body?: RestQosRequestDTO;
    public constructor(conferenceid?: string, confToken?: string, confuuid?: string) { 
        this['conferenceid'] = conferenceid;
        this['confToken'] = confToken;
        this['confuuid'] = confuuid;
    }
    public withConferenceid(conferenceid: string): ListNetworkQualityRequest {
        this['conferenceid'] = conferenceid;
        return this;
    }
    public withConfToken(confToken: string): ListNetworkQualityRequest {
        this['confToken'] = confToken;
        return this;
    }
    public withAppid(appid: string): ListNetworkQualityRequest {
        this['appid'] = appid;
        return this;
    }
    public withConfuuid(confuuid: string): ListNetworkQualityRequest {
        this['confuuid'] = confuuid;
        return this;
    }
    public withBody(body: RestQosRequestDTO): ListNetworkQualityRequest {
        this['body'] = body;
        return this;
    }
}