

export class DeleteDbObjNewRequest {
    private 'connection_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'obj_name'?: string;
    private 'obj_id'?: string;
    private 'object_sub_type'?: string;
    private 'obj_type'?: string;
    public constructor(connectionId?: string, dbName?: string, objType?: string) { 
        this['connection_id'] = connectionId;
        this['db_name'] = dbName;
        this['obj_type'] = objType;
    }
    public withConnectionId(connectionId: string): DeleteDbObjNewRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDbName(dbName: string): DeleteDbObjNewRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DeleteDbObjNewRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DeleteDbObjNewRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withObjName(objName: string): DeleteDbObjNewRequest {
        this['obj_name'] = objName;
        return this;
    }
    public set objName(objName: string  | undefined) {
        this['obj_name'] = objName;
    }
    public get objName(): string | undefined {
        return this['obj_name'];
    }
    public withObjId(objId: string): DeleteDbObjNewRequest {
        this['obj_id'] = objId;
        return this;
    }
    public set objId(objId: string  | undefined) {
        this['obj_id'] = objId;
    }
    public get objId(): string | undefined {
        return this['obj_id'];
    }
    public withObjectSubType(objectSubType: string): DeleteDbObjNewRequest {
        this['object_sub_type'] = objectSubType;
        return this;
    }
    public set objectSubType(objectSubType: string  | undefined) {
        this['object_sub_type'] = objectSubType;
    }
    public get objectSubType(): string | undefined {
        return this['object_sub_type'];
    }
    public withObjType(objType: string): DeleteDbObjNewRequest {
        this['obj_type'] = objType;
        return this;
    }
    public set objType(objType: string  | undefined) {
        this['obj_type'] = objType;
    }
    public get objType(): string | undefined {
        return this['obj_type'];
    }
}