

export class ObjectsCompareOverviewInfo {
    public type?: ObjectsCompareOverviewInfoTypeEnum | string;
    private 'source_count'?: number;
    private 'target_count'?: number;
    public status?: ObjectsCompareOverviewInfoStatusEnum | string;
    public constructor() { 
    }
    public withType(type: ObjectsCompareOverviewInfoTypeEnum | string): ObjectsCompareOverviewInfo {
        this['type'] = type;
        return this;
    }
    public withSourceCount(sourceCount: number): ObjectsCompareOverviewInfo {
        this['source_count'] = sourceCount;
        return this;
    }
    public set sourceCount(sourceCount: number  | undefined) {
        this['source_count'] = sourceCount;
    }
    public get sourceCount(): number | undefined {
        return this['source_count'];
    }
    public withTargetCount(targetCount: number): ObjectsCompareOverviewInfo {
        this['target_count'] = targetCount;
        return this;
    }
    public set targetCount(targetCount: number  | undefined) {
        this['target_count'] = targetCount;
    }
    public get targetCount(): number | undefined {
        return this['target_count'];
    }
    public withStatus(status: ObjectsCompareOverviewInfoStatusEnum | string): ObjectsCompareOverviewInfo {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObjectsCompareOverviewInfoTypeEnum {
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
    TABLE_COLLATION = 'TABLE_COLLATION',
    EXTENSIONS = 'EXTENSIONS'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectsCompareOverviewInfoStatusEnum {
    CONSISTENT = 'CONSISTENT',
    INCONSISTENT = 'INCONSISTENT',
    COMPARING = 'COMPARING',
    WAITING_FOR_COMPARISON = 'WAITING_FOR_COMPARISON',
    FAILED_TO_COMPARE = 'FAILED_TO_COMPARE',
    TARGET_DB_NOT_EXIST = 'TARGET_DB_NOT_EXIST',
    CAN_NOT_COMPARE = 'CAN_NOT_COMPARE'
}
