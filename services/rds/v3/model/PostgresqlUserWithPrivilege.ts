

export class PostgresqlUserWithPrivilege {
    public name?: string;
    public readonly?: boolean;
    private 'schema_name'?: string;
    public constructor(name?: string, readonly?: boolean, schemaName?: string) { 
        this['name'] = name;
        this['readonly'] = readonly;
        this['schema_name'] = schemaName;
    }
    public withName(name: string): PostgresqlUserWithPrivilege {
        this['name'] = name;
        return this;
    }
    public withReadonly(readonly: boolean): PostgresqlUserWithPrivilege {
        this['readonly'] = readonly;
        return this;
    }
    public withSchemaName(schemaName: string): PostgresqlUserWithPrivilege {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
}