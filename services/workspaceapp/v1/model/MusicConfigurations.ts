

export class MusicConfigurations {
    private 'music_status'?: number;
    private 'music_redirection_type'?: number;
    private 'music_storage_path'?: string;
    private 'music_relative_path'?: string;
    private 'music_exclusive_rights'?: number;
    private 'music_move_contents'?: number;
    private 'music_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withMusicStatus(musicStatus: number): MusicConfigurations {
        this['music_status'] = musicStatus;
        return this;
    }
    public set musicStatus(musicStatus: number  | undefined) {
        this['music_status'] = musicStatus;
    }
    public get musicStatus(): number | undefined {
        return this['music_status'];
    }
    public withMusicRedirectionType(musicRedirectionType: number): MusicConfigurations {
        this['music_redirection_type'] = musicRedirectionType;
        return this;
    }
    public set musicRedirectionType(musicRedirectionType: number  | undefined) {
        this['music_redirection_type'] = musicRedirectionType;
    }
    public get musicRedirectionType(): number | undefined {
        return this['music_redirection_type'];
    }
    public withMusicStoragePath(musicStoragePath: string): MusicConfigurations {
        this['music_storage_path'] = musicStoragePath;
        return this;
    }
    public set musicStoragePath(musicStoragePath: string  | undefined) {
        this['music_storage_path'] = musicStoragePath;
    }
    public get musicStoragePath(): string | undefined {
        return this['music_storage_path'];
    }
    public withMusicRelativePath(musicRelativePath: string): MusicConfigurations {
        this['music_relative_path'] = musicRelativePath;
        return this;
    }
    public set musicRelativePath(musicRelativePath: string  | undefined) {
        this['music_relative_path'] = musicRelativePath;
    }
    public get musicRelativePath(): string | undefined {
        return this['music_relative_path'];
    }
    public withMusicExclusiveRights(musicExclusiveRights: number): MusicConfigurations {
        this['music_exclusive_rights'] = musicExclusiveRights;
        return this;
    }
    public set musicExclusiveRights(musicExclusiveRights: number  | undefined) {
        this['music_exclusive_rights'] = musicExclusiveRights;
    }
    public get musicExclusiveRights(): number | undefined {
        return this['music_exclusive_rights'];
    }
    public withMusicMoveContents(musicMoveContents: number): MusicConfigurations {
        this['music_move_contents'] = musicMoveContents;
        return this;
    }
    public set musicMoveContents(musicMoveContents: number  | undefined) {
        this['music_move_contents'] = musicMoveContents;
    }
    public get musicMoveContents(): number | undefined {
        return this['music_move_contents'];
    }
    public withMusicMoveContentOnPolicyRemoval(musicMoveContentOnPolicyRemoval: number): MusicConfigurations {
        this['music_move_content_on_policy_removal'] = musicMoveContentOnPolicyRemoval;
        return this;
    }
    public set musicMoveContentOnPolicyRemoval(musicMoveContentOnPolicyRemoval: number  | undefined) {
        this['music_move_content_on_policy_removal'] = musicMoveContentOnPolicyRemoval;
    }
    public get musicMoveContentOnPolicyRemoval(): number | undefined {
        return this['music_move_content_on_policy_removal'];
    }
}