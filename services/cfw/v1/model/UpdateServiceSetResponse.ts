import { ServiceSetId } from './ServiceSetId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateServiceSetResponse extends SdkResponse {
    public data?: ServiceSetId;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetId): UpdateServiceSetResponse {
        this['data'] = data;
        return this;
    }
}