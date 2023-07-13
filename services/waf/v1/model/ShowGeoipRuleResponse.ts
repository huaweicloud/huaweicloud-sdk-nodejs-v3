
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGeoipRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public geoip?: string;
    public white?: number;
    public status?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowGeoipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowGeoipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withGeoip(geoip: string): ShowGeoipRuleResponse {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): ShowGeoipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): ShowGeoipRuleResponse {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): ShowGeoipRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}