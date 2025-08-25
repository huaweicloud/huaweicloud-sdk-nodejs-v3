
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelAuthorizeAccessKeysResponse extends SdkResponse {
    private 'access_keys'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAccessKeys(accessKeys: Array<string>): CancelAuthorizeAccessKeysResponse {
        this['access_keys'] = accessKeys;
        return this;
    }
    public set accessKeys(accessKeys: Array<string>  | undefined) {
        this['access_keys'] = accessKeys;
    }
    public get accessKeys(): Array<string> | undefined {
        return this['access_keys'];
    }
}