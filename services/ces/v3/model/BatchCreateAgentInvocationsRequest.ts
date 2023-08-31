import { BatchCreateInvocationRequestBody } from './BatchCreateInvocationRequestBody';


export class BatchCreateAgentInvocationsRequest {
    public body?: BatchCreateInvocationRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateInvocationRequestBody): BatchCreateAgentInvocationsRequest {
        this['body'] = body;
        return this;
    }
}