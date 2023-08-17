import { ListPipelineRunsQuery } from './ListPipelineRunsQuery';


export class ListPipelineRunsRequest {
    private 'pipeline_id'?: string;
    public body?: ListPipelineRunsQuery;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): ListPipelineRunsRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBody(body: ListPipelineRunsQuery): ListPipelineRunsRequest {
        this['body'] = body;
        return this;
    }
}