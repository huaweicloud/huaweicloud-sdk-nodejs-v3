

export class DownloadsConfigurations {
    private 'downloads_status'?: number;
    private 'downloads_redirection_type'?: number;
    private 'downloads_storage_path'?: string;
    private 'downloads_relative_path'?: string;
    private 'downloads_exclusive_rights'?: number;
    private 'downloads_move_contents'?: number;
    private 'downloads_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withDownloadsStatus(downloadsStatus: number): DownloadsConfigurations {
        this['downloads_status'] = downloadsStatus;
        return this;
    }
    public set downloadsStatus(downloadsStatus: number  | undefined) {
        this['downloads_status'] = downloadsStatus;
    }
    public get downloadsStatus(): number | undefined {
        return this['downloads_status'];
    }
    public withDownloadsRedirectionType(downloadsRedirectionType: number): DownloadsConfigurations {
        this['downloads_redirection_type'] = downloadsRedirectionType;
        return this;
    }
    public set downloadsRedirectionType(downloadsRedirectionType: number  | undefined) {
        this['downloads_redirection_type'] = downloadsRedirectionType;
    }
    public get downloadsRedirectionType(): number | undefined {
        return this['downloads_redirection_type'];
    }
    public withDownloadsStoragePath(downloadsStoragePath: string): DownloadsConfigurations {
        this['downloads_storage_path'] = downloadsStoragePath;
        return this;
    }
    public set downloadsStoragePath(downloadsStoragePath: string  | undefined) {
        this['downloads_storage_path'] = downloadsStoragePath;
    }
    public get downloadsStoragePath(): string | undefined {
        return this['downloads_storage_path'];
    }
    public withDownloadsRelativePath(downloadsRelativePath: string): DownloadsConfigurations {
        this['downloads_relative_path'] = downloadsRelativePath;
        return this;
    }
    public set downloadsRelativePath(downloadsRelativePath: string  | undefined) {
        this['downloads_relative_path'] = downloadsRelativePath;
    }
    public get downloadsRelativePath(): string | undefined {
        return this['downloads_relative_path'];
    }
    public withDownloadsExclusiveRights(downloadsExclusiveRights: number): DownloadsConfigurations {
        this['downloads_exclusive_rights'] = downloadsExclusiveRights;
        return this;
    }
    public set downloadsExclusiveRights(downloadsExclusiveRights: number  | undefined) {
        this['downloads_exclusive_rights'] = downloadsExclusiveRights;
    }
    public get downloadsExclusiveRights(): number | undefined {
        return this['downloads_exclusive_rights'];
    }
    public withDownloadsMoveContents(downloadsMoveContents: number): DownloadsConfigurations {
        this['downloads_move_contents'] = downloadsMoveContents;
        return this;
    }
    public set downloadsMoveContents(downloadsMoveContents: number  | undefined) {
        this['downloads_move_contents'] = downloadsMoveContents;
    }
    public get downloadsMoveContents(): number | undefined {
        return this['downloads_move_contents'];
    }
    public withDownloadsMoveContentOnPolicyRemoval(downloadsMoveContentOnPolicyRemoval: number): DownloadsConfigurations {
        this['downloads_move_content_on_policy_removal'] = downloadsMoveContentOnPolicyRemoval;
        return this;
    }
    public set downloadsMoveContentOnPolicyRemoval(downloadsMoveContentOnPolicyRemoval: number  | undefined) {
        this['downloads_move_content_on_policy_removal'] = downloadsMoveContentOnPolicyRemoval;
    }
    public get downloadsMoveContentOnPolicyRemoval(): number | undefined {
        return this['downloads_move_content_on_policy_removal'];
    }
}