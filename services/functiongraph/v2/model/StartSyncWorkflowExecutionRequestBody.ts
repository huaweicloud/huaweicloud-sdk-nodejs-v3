

export class StartSyncWorkflowExecutionRequestBody {
    public headers?: object;
    public input?: object;
    public constructor() { 
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