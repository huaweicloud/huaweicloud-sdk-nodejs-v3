
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalFeatureGatesResponse extends SdkResponse {
    public enableUserDefObs?: boolean;
    public enableEnterprise?: boolean;
    public cerAvailable?: boolean;
    public enableOBSEncryptUserKmsKey?: boolean;
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
    public withEnableOBSEncryptUserKmsKey(enableOBSEncryptUserKmsKey: boolean): ListGlobalFeatureGatesResponse {
        this['enableOBSEncryptUserKmsKey'] = enableOBSEncryptUserKmsKey;
        return this;
    }
}