import { UpdateStandardResultData } from './UpdateStandardResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStandardResponse extends SdkResponse {
    public data?: UpdateStandardResultData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateStandardResultData): UpdateStandardResponse {
        this['data'] = data;
        return this;
    }
}