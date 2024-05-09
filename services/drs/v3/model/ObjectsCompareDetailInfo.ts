

export class ObjectsCompareDetailInfo {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    private 'source_db_value'?: string;
    private 'target_db_value'?: string;
    public status?: number;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withSourceDbName(sourceDbName: string): ObjectsCompareDetailInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ObjectsCompareDetailInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withSourceDbValue(sourceDbValue: string): ObjectsCompareDetailInfo {
        this['source_db_value'] = sourceDbValue;
        return this;
    }
    public set sourceDbValue(sourceDbValue: string  | undefined) {
        this['source_db_value'] = sourceDbValue;
    }
    public get sourceDbValue(): string | undefined {
        return this['source_db_value'];
    }
    public withTargetDbValue(targetDbValue: string): ObjectsCompareDetailInfo {
        this['target_db_value'] = targetDbValue;
        return this;
    }
    public set targetDbValue(targetDbValue: string  | undefined) {
        this['target_db_value'] = targetDbValue;
    }
    public get targetDbValue(): string | undefined {
        return this['target_db_value'];
    }
    public withStatus(status: number): ObjectsCompareDetailInfo {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): ObjectsCompareDetailInfo {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}