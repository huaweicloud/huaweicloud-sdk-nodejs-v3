import { ListPipelinesPagePipelines } from './ListPipelinesPagePipelines';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelinesResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public pipelines?: Array<ListPipelinesPagePipelines>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipelinesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelinesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipelinesResponse {
        this['total'] = total;
        return this;
    }
    public withPipelines(pipelines: Array<ListPipelinesPagePipelines>): ListPipelinesResponse {
        this['pipelines'] = pipelines;
        return this;
    }
}