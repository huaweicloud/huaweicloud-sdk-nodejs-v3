

export class DeleteColumnInfoReq {
    private 'table_ids'?: Array<string>;
    private 'schema_ids'?: Array<string>;
    private 'db_ids'?: Array<string>;
    public constructor(tableIds?: Array<string>, schemaIds?: Array<string>, dbIds?: Array<string>) { 
        this['table_ids'] = tableIds;
        this['schema_ids'] = schemaIds;
        this['db_ids'] = dbIds;
    }
    public withTableIds(tableIds: Array<string>): DeleteColumnInfoReq {
        this['table_ids'] = tableIds;
        return this;
    }
    public set tableIds(tableIds: Array<string>  | undefined) {
        this['table_ids'] = tableIds;
    }
    public get tableIds(): Array<string> | undefined {
        return this['table_ids'];
    }
    public withSchemaIds(schemaIds: Array<string>): DeleteColumnInfoReq {
        this['schema_ids'] = schemaIds;
        return this;
    }
    public set schemaIds(schemaIds: Array<string>  | undefined) {
        this['schema_ids'] = schemaIds;
    }
    public get schemaIds(): Array<string> | undefined {
        return this['schema_ids'];
    }
    public withDbIds(dbIds: Array<string>): DeleteColumnInfoReq {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: Array<string>  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): Array<string> | undefined {
        return this['db_ids'];
    }
}