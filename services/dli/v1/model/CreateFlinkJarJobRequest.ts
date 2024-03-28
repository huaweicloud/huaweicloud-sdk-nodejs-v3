import { CreateFlinkJarJobRequestBody } from './CreateFlinkJarJobRequestBody';


export class CreateFlinkJarJobRequest {
    public body?: CreateFlinkJarJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkJarJobRequestBody): CreateFlinkJarJobRequest {
        this['body'] = body;
        return this;
    }
}