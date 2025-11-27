

export class ChangeSensitiveInfoRequestInfo {
    private 'sensitive_info_id'?: string;
    private 'operate_type'?: string;
    public constructor(sensitiveInfoId?: string) { 
        this['sensitive_info_id'] = sensitiveInfoId;
    }
    public withSensitiveInfoId(sensitiveInfoId: string): ChangeSensitiveInfoRequestInfo {
        this['sensitive_info_id'] = sensitiveInfoId;
        return this;
    }
    public set sensitiveInfoId(sensitiveInfoId: string  | undefined) {
        this['sensitive_info_id'] = sensitiveInfoId;
    }
    public get sensitiveInfoId(): string | undefined {
        return this['sensitive_info_id'];
    }
    public withOperateType(operateType: string): ChangeSensitiveInfoRequestInfo {
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