

export class WorkloadSchemaReq {
    private 'schema_name'?: string;
    private 'perm_space'?: string;
    public constructor(schemaName?: string, permSpace?: string) { 
        this['schema_name'] = schemaName;
        this['perm_space'] = permSpace;
    }
    public withSchemaName(schemaName: string): WorkloadSchemaReq {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withPermSpace(permSpace: string): WorkloadSchemaReq {
        this['perm_space'] = permSpace;
        return this;
    }
    public set permSpace(permSpace: string  | undefined) {
        this['perm_space'] = permSpace;
    }
    public get permSpace(): string | undefined {
        return this['perm_space'];
    }
}