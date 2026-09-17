import { QueryRunRequestBody } from './QueryRunRequestBody';


export class RunQueryRequest {
    public body?: QueryRunRequestBody;
    public constructor() { 
    }
    public withBody(body: QueryRunRequestBody): RunQueryRequest {
        this['body'] = body;
        return this;
    }
}