import { MigrateCompositeHostsRequestBody } from './MigrateCompositeHostsRequestBody';


export class MigrateCompositeHostsRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'target_enterprise_project_id'?: string;
    public body?: MigrateCompositeHostsRequestBody;
    public constructor(contentType?: string, enterpriseProjectId?: string, targetEnterpriseProjectId?: string) { 
        this['Content-Type'] = contentType;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['target_enterprise_project_id'] = targetEnterpriseProjectId;
    }
    public withContentType(contentType: string): MigrateCompositeHostsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): MigrateCompositeHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTargetEnterpriseProjectId(targetEnterpriseProjectId: string): MigrateCompositeHostsRequest {
        this['target_enterprise_project_id'] = targetEnterpriseProjectId;
        return this;
    }
    public set targetEnterpriseProjectId(targetEnterpriseProjectId: string  | undefined) {
        this['target_enterprise_project_id'] = targetEnterpriseProjectId;
    }
    public get targetEnterpriseProjectId(): string | undefined {
        return this['target_enterprise_project_id'];
    }
    public withBody(body: MigrateCompositeHostsRequestBody): MigrateCompositeHostsRequest {
        this['body'] = body;
        return this;
    }
}