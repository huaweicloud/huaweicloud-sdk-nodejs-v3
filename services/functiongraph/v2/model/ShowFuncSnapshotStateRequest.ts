

export class ShowFuncSnapshotStateRequest {
    private 'function_urn'?: string;
    public action?: ShowFuncSnapshotStateRequestActionEnum | string;
    public constructor(functionUrn?: string, action?: string) { 
        this['function_urn'] = functionUrn;
        this['action'] = action;
    }
    public withFunctionUrn(functionUrn: string): ShowFuncSnapshotStateRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withAction(action: ShowFuncSnapshotStateRequestActionEnum | string): ShowFuncSnapshotStateRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFuncSnapshotStateRequestActionEnum {
    STATE = 'state',
    ENABLESNAPSHOT = 'enableSnapshot'
}
