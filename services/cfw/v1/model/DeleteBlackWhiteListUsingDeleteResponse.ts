import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBlackWhiteListUsingDeleteResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): DeleteBlackWhiteListUsingDeleteResponse {
        this['data'] = data;
        return this;
    }
}