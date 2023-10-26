import { PipelineDTO } from './PipelineDTO';


export class CreatePipelineNewRequest {
    private 'component_id'?: string;
    public body?: PipelineDTO;
    public constructor() { 
    }
    public withComponentId(componentId: string): CreatePipelineNewRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withBody(body: PipelineDTO): CreatePipelineNewRequest {
        this['body'] = body;
        return this;
    }
}