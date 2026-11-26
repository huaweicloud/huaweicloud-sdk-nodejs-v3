
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalFeatureGatesResponse extends SdkResponse {
    public enableUserDefObs?: boolean;
    public enableEnterprise?: boolean;
    public cerAvailable?: boolean;
    public enableIntranetAccessSwitch?: boolean;
    public enableConsoleAgency?: boolean;
    public enableV5CustomAgency?: boolean;
    public agencyName?: string;
    public constructor() { 
        super();
    }
    public withEnableUserDefObs(enableUserDefObs: boolean): ListGlobalFeatureGatesResponse {
        this['enableUserDefObs'] = enableUserDefObs;
        return this;
    }
    public withEnableEnterprise(enableEnterprise: boolean): ListGlobalFeatureGatesResponse {
        this['enableEnterprise'] = enableEnterprise;
        return this;
    }
    public withCerAvailable(cerAvailable: boolean): ListGlobalFeatureGatesResponse {
        this['cerAvailable'] = cerAvailable;
        return this;
    }
    public withEnableIntranetAccessSwitch(enableIntranetAccessSwitch: boolean): ListGlobalFeatureGatesResponse {
        this['enableIntranetAccessSwitch'] = enableIntranetAccessSwitch;
        return this;
    }
    public withEnableConsoleAgency(enableConsoleAgency: boolean): ListGlobalFeatureGatesResponse {
        this['enableConsoleAgency'] = enableConsoleAgency;
        return this;
    }
    public withEnableV5CustomAgency(enableV5CustomAgency: boolean): ListGlobalFeatureGatesResponse {
        this['enableV5CustomAgency'] = enableV5CustomAgency;
        return this;
    }
    public withAgencyName(agencyName: string): ListGlobalFeatureGatesResponse {
        this['agencyName'] = agencyName;
        return this;
    }
}