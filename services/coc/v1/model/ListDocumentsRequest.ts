

export class ListDocumentsRequest {
    public limit?: number;
    public offset?: string;
    private 'name_like'?: string;
    public creator?: string;
    private 'enterprise_project_id'?: string;
    private 'document_type'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListDocumentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDocumentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withNameLike(nameLike: string): ListDocumentsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withCreator(creator: string): ListDocumentsRequest {
        this['creator'] = creator;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDocumentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDocumentType(documentType: string): ListDocumentsRequest {
        this['document_type'] = documentType;
        return this;
    }
    public set documentType(documentType: string  | undefined) {
        this['document_type'] = documentType;
    }
    public get documentType(): string | undefined {
        return this['document_type'];
    }
}