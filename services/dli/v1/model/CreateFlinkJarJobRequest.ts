import { CreateFlinkJarRequestBody } from './CreateFlinkJarRequestBody';


export class CreateFlinkJarJobRequest {
    public body?: CreateFlinkJarRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkJarRequestBody): CreateFlinkJarJobRequest {
        this['body'] = body;
        return this;
    }
}