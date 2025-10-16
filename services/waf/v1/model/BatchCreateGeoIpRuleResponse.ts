
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateGeoIpRuleResponse extends SdkResponse {
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
    public withId(id: string): BatchCreateGeoIpRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchCreateGeoIpRuleResponse {
        this['name'] = name;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateGeoIpRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withGeoip(geoip: string): BatchCreateGeoIpRuleResponse {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): BatchCreateGeoIpRuleResponse {
        this['white'] = white;
        return this;
    }
    public withStatus(status: number): BatchCreateGeoIpRuleResponse {
        this['status'] = status;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateGeoIpRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}