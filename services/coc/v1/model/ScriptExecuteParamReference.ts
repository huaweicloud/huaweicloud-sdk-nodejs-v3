

export class ScriptExecuteParamReference {
    private 'refer_type'?: string;
    private 'param_id'?: ScriptExecuteParamReferenceParamIdEnum | string;
    private 'param_version'?: string;
    public constructor(referType?: string, paramId?: string) { 
        this['refer_type'] = referType;
        this['param_id'] = paramId;
    }
    public withReferType(referType: string): ScriptExecuteParamReference {
        this['refer_type'] = referType;
        return this;
    }
    public set referType(referType: string  | undefined) {
        this['refer_type'] = referType;
    }
    public get referType(): string | undefined {
        return this['refer_type'];
    }
    public withParamId(paramId: ScriptExecuteParamReferenceParamIdEnum | string): ScriptExecuteParamReference {
        this['param_id'] = paramId;
        return this;
    }
    public set paramId(paramId: ScriptExecuteParamReferenceParamIdEnum | string  | undefined) {
        this['param_id'] = paramId;
    }
    public get paramId(): ScriptExecuteParamReferenceParamIdEnum | string | undefined {
        return this['param_id'];
    }
    public withParamVersion(paramVersion: string): ScriptExecuteParamReference {
        this['param_version'] = paramVersion;
        return this;
    }
    public set paramVersion(paramVersion: string  | undefined) {
        this['param_version'] = paramVersion;
    }
    public get paramVersion(): string | undefined {
        return this['param_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptExecuteParamReferenceParamIdEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
