import { PipelineGroupBindDTO } from './PipelineGroupBindDTO';


export class BatchMovePipelineToGroupRequest {
    public body?: PipelineGroupBindDTO;
    public constructor() { 
    }
    public withBody(body: PipelineGroupBindDTO): BatchMovePipelineToGroupRequest {
        this['body'] = body;
        return this;
    }
}