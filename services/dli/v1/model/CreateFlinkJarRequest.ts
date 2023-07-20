import { CreateFlinkJarRequestBody } from './CreateFlinkJarRequestBody';


export class CreateFlinkJarRequest {
    public body?: CreateFlinkJarRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkJarRequestBody): CreateFlinkJarRequest {
        this['body'] = body;
        return this;
    }
}