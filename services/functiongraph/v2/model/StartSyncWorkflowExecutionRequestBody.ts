

export class StartSyncWorkflowExecutionRequestBody {
    public headers?: object;
    public input: object;
    public constructor(input?: any) { 
        this['input'] = input;
    }
    public withHeaders(headers: object): StartSyncWorkflowExecutionRequestBody {
        this['headers'] = headers;
        return this;
    }
    public withInput(input: object): StartSyncWorkflowExecutionRequestBody {
        this['input'] = input;
        return this;
    }
}