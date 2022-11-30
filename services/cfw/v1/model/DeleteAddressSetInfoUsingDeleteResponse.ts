import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAddressSetInfoUsingDeleteResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): DeleteAddressSetInfoUsingDeleteResponse {
        this['data'] = data;
        return this;
    }
}