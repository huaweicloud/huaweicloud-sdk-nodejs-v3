
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDisableAccessKeysResponse extends SdkResponse {
    private 'access_key_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAccessKeyIds(accessKeyIds: Array<string>): BatchDisableAccessKeysResponse {
        this['access_key_ids'] = accessKeyIds;
        return this;
    }
    public set accessKeyIds(accessKeyIds: Array<string>  | undefined) {
        this['access_key_ids'] = accessKeyIds;
    }
    public get accessKeyIds(): Array<string> | undefined {
        return this['access_key_ids'];
    }
}