

export class RevokePostgresqlDbPrivilegeUser {
    public name?: string;
    private 'schema_name'?: string;
    public constructor(name?: string, schemaName?: string) { 
        this['name'] = name;
        this['schema_name'] = schemaName;
    }
    public withName(name: string): RevokePostgresqlDbPrivilegeUser {
        this['name'] = name;
        return this;
    }
    public withSchemaName(schemaName: string): RevokePostgresqlDbPrivilegeUser {
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