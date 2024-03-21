

export class UpdateFuncSnapshotRequest {
    private 'function_urn'?: string;
    public action?: UpdateFuncSnapshotRequestActionEnum | string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, action?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['action'] = action;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): UpdateFuncSnapshotRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withAction(action: UpdateFuncSnapshotRequestActionEnum | string): UpdateFuncSnapshotRequest {
        this['action'] = action;
        return this;
    }
    public withContentType(contentType: string): UpdateFuncSnapshotRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateFuncSnapshotRequestActionEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
