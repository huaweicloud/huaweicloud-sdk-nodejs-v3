

export class ReplayErrorClassification {
    private 'target_name'?: string;
    private 'error_type'?: string;
    private 'error_cnt'?: string;
    private 'error_template_cnt'?: string;
    public constructor(errorType?: string) { 
        this['error_type'] = errorType;
    }
    public withTargetName(targetName: string): ReplayErrorClassification {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withErrorType(errorType: string): ReplayErrorClassification {
        this['error_type'] = errorType;
        return this;
    }
    public set errorType(errorType: string  | undefined) {
        this['error_type'] = errorType;
    }
    public get errorType(): string | undefined {
        return this['error_type'];
    }
    public withErrorCnt(errorCnt: string): ReplayErrorClassification {
        this['error_cnt'] = errorCnt;
        return this;
    }
    public set errorCnt(errorCnt: string  | undefined) {
        this['error_cnt'] = errorCnt;
    }
    public get errorCnt(): string | undefined {
        return this['error_cnt'];
    }
    public withErrorTemplateCnt(errorTemplateCnt: string): ReplayErrorClassification {
        this['error_template_cnt'] = errorTemplateCnt;
        return this;
    }
    public set errorTemplateCnt(errorTemplateCnt: string  | undefined) {
        this['error_template_cnt'] = errorTemplateCnt;
    }
    public get errorTemplateCnt(): string | undefined {
        return this['error_template_cnt'];
    }
}