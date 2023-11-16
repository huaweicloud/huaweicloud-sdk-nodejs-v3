import { PipelineGroupCreateDTO } from './PipelineGroupCreateDTO';


export class CreatePipelineGroupRequest {
    public body?: PipelineGroupCreateDTO;
    public constructor() { 
    }
    public withBody(body: PipelineGroupCreateDTO): CreatePipelineGroupRequest {
        this['body'] = body;
        return this;
    }
}