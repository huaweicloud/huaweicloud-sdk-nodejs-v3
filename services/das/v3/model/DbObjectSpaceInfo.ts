

export class DbObjectSpaceInfo {
    private 'object_type'?: DbObjectSpaceInfoObjectTypeEnum | string;
    private 'object_name'?: string;
    private 'object_id'?: string;
    private 'used_size'?: number;
    private 'data_size'?: number;
    private 'index_size'?: number;
    private 'free_size'?: number;
    private 'free_rate'?: number;
    private 'estimated_rows'?: number;
    private 'db_name'?: string;
    public constructor(objectType?: string, objectName?: string) { 
        this['object_type'] = objectType;
        this['object_name'] = objectName;
    }
    public withObjectType(objectType: DbObjectSpaceInfoObjectTypeEnum | string): DbObjectSpaceInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: DbObjectSpaceInfoObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): DbObjectSpaceInfoObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): DbObjectSpaceInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectId(objectId: string): DbObjectSpaceInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withUsedSize(usedSize: number): DbObjectSpaceInfo {
        this['used_size'] = usedSize;
        return this;
    }
    public set usedSize(usedSize: number  | undefined) {
        this['used_size'] = usedSize;
    }
    public get usedSize(): number | undefined {
        return this['used_size'];
    }
    public withDataSize(dataSize: number): DbObjectSpaceInfo {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
    public withIndexSize(indexSize: number): DbObjectSpaceInfo {
        this['index_size'] = indexSize;
        return this;
    }
    public set indexSize(indexSize: number  | undefined) {
        this['index_size'] = indexSize;
    }
    public get indexSize(): number | undefined {
        return this['index_size'];
    }
    public withFreeSize(freeSize: number): DbObjectSpaceInfo {
        this['free_size'] = freeSize;
        return this;
    }
    public set freeSize(freeSize: number  | undefined) {
        this['free_size'] = freeSize;
    }
    public get freeSize(): number | undefined {
        return this['free_size'];
    }
    public withFreeRate(freeRate: number): DbObjectSpaceInfo {
        this['free_rate'] = freeRate;
        return this;
    }
    public set freeRate(freeRate: number  | undefined) {
        this['free_rate'] = freeRate;
    }
    public get freeRate(): number | undefined {
        return this['free_rate'];
    }
    public withEstimatedRows(estimatedRows: number): DbObjectSpaceInfo {
        this['estimated_rows'] = estimatedRows;
        return this;
    }
    public set estimatedRows(estimatedRows: number  | undefined) {
        this['estimated_rows'] = estimatedRows;
    }
    public get estimatedRows(): number | undefined {
        return this['estimated_rows'];
    }
    public withDbName(dbName: string): DbObjectSpaceInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DbObjectSpaceInfoObjectTypeEnum {
    DATABASE = 'database',
    TABLE = 'table'
}
