import { HandleImageVulnerabilityRequestBody } from './HandleImageVulnerabilityRequestBody';


export class ListImageHandleAffectVulnerabilitiesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'image_name'?: string;
    private 'vul_name'?: string;
    public body?: HandleImageVulnerabilityRequestBody;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListImageHandleAffectVulnerabilitiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListImageHandleAffectVulnerabilitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageHandleAffectVulnerabilitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withImageName(imageName: string): ListImageHandleAffectVulnerabilitiesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withVulName(vulName: string): ListImageHandleAffectVulnerabilitiesRequest {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withBody(body: HandleImageVulnerabilityRequestBody): ListImageHandleAffectVulnerabilitiesRequest {
        this['body'] = body;
        return this;
    }
}