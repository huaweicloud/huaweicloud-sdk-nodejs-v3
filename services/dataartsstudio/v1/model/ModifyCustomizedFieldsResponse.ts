import { ModifyCustomizedFieldsResultData } from './ModifyCustomizedFieldsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyCustomizedFieldsResponse extends SdkResponse {
    public data?: ModifyCustomizedFieldsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ModifyCustomizedFieldsResultData): ModifyCustomizedFieldsResponse {
        this['data'] = data;
        return this;
    }
}