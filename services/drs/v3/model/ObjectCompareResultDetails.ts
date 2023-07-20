

export class ObjectCompareResultDetails {
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    private 'source_db_value'?: string;
    private 'target_db_value'?: string;
    private 'error_message'?: string;
    public constructor(sourceDbName?: string, targetDbName?: string) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
    }
    public withSourceDbName(sourceDbName: string): ObjectCompareResultDetails {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ObjectCompareResultDetails {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withSourceDbValue(sourceDbValue: string): ObjectCompareResultDetails {
        this['source_db_value'] = sourceDbValue;
        return this;
    }
    public set sourceDbValue(sourceDbValue: string  | undefined) {
        this['source_db_value'] = sourceDbValue;
    }
    public get sourceDbValue(): string | undefined {
        return this['source_db_value'];
    }
    public withTargetDbValue(targetDbValue: string): ObjectCompareResultDetails {
        this['target_db_value'] = targetDbValue;
        return this;
    }
    public set targetDbValue(targetDbValue: string  | undefined) {
        this['target_db_value'] = targetDbValue;
    }
    public get targetDbValue(): string | undefined {
        return this['target_db_value'];
    }
    public withErrorMessage(errorMessage: string): ObjectCompareResultDetails {
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