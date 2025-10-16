import { BatchCreateGeoIpRuleRequestBody } from './BatchCreateGeoIpRuleRequestBody';


export class BatchCreateGeoIpRuleRequest {
    public projectid?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchCreateGeoIpRuleRequestBody;
    public constructor(projectid?: string) { 
        this['projectid'] = projectid;
    }
    public withProjectid(projectid: string): BatchCreateGeoIpRuleRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateGeoIpRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): BatchCreateGeoIpRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchCreateGeoIpRuleRequestBody): BatchCreateGeoIpRuleRequest {
        this['body'] = body;
        return this;
    }
}