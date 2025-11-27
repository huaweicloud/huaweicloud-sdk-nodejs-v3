import { GroupCreateResponseData } from './GroupCreateResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationGroupResponse extends SdkResponse {
    public data?: GroupCreateResponseData;
    public constructor() { 
        super();
    }
    public withData(data: GroupCreateResponseData): CreateApplicationGroupResponse {
        this['data'] = data;
        return this;
    }
}