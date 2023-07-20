import { MigrateResource } from './MigrateResource';


export class MigrateResourceRequest {
    private 'enterprise_project_id'?: string;
    public body?: MigrateResource;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MigrateResourceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: MigrateResource): MigrateResourceRequest {
        this['body'] = body;
        return this;
    }
}