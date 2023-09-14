import { ListPipelineRunsPagePipelineRuns } from './ListPipelineRunsPagePipelineRuns';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelineRunsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'pipeline_runs'?: Array<ListPipelineRunsPagePipelineRuns>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipelineRunsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineRunsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipelineRunsResponse {
        this['total'] = total;
        return this;
    }
    public withPipelineRuns(pipelineRuns: Array<ListPipelineRunsPagePipelineRuns>): ListPipelineRunsResponse {
        this['pipeline_runs'] = pipelineRuns;
        return this;
    }
    public set pipelineRuns(pipelineRuns: Array<ListPipelineRunsPagePipelineRuns>  | undefined) {
        this['pipeline_runs'] = pipelineRuns;
    }
    public get pipelineRuns(): Array<ListPipelineRunsPagePipelineRuns> | undefined {
        return this['pipeline_runs'];
    }
}