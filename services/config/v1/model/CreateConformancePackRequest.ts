import { ConformancePackRequestBody } from './ConformancePackRequestBody';


export class CreateConformancePackRequest {
    public body?: ConformancePackRequestBody;
    public constructor() { 
    }
    public withBody(body: ConformancePackRequestBody): CreateConformancePackRequest {
        this['body'] = body;
        return this;
    }
}