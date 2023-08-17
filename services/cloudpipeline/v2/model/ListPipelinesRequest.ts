import { ListPipelineQuery } from './ListPipelineQuery';


export class ListPipelinesRequest {
    public body?: ListPipelineQuery;
    public constructor() { 
    }
    public withBody(body: ListPipelineQuery): ListPipelinesRequest {
        this['body'] = body;
        return this;
    }
}