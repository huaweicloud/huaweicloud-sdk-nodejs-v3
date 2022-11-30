import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteServiceSetUsingDeleteResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): DeleteServiceSetUsingDeleteResponse {
        this['data'] = data;
        return this;
    }
}