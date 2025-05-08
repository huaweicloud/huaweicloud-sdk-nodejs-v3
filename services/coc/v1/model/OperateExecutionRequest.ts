import { OperateExecutionRequestBody } from './OperateExecutionRequestBody';


export class OperateExecutionRequest {
    public body?: OperateExecutionRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateExecutionRequestBody): OperateExecutionRequest {
        this['body'] = body;
        return this;
    }
}