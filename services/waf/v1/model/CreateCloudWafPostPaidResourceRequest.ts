import { CreateCloudWafPostPaidResourceRequestbody } from './CreateCloudWafPostPaidResourceRequestbody';


export class CreateCloudWafPostPaidResourceRequest {
    private 'Content-Type'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: CreateCloudWafPostPaidResourceRequestbody;
    public constructor(contentType?: string, region?: string) { 
        this['Content-Type'] = contentType;
        this['region'] = region;
    }
    public withContentType(contentType: string): CreateCloudWafPostPaidResourceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegion(region: string): CreateCloudWafPostPaidResourceRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCloudWafPostPaidResourceRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateCloudWafPostPaidResourceRequestbody): CreateCloudWafPostPaidResourceRequest {
        this['body'] = body;
        return this;
    }
}