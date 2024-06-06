import { PipelineDTO } from './PipelineDTO';


export class UpdatePipelineInfoRequest {
    private 'pipeline_id'?: string;
    public componentId?: string;
    public body?: PipelineDTO;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): UpdatePipelineInfoRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withComponentId(componentId: string): UpdatePipelineInfoRequest {
        this['componentId'] = componentId;
        return this;
    }
    public withBody(body: PipelineDTO): UpdatePipelineInfoRequest {
        this['body'] = body;
        return this;
    }
}