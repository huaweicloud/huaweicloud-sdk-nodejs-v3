

export class ObjectsCompareDetailInfo {
    private 'source_db_value'?: string | undefined;
    private 'target_db_value'?: string | undefined;
    private 'source_db_name'?: string | undefined;
    private 'target_db_name'?: string | undefined;
    private 'error_message'?: string | undefined;
    public constructor() { 
    }
    public withSourceDbValue(sourceDbValue: string): ObjectsCompareDetailInfo {
        this['source_db_value'] = sourceDbValue;
        return this;
    }
    public set sourceDbValue(sourceDbValue: string | undefined) {
        this['source_db_value'] = sourceDbValue;
    }
    public get sourceDbValue() {
        return this['source_db_value'];
    }
    public withTargetDbValue(targetDbValue: string): ObjectsCompareDetailInfo {
        this['target_db_value'] = targetDbValue;
        return this;
    }
    public set targetDbValue(targetDbValue: string | undefined) {
        this['target_db_value'] = targetDbValue;
    }
    public get targetDbValue() {
        return this['target_db_value'];
    }
    public withSourceDbName(sourceDbName: string): ObjectsCompareDetailInfo {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ObjectsCompareDetailInfo {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withErrorMessage(errorMessage: string): ObjectsCompareDetailInfo {
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