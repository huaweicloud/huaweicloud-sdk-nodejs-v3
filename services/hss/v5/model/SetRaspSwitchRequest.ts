import { SetRaspSwitchRequestInfo } from './SetRaspSwitchRequestInfo';


export class SetRaspSwitchRequest {
    private 'Content-Type'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: SetRaspSwitchRequestInfo;
    public constructor() { 
    }
    public withContentType(contentType: string): SetRaspSwitchRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegion(region: string): SetRaspSwitchRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SetRaspSwitchRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SetRaspSwitchRequestInfo): SetRaspSwitchRequest {
        this['body'] = body;
        return this;
    }
}