

export class LinksConfigurations {
    private 'links_status'?: number;
    private 'links_redirection_type'?: number;
    private 'links_storage_path'?: string;
    private 'links_relative_path'?: string;
    private 'links_exclusive_rights'?: number;
    private 'links_move_contents'?: number;
    private 'links_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withLinksStatus(linksStatus: number): LinksConfigurations {
        this['links_status'] = linksStatus;
        return this;
    }
    public set linksStatus(linksStatus: number  | undefined) {
        this['links_status'] = linksStatus;
    }
    public get linksStatus(): number | undefined {
        return this['links_status'];
    }
    public withLinksRedirectionType(linksRedirectionType: number): LinksConfigurations {
        this['links_redirection_type'] = linksRedirectionType;
        return this;
    }
    public set linksRedirectionType(linksRedirectionType: number  | undefined) {
        this['links_redirection_type'] = linksRedirectionType;
    }
    public get linksRedirectionType(): number | undefined {
        return this['links_redirection_type'];
    }
    public withLinksStoragePath(linksStoragePath: string): LinksConfigurations {
        this['links_storage_path'] = linksStoragePath;
        return this;
    }
    public set linksStoragePath(linksStoragePath: string  | undefined) {
        this['links_storage_path'] = linksStoragePath;
    }
    public get linksStoragePath(): string | undefined {
        return this['links_storage_path'];
    }
    public withLinksRelativePath(linksRelativePath: string): LinksConfigurations {
        this['links_relative_path'] = linksRelativePath;
        return this;
    }
    public set linksRelativePath(linksRelativePath: string  | undefined) {
        this['links_relative_path'] = linksRelativePath;
    }
    public get linksRelativePath(): string | undefined {
        return this['links_relative_path'];
    }
    public withLinksExclusiveRights(linksExclusiveRights: number): LinksConfigurations {
        this['links_exclusive_rights'] = linksExclusiveRights;
        return this;
    }
    public set linksExclusiveRights(linksExclusiveRights: number  | undefined) {
        this['links_exclusive_rights'] = linksExclusiveRights;
    }
    public get linksExclusiveRights(): number | undefined {
        return this['links_exclusive_rights'];
    }
    public withLinksMoveContents(linksMoveContents: number): LinksConfigurations {
        this['links_move_contents'] = linksMoveContents;
        return this;
    }
    public set linksMoveContents(linksMoveContents: number  | undefined) {
        this['links_move_contents'] = linksMoveContents;
    }
    public get linksMoveContents(): number | undefined {
        return this['links_move_contents'];
    }
    public withLinksMoveContentOnPolicyRemoval(linksMoveContentOnPolicyRemoval: number): LinksConfigurations {
        this['links_move_content_on_policy_removal'] = linksMoveContentOnPolicyRemoval;
        return this;
    }
    public set linksMoveContentOnPolicyRemoval(linksMoveContentOnPolicyRemoval: number  | undefined) {
        this['links_move_content_on_policy_removal'] = linksMoveContentOnPolicyRemoval;
    }
    public get linksMoveContentOnPolicyRemoval(): number | undefined {
        return this['links_move_content_on_policy_removal'];
    }
}