

export class ObjectCompareResultDetails {
    private 'source_db_name': string | undefined;
    private 'target_db_name': string | undefined;
    private 'source_db_value'?: string | undefined;
    private 'target_db_value'?: string | undefined;
    private 'error_message'?: string | undefined;
    public constructor(sourceDbName?: any, targetDbName?: any) { 
        this['source_db_name'] = sourceDbName;
        this['target_db_name'] = targetDbName;
    }
    public withSourceDbName(sourceDbName: string): ObjectCompareResultDetails {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ObjectCompareResultDetails {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withSourceDbValue(sourceDbValue: string): ObjectCompareResultDetails {
        this['source_db_value'] = sourceDbValue;
        return this;
    }
    public set sourceDbValue(sourceDbValue: string | undefined) {
        this['source_db_value'] = sourceDbValue;
    }
    public get sourceDbValue() {
        return this['source_db_value'];
    }
    public withTargetDbValue(targetDbValue: string): ObjectCompareResultDetails {
        this['target_db_value'] = targetDbValue;
        return this;
    }
    public set targetDbValue(targetDbValue: string | undefined) {
        this['target_db_value'] = targetDbValue;
    }
    public get targetDbValue() {
        return this['target_db_value'];
    }
    public withErrorMessage(errorMessage: string): ObjectCompareResultDetails {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}