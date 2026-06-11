

export class VideosConfigurations {
    private 'videos_status'?: number;
    private 'videos_redirection_type'?: number;
    private 'videos_storage_path'?: string;
    private 'videos_relative_path'?: string;
    private 'videos_exclusive_rights'?: number;
    private 'videos_move_contents'?: number;
    private 'videos_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withVideosStatus(videosStatus: number): VideosConfigurations {
        this['videos_status'] = videosStatus;
        return this;
    }
    public set videosStatus(videosStatus: number  | undefined) {
        this['videos_status'] = videosStatus;
    }
    public get videosStatus(): number | undefined {
        return this['videos_status'];
    }
    public withVideosRedirectionType(videosRedirectionType: number): VideosConfigurations {
        this['videos_redirection_type'] = videosRedirectionType;
        return this;
    }
    public set videosRedirectionType(videosRedirectionType: number  | undefined) {
        this['videos_redirection_type'] = videosRedirectionType;
    }
    public get videosRedirectionType(): number | undefined {
        return this['videos_redirection_type'];
    }
    public withVideosStoragePath(videosStoragePath: string): VideosConfigurations {
        this['videos_storage_path'] = videosStoragePath;
        return this;
    }
    public set videosStoragePath(videosStoragePath: string  | undefined) {
        this['videos_storage_path'] = videosStoragePath;
    }
    public get videosStoragePath(): string | undefined {
        return this['videos_storage_path'];
    }
    public withVideosRelativePath(videosRelativePath: string): VideosConfigurations {
        this['videos_relative_path'] = videosRelativePath;
        return this;
    }
    public set videosRelativePath(videosRelativePath: string  | undefined) {
        this['videos_relative_path'] = videosRelativePath;
    }
    public get videosRelativePath(): string | undefined {
        return this['videos_relative_path'];
    }
    public withVideosExclusiveRights(videosExclusiveRights: number): VideosConfigurations {
        this['videos_exclusive_rights'] = videosExclusiveRights;
        return this;
    }
    public set videosExclusiveRights(videosExclusiveRights: number  | undefined) {
        this['videos_exclusive_rights'] = videosExclusiveRights;
    }
    public get videosExclusiveRights(): number | undefined {
        return this['videos_exclusive_rights'];
    }
    public withVideosMoveContents(videosMoveContents: number): VideosConfigurations {
        this['videos_move_contents'] = videosMoveContents;
        return this;
    }
    public set videosMoveContents(videosMoveContents: number  | undefined) {
        this['videos_move_contents'] = videosMoveContents;
    }
    public get videosMoveContents(): number | undefined {
        return this['videos_move_contents'];
    }
    public withVideosMoveContentOnPolicyRemoval(videosMoveContentOnPolicyRemoval: number): VideosConfigurations {
        this['videos_move_content_on_policy_removal'] = videosMoveContentOnPolicyRemoval;
        return this;
    }
    public set videosMoveContentOnPolicyRemoval(videosMoveContentOnPolicyRemoval: number  | undefined) {
        this['videos_move_content_on_policy_removal'] = videosMoveContentOnPolicyRemoval;
    }
    public get videosMoveContentOnPolicyRemoval(): number | undefined {
        return this['videos_move_content_on_policy_removal'];
    }
}