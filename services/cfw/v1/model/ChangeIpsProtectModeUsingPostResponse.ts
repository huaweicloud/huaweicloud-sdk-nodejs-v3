import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsProtectModeUsingPostResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): ChangeIpsProtectModeUsingPostResponse {
        this['data'] = data;
        return this;
    }
}