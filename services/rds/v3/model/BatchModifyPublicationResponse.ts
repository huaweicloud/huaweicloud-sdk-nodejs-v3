import { BatchOperateResponseInfo } from './BatchOperateResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchModifyPublicationResponse extends SdkResponse {
    public publications?: Array<BatchOperateResponseInfo>;
    public constructor() { 
        super();
    }
    public withPublications(publications: Array<BatchOperateResponseInfo>): BatchModifyPublicationResponse {
        this['publications'] = publications;
        return this;
    }
}