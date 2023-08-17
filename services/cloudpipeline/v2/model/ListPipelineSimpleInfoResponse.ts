import { PipelineBasicInfo } from './PipelineBasicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineSimpleInfoResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public result?: Array<PipelineBasicInfo>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipelineSimpleInfoResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineSimpleInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipelineSimpleInfoResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<PipelineBasicInfo>): ListPipelineSimpleInfoResponse {
        this['result'] = result;
        return this;
    }
}