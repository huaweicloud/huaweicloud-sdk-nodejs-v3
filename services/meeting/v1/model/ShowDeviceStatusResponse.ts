import { UserStatusDTO } from './UserStatusDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceStatusResponse extends SdkResponse {
    public body?: Array<UserStatusDTO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserStatusDTO>): ShowDeviceStatusResponse {
        this['body'] = body;
        return this;
    }
}