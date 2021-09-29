import { ServerId } from './ServerId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchResetServersPasswordResponse extends SdkResponse {
    public response?: Array<ServerId>;
    public constructor() { 
        super();
    }
    public withResponse(response: Array<ServerId>): BatchResetServersPasswordResponse {
        this['response'] = response;
        return this;
    }
}