

export class UpdateFuncSnapshotRequest {
    public action: string;
    private 'function_urn': string | undefined;
    public constructor(action?: any, functionUrn?: any) { 
        this['action'] = action;
        this['function_urn'] = functionUrn;
    }
    public withAction(action: string): UpdateFuncSnapshotRequest {
        this['action'] = action;
        return this;
    }
    public withFunctionUrn(functionUrn: string): UpdateFuncSnapshotRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
}