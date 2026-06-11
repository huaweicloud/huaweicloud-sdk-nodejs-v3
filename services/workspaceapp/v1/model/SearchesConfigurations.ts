

export class SearchesConfigurations {
    private 'searches_status'?: number;
    private 'searches_redirection_type'?: number;
    private 'searches_storage_path'?: string;
    private 'searches_relative_path'?: string;
    private 'searches_exclusive_rights'?: number;
    private 'searches_move_contents'?: number;
    private 'searches_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withSearchesStatus(searchesStatus: number): SearchesConfigurations {
        this['searches_status'] = searchesStatus;
        return this;
    }
    public set searchesStatus(searchesStatus: number  | undefined) {
        this['searches_status'] = searchesStatus;
    }
    public get searchesStatus(): number | undefined {
        return this['searches_status'];
    }
    public withSearchesRedirectionType(searchesRedirectionType: number): SearchesConfigurations {
        this['searches_redirection_type'] = searchesRedirectionType;
        return this;
    }
    public set searchesRedirectionType(searchesRedirectionType: number  | undefined) {
        this['searches_redirection_type'] = searchesRedirectionType;
    }
    public get searchesRedirectionType(): number | undefined {
        return this['searches_redirection_type'];
    }
    public withSearchesStoragePath(searchesStoragePath: string): SearchesConfigurations {
        this['searches_storage_path'] = searchesStoragePath;
        return this;
    }
    public set searchesStoragePath(searchesStoragePath: string  | undefined) {
        this['searches_storage_path'] = searchesStoragePath;
    }
    public get searchesStoragePath(): string | undefined {
        return this['searches_storage_path'];
    }
    public withSearchesRelativePath(searchesRelativePath: string): SearchesConfigurations {
        this['searches_relative_path'] = searchesRelativePath;
        return this;
    }
    public set searchesRelativePath(searchesRelativePath: string  | undefined) {
        this['searches_relative_path'] = searchesRelativePath;
    }
    public get searchesRelativePath(): string | undefined {
        return this['searches_relative_path'];
    }
    public withSearchesExclusiveRights(searchesExclusiveRights: number): SearchesConfigurations {
        this['searches_exclusive_rights'] = searchesExclusiveRights;
        return this;
    }
    public set searchesExclusiveRights(searchesExclusiveRights: number  | undefined) {
        this['searches_exclusive_rights'] = searchesExclusiveRights;
    }
    public get searchesExclusiveRights(): number | undefined {
        return this['searches_exclusive_rights'];
    }
    public withSearchesMoveContents(searchesMoveContents: number): SearchesConfigurations {
        this['searches_move_contents'] = searchesMoveContents;
        return this;
    }
    public set searchesMoveContents(searchesMoveContents: number  | undefined) {
        this['searches_move_contents'] = searchesMoveContents;
    }
    public get searchesMoveContents(): number | undefined {
        return this['searches_move_contents'];
    }
    public withSearchesMoveContentOnPolicyRemoval(searchesMoveContentOnPolicyRemoval: number): SearchesConfigurations {
        this['searches_move_content_on_policy_removal'] = searchesMoveContentOnPolicyRemoval;
        return this;
    }
    public set searchesMoveContentOnPolicyRemoval(searchesMoveContentOnPolicyRemoval: number  | undefined) {
        this['searches_move_content_on_policy_removal'] = searchesMoveContentOnPolicyRemoval;
    }
    public get searchesMoveContentOnPolicyRemoval(): number | undefined {
        return this['searches_move_content_on_policy_removal'];
    }
}