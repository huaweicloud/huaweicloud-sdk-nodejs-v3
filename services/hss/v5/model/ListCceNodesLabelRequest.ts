import { BatchGetLabelRequestBody } from './BatchGetLabelRequestBody';


export class ListCceNodesLabelRequest {
    public offset?: number;
    public limit?: number;
    private 'enterprise_project_id'?: string;
    public type?: string;
    public body?: BatchGetLabelRequestBody;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withOffset(offset: number): ListCceNodesLabelRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCceNodesLabelRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCceNodesLabelRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListCceNodesLabelRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: BatchGetLabelRequestBody): ListCceNodesLabelRequest {
        this['body'] = body;
        return this;
    }
}