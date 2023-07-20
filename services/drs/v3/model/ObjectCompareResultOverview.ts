

export class ObjectCompareResultOverview {
    private 'object_type'?: ObjectCompareResultOverviewObjectTypeEnum | string;
    private 'object_compare_result'?: ObjectCompareResultOverviewObjectCompareResultEnum | string;
    private 'target_count'?: number;
    private 'source_count'?: number;
    private 'diff_count'?: number;
    public constructor(objectType?: string, objectCompareResult?: string, targetCount?: number, sourceCount?: number, diffCount?: number) { 
        this['object_type'] = objectType;
        this['object_compare_result'] = objectCompareResult;
        this['target_count'] = targetCount;
        this['source_count'] = sourceCount;
        this['diff_count'] = diffCount;
    }
    public withObjectType(objectType: ObjectCompareResultOverviewObjectTypeEnum | string): ObjectCompareResultOverview {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ObjectCompareResultOverviewObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ObjectCompareResultOverviewObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectCompareResult(objectCompareResult: ObjectCompareResultOverviewObjectCompareResultEnum | string): ObjectCompareResultOverview {
        this['object_compare_result'] = objectCompareResult;
        return this;
    }
    public set objectCompareResult(objectCompareResult: ObjectCompareResultOverviewObjectCompareResultEnum | string  | undefined) {
        this['object_compare_result'] = objectCompareResult;
    }
    public get objectCompareResult(): ObjectCompareResultOverviewObjectCompareResultEnum | string | undefined {
        return this['object_compare_result'];
    }
    public withTargetCount(targetCount: number): ObjectCompareResultOverview {
        this['target_count'] = targetCount;
        return this;
    }
    public set targetCount(targetCount: number  | undefined) {
        this['target_count'] = targetCount;
    }
    public get targetCount(): number | undefined {
        return this['target_count'];
    }
    public withSourceCount(sourceCount: number): ObjectCompareResultOverview {
        this['source_count'] = sourceCount;
        return this;
    }
    public set sourceCount(sourceCount: number  | undefined) {
        this['source_count'] = sourceCount;
    }
    public get sourceCount(): number | undefined {
        return this['source_count'];
    }
    public withDiffCount(diffCount: number): ObjectCompareResultOverview {
        this['diff_count'] = diffCount;
        return this;
    }
    public set diffCount(diffCount: number  | undefined) {
        this['diff_count'] = diffCount;
    }
    public get diffCount(): number | undefined {
        return this['diff_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObjectCompareResultOverviewObjectTypeEnum {
    DB = 'DB',
    TABLE = 'TABLE',
    VIEW = 'VIEW',
    EVENT = 'EVENT',
    ROUTINE = 'ROUTINE',
    INDEX = 'INDEX',
    TRIGGER = 'TRIGGER',
    SYNONYM = 'SYNONYM',
    FUNCTION = 'FUNCTION',
    PROCEDURE = 'PROCEDURE',
    TYPE = 'TYPE',
    RULE = 'RULE',
    DEFAULT_TYPE = 'DEFAULT_TYPE',
    PLAN_GUIDE = 'PLAN_GUIDE',
    CONSTRAINT = 'CONSTRAINT',
    FILE_GROUP = 'FILE_GROUP',
    PARTITION_FUNCTION = 'PARTITION_FUNCTION',
    PARTITION_SCHEME = 'PARTITION_SCHEME',
    TABLE_COLLATION = 'TABLE_COLLATION'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectCompareResultOverviewObjectCompareResultEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIT = 'TARGET_DB_NOT_EXIT',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
