import { CreateRetrievalRequestBody } from './CreateRetrievalRequestBody';


export class CreateRetrievalRequest {
    public body?: CreateRetrievalRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateRetrievalRequestBody): CreateRetrievalRequest {
        this['body'] = body;
        return this;
    }
}