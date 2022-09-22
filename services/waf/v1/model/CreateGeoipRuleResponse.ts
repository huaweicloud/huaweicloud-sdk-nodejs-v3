
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGeoipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public geoip?: string;
    public white?: number;
    public status?: number;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateGeoipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateGeoipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): CreateGeoipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withGeoip(geoip: string): CreateGeoipRuleResponse {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): CreateGeoipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): CreateGeoipRuleResponse {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): CreateGeoipRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}