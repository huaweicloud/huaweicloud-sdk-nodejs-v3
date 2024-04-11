

export class DbObjectFilteringResult {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'is_success'?: boolean;
    public message?: string;
    public source?: DbObjectFilteringResultSourceEnum | string;
    private 'target_result'?: string;
    private 'source_result'?: string;
    private 'target_message'?: string;
    private 'source_message'?: string;
    public constructor() { 
    }
    public withDbName(dbName: string): DbObjectFilteringResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DbObjectFilteringResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DbObjectFilteringResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withIsSuccess(isSuccess: boolean): DbObjectFilteringResult {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): DbObjectFilteringResult {
        this['message'] = message;
        return this;
    }
    public withSource(source: DbObjectFilteringResultSourceEnum | string): DbObjectFilteringResult {
        this['source'] = source;
        return this;
    }
    public withTargetResult(targetResult: string): DbObjectFilteringResult {
        this['target_result'] = targetResult;
        return this;
    }
    public set targetResult(targetResult: string  | undefined) {
        this['target_result'] = targetResult;
    }
    public get targetResult(): string | undefined {
        return this['target_result'];
    }
    public withSourceResult(sourceResult: string): DbObjectFilteringResult {
        this['source_result'] = sourceResult;
        return this;
    }
    public set sourceResult(sourceResult: string  | undefined) {
        this['source_result'] = sourceResult;
    }
    public get sourceResult(): string | undefined {
        return this['source_result'];
    }
    public withTargetMessage(targetMessage: string): DbObjectFilteringResult {
        this['target_message'] = targetMessage;
        return this;
    }
    public set targetMessage(targetMessage: string  | undefined) {
        this['target_message'] = targetMessage;
    }
    public get targetMessage(): string | undefined {
        return this['target_message'];
    }
    public withSourceMessage(sourceMessage: string): DbObjectFilteringResult {
        this['source_message'] = sourceMessage;
        return this;
    }
    public set sourceMessage(sourceMessage: string  | undefined) {
        this['source_message'] = sourceMessage;
    }
    public get sourceMessage(): string | undefined {
        return this['source_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DbObjectFilteringResultSourceEnum {
    JOB = 'job',
    COMPARE = 'compare'
}
