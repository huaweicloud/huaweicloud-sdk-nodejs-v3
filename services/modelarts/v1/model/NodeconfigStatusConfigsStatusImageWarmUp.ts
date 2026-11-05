

export class NodeconfigStatusConfigsStatusImageWarmUp {
    public state?: NodeconfigStatusConfigsStatusImageWarmUpStateEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withState(state: NodeconfigStatusConfigsStatusImageWarmUpStateEnum | string): NodeconfigStatusConfigsStatusImageWarmUp {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): NodeconfigStatusConfigsStatusImageWarmUp {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigStatusConfigsStatusImageWarmUpStateEnum {
    SUCCESS = 'Success',
    FAILED = 'Failed',
    PULLING = 'Pulling',
    PARTIALCOMPLETION = 'PartialCompletion',
    UNKNOWN = 'Unknown'
}
