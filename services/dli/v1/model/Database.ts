

export class Database {
    private 'database_name'?: string;
    public owner?: string;
    private 'table_number'?: number;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'resource_id'?: string;
    public constructor(enterpriseProjectId?: string, resourceId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['resource_id'] = resourceId;
    }
    public withDatabaseName(databaseName: string): Database {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withOwner(owner: string): Database {
        this['owner'] = owner;
        return this;
    }
    public withTableNumber(tableNumber: number): Database {
        this['table_number'] = tableNumber;
        return this;
    }
    public set tableNumber(tableNumber: number  | undefined) {
        this['table_number'] = tableNumber;
    }
    public get tableNumber(): number | undefined {
        return this['table_number'];
    }
    public withDescription(description: string): Database {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Database {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceId(resourceId: string): Database {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}