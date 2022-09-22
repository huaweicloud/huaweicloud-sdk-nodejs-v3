
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteGeoipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public policyid?: string;
    public geoip?: string;
    public white?: number;
    public status?: number;
    public description?: string;
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteGeoipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DeleteGeoipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): DeleteGeoipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withGeoip(geoip: string): DeleteGeoipRuleResponse {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): DeleteGeoipRuleResponse {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): DeleteGeoipRuleResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): DeleteGeoipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteGeoipRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}