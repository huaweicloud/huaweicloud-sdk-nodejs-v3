

export class DataTransformationObjectVO {
    public id?: string;
    private 'data_transformation_type'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor() { 
    }
    public withId(id: string): DataTransformationObjectVO {
        this['id'] = id;
        return this;
    }
    public withDataTransformationType(dataTransformationType: string): DataTransformationObjectVO {
        this['data_transformation_type'] = dataTransformationType;
        return this;
    }
    public set dataTransformationType(dataTransformationType: string  | undefined) {
        this['data_transformation_type'] = dataTransformationType;
    }
    public get dataTransformationType(): string | undefined {
        return this['data_transformation_type'];
    }
    public withDbName(dbName: string): DataTransformationObjectVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DataTransformationObjectVO {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DataTransformationObjectVO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}