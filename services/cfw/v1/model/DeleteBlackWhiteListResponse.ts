import { BlackWhiteListId } from './BlackWhiteListId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBlackWhiteListResponse extends SdkResponse {
    public data?: BlackWhiteListId;
    public constructor() { 
        super();
    }
    public withData(data: BlackWhiteListId): DeleteBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
}