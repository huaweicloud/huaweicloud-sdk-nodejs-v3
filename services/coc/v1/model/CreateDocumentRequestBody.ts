import { CreateDocumentRequestBodyTags } from './CreateDocumentRequestBodyTags';


export class CreateDocumentRequestBody {
    public name?: string;
    public content?: string;
    private 'enterprise_project_id'?: string;
    private 'risk_level'?: CreateDocumentRequestBodyRiskLevelEnum | string;
    public description?: string;
    public tags?: Array<CreateDocumentRequestBodyTags>;
    public constructor(name?: string, content?: string, enterpriseProjectId?: string, riskLevel?: string) { 
        this['name'] = name;
        this['content'] = content;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['risk_level'] = riskLevel;
    }
    public withName(name: string): CreateDocumentRequestBody {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateDocumentRequestBody {
        this['content'] = content;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDocumentRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRiskLevel(riskLevel: CreateDocumentRequestBodyRiskLevelEnum | string): CreateDocumentRequestBody {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: CreateDocumentRequestBodyRiskLevelEnum | string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): CreateDocumentRequestBodyRiskLevelEnum | string | undefined {
        return this['risk_level'];
    }
    public withDescription(description: string): CreateDocumentRequestBody {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<CreateDocumentRequestBodyTags>): CreateDocumentRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDocumentRequestBodyRiskLevelEnum {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}
