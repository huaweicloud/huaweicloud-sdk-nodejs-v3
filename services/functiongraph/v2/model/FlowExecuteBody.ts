

export class FlowExecuteBody {
    public headers?: object;
    public input: object;
    public constructor(input?: any) { 
        this['input'] = input;
    }
    public withHeaders(headers: object): FlowExecuteBody {
        this['headers'] = headers;
        return this;
    }
    public withInput(input: object): FlowExecuteBody {
        this['input'] = input;
        return this;
    }
}