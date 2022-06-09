

export class StartWorkflowExecutionRequestBody {
    public headers?: object;
    public input: object;
    public constructor(input?: any) { 
        this['input'] = input;
    }
    public withHeaders(headers: object): StartWorkflowExecutionRequestBody {
        this['headers'] = headers;
        return this;
    }
    public withInput(input: object): StartWorkflowExecutionRequestBody {
        this['input'] = input;
        return this;
    }
}