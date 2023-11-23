

export class CallbackWorkflowRequestBody {
    public result?: CallbackWorkflowRequestBodyResultEnum | string;
    public error?: string;
    public output?: object;
    public constructor(result?: string, output?: object) { 
        this['result'] = result;
        this['output'] = output;
    }
    public withResult(result: CallbackWorkflowRequestBodyResultEnum | string): CallbackWorkflowRequestBody {
        this['result'] = result;
        return this;
    }
    public withError(error: string): CallbackWorkflowRequestBody {
        this['error'] = error;
        return this;
    }
    public withOutput(output: object): CallbackWorkflowRequestBody {
        this['output'] = output;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CallbackWorkflowRequestBodyResultEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
