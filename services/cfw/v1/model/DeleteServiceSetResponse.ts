import { ServiceSetId } from './ServiceSetId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteServiceSetResponse extends SdkResponse {
    public data?: ServiceSetId;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetId): DeleteServiceSetResponse {
        this['data'] = data;
        return this;
    }
}