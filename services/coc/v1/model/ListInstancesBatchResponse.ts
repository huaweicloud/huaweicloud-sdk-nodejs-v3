import { InstancesBatchResultMode } from './InstancesBatchResultMode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesBatchResponse extends SdkResponse {
    public data?: Array<InstancesBatchResultMode>;
    public constructor() { 
        super();
    }
    public withData(data: Array<InstancesBatchResultMode>): ListInstancesBatchResponse {
        this['data'] = data;
        return this;
    }
}