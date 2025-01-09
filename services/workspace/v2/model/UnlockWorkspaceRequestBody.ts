

export class UnlockWorkspaceRequestBody {
    private 'operate_type'?: string;
    public constructor() { 
    }
    public withOperateType(operateType: string): UnlockWorkspaceRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
}