import { ListHandleAffectBaselineRequestBody } from './ListHandleAffectBaselineRequestBody';


export class ListHandleAffectBaselineRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public body?: ListHandleAffectBaselineRequestBody;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHandleAffectBaselineRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListHandleAffectBaselineRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHandleAffectBaselineRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ListHandleAffectBaselineRequestBody): ListHandleAffectBaselineRequest {
        this['body'] = body;
        return this;
    }
}