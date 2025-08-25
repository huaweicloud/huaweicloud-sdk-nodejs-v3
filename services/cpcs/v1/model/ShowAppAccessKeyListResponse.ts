import { AccessKeyInfo } from './AccessKeyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppAccessKeyListResponse extends SdkResponse {
    public result?: Array<AccessKeyInfo>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AccessKeyInfo>): ShowAppAccessKeyListResponse {
        this['result'] = result;
        return this;
    }
}