import { Tag } from './Tag';


export class CreateDatabaseRequestBody {
    private 'database_name'?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): CreateDatabaseRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDescription(description: string): CreateDatabaseRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDatabaseRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateDatabaseRequestBody {
        this['tags'] = tags;
        return this;
    }
}