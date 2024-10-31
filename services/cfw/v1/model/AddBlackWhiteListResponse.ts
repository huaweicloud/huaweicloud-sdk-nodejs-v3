import { BlackWhiteListId } from './BlackWhiteListId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddBlackWhiteListResponse extends SdkResponse {
    public data?: BlackWhiteListId;
    public constructor() { 
        super();
    }
    public withData(data: BlackWhiteListId): AddBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
}