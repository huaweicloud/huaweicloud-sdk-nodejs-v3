

export class VulUrgentResponseInfoDisabledOperateTypes {
    private 'operate_type'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withOperateType(operateType: string): VulUrgentResponseInfoDisabledOperateTypes {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withReason(reason: string): VulUrgentResponseInfoDisabledOperateTypes {
        this['reason'] = reason;
        return this;
    }
}