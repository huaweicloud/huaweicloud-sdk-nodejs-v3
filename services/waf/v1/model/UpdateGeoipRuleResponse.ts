
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGeoipRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public policyid?: string;
    public geoip?: string;
    public white?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateGeoipRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateGeoipRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGeoipRuleResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyid(policyid: string): UpdateGeoipRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withGeoip(geoip: string): UpdateGeoipRuleResponse {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): UpdateGeoipRuleResponse {
        this['white'] = white;
        return this;
    }
}