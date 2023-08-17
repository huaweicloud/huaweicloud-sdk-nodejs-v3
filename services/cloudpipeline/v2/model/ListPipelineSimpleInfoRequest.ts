import { ListPipelineSimpleInfoRequestBody } from './ListPipelineSimpleInfoRequestBody';


export class ListPipelineSimpleInfoRequest {
    public body?: ListPipelineSimpleInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: ListPipelineSimpleInfoRequestBody): ListPipelineSimpleInfoRequest {
        this['body'] = body;
        return this;
    }
}