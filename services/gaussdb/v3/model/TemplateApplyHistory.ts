

export class TemplateApplyHistory {
    private 'target_id'?: string;
    private 'target_name'?: string;
    private 'apply_result'?: string;
    private 'applied_at'?: number;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withTargetId(targetId: string): TemplateApplyHistory {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetName(targetName: string): TemplateApplyHistory {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withApplyResult(applyResult: string): TemplateApplyHistory {
        this['apply_result'] = applyResult;
        return this;
    }
    public set applyResult(applyResult: string  | undefined) {
        this['apply_result'] = applyResult;
    }
    public get applyResult(): string | undefined {
        return this['apply_result'];
    }
    public withAppliedAt(appliedAt: number): TemplateApplyHistory {
        this['applied_at'] = appliedAt;
        return this;
    }
    public set appliedAt(appliedAt: number  | undefined) {
        this['applied_at'] = appliedAt;
    }
    public get appliedAt(): number | undefined {
        return this['applied_at'];
    }
    public withErrorCode(errorCode: string): TemplateApplyHistory {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}