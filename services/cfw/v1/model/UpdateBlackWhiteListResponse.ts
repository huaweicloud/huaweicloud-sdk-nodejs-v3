import { BlackWhiteListId } from './BlackWhiteListId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBlackWhiteListResponse extends SdkResponse {
    public data?: BlackWhiteListId;
    public constructor() { 
        super();
    }
    public withData(data: BlackWhiteListId): UpdateBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
}