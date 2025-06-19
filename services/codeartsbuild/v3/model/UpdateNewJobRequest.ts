import { UpdateBuildJobRequestBody } from './UpdateBuildJobRequestBody';


export class UpdateNewJobRequest {
    public body?: UpdateBuildJobRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateBuildJobRequestBody): UpdateNewJobRequest {
        this['body'] = body;
        return this;
    }
}