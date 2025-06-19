import { CopyBuildJobRequestBody } from './CopyBuildJobRequestBody';


export class CopyJobRequest {
    public body?: CopyBuildJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CopyBuildJobRequestBody): CopyJobRequest {
        this['body'] = body;
        return this;
    }
}