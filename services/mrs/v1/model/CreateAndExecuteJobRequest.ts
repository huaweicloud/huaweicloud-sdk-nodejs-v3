import { SubmitJobReqV11 } from './SubmitJobReqV11';


export class CreateAndExecuteJobRequest {
    public body?: SubmitJobReqV11;
    public constructor() { 
    }
    public withBody(body: SubmitJobReqV11): CreateAndExecuteJobRequest {
        this['body'] = body;
        return this;
    }
}