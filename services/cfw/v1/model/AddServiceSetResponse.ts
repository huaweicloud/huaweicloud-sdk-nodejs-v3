import { ServiceSetId } from './ServiceSetId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddServiceSetResponse extends SdkResponse {
    public data?: ServiceSetId;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetId): AddServiceSetResponse {
        this['data'] = data;
        return this;
    }
}