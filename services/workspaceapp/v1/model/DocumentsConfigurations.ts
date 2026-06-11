

export class DocumentsConfigurations {
    private 'documents_status'?: number;
    private 'documents_redirection_type'?: number;
    private 'documents_storage_path'?: string;
    private 'documents_relative_path'?: string;
    private 'documents_exclusive_rights'?: number;
    private 'documents_move_contents'?: number;
    private 'documents_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withDocumentsStatus(documentsStatus: number): DocumentsConfigurations {
        this['documents_status'] = documentsStatus;
        return this;
    }
    public set documentsStatus(documentsStatus: number  | undefined) {
        this['documents_status'] = documentsStatus;
    }
    public get documentsStatus(): number | undefined {
        return this['documents_status'];
    }
    public withDocumentsRedirectionType(documentsRedirectionType: number): DocumentsConfigurations {
        this['documents_redirection_type'] = documentsRedirectionType;
        return this;
    }
    public set documentsRedirectionType(documentsRedirectionType: number  | undefined) {
        this['documents_redirection_type'] = documentsRedirectionType;
    }
    public get documentsRedirectionType(): number | undefined {
        return this['documents_redirection_type'];
    }
    public withDocumentsStoragePath(documentsStoragePath: string): DocumentsConfigurations {
        this['documents_storage_path'] = documentsStoragePath;
        return this;
    }
    public set documentsStoragePath(documentsStoragePath: string  | undefined) {
        this['documents_storage_path'] = documentsStoragePath;
    }
    public get documentsStoragePath(): string | undefined {
        return this['documents_storage_path'];
    }
    public withDocumentsRelativePath(documentsRelativePath: string): DocumentsConfigurations {
        this['documents_relative_path'] = documentsRelativePath;
        return this;
    }
    public set documentsRelativePath(documentsRelativePath: string  | undefined) {
        this['documents_relative_path'] = documentsRelativePath;
    }
    public get documentsRelativePath(): string | undefined {
        return this['documents_relative_path'];
    }
    public withDocumentsExclusiveRights(documentsExclusiveRights: number): DocumentsConfigurations {
        this['documents_exclusive_rights'] = documentsExclusiveRights;
        return this;
    }
    public set documentsExclusiveRights(documentsExclusiveRights: number  | undefined) {
        this['documents_exclusive_rights'] = documentsExclusiveRights;
    }
    public get documentsExclusiveRights(): number | undefined {
        return this['documents_exclusive_rights'];
    }
    public withDocumentsMoveContents(documentsMoveContents: number): DocumentsConfigurations {
        this['documents_move_contents'] = documentsMoveContents;
        return this;
    }
    public set documentsMoveContents(documentsMoveContents: number  | undefined) {
        this['documents_move_contents'] = documentsMoveContents;
    }
    public get documentsMoveContents(): number | undefined {
        return this['documents_move_contents'];
    }
    public withDocumentsMoveContentOnPolicyRemoval(documentsMoveContentOnPolicyRemoval: number): DocumentsConfigurations {
        this['documents_move_content_on_policy_removal'] = documentsMoveContentOnPolicyRemoval;
        return this;
    }
    public set documentsMoveContentOnPolicyRemoval(documentsMoveContentOnPolicyRemoval: number  | undefined) {
        this['documents_move_content_on_policy_removal'] = documentsMoveContentOnPolicyRemoval;
    }
    public get documentsMoveContentOnPolicyRemoval(): number | undefined {
        return this['documents_move_content_on_policy_removal'];
    }
}