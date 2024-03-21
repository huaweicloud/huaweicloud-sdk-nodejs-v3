import { ChangeHostsGroupRequestInfo } from './ChangeHostsGroupRequestInfo';


export class ChangeHostsGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: ChangeHostsGroupRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ChangeHostsGroupRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeHostsGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): ChangeHostsGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ChangeHostsGroupRequestInfo): ChangeHostsGroupRequest {
        this['body'] = body;
        return this;
    }
}