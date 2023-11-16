import { UpdateBuildJobRequestBody } from './UpdateBuildJobRequestBody';


export class UpdateBuildJobRequest {
    public body?: UpdateBuildJobRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateBuildJobRequestBody): UpdateBuildJobRequest {
        this['body'] = body;
        return this;
    }
}