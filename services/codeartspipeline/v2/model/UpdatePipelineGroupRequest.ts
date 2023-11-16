import { PipelineGroupUpdateDTO } from './PipelineGroupUpdateDTO';


export class UpdatePipelineGroupRequest {
    public body?: PipelineGroupUpdateDTO;
    public constructor() { 
    }
    public withBody(body: PipelineGroupUpdateDTO): UpdatePipelineGroupRequest {
        this['body'] = body;
        return this;
    }
}