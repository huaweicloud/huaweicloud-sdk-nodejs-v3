

export class PicturesConfigurations {
    private 'pictures_status'?: number;
    private 'pictures_redirection_type'?: number;
    private 'pictures_storage_path'?: string;
    private 'pictures_relative_path'?: string;
    private 'pictures_exclusive_rights'?: number;
    private 'pictures_move_contents'?: number;
    private 'pictures_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withPicturesStatus(picturesStatus: number): PicturesConfigurations {
        this['pictures_status'] = picturesStatus;
        return this;
    }
    public set picturesStatus(picturesStatus: number  | undefined) {
        this['pictures_status'] = picturesStatus;
    }
    public get picturesStatus(): number | undefined {
        return this['pictures_status'];
    }
    public withPicturesRedirectionType(picturesRedirectionType: number): PicturesConfigurations {
        this['pictures_redirection_type'] = picturesRedirectionType;
        return this;
    }
    public set picturesRedirectionType(picturesRedirectionType: number  | undefined) {
        this['pictures_redirection_type'] = picturesRedirectionType;
    }
    public get picturesRedirectionType(): number | undefined {
        return this['pictures_redirection_type'];
    }
    public withPicturesStoragePath(picturesStoragePath: string): PicturesConfigurations {
        this['pictures_storage_path'] = picturesStoragePath;
        return this;
    }
    public set picturesStoragePath(picturesStoragePath: string  | undefined) {
        this['pictures_storage_path'] = picturesStoragePath;
    }
    public get picturesStoragePath(): string | undefined {
        return this['pictures_storage_path'];
    }
    public withPicturesRelativePath(picturesRelativePath: string): PicturesConfigurations {
        this['pictures_relative_path'] = picturesRelativePath;
        return this;
    }
    public set picturesRelativePath(picturesRelativePath: string  | undefined) {
        this['pictures_relative_path'] = picturesRelativePath;
    }
    public get picturesRelativePath(): string | undefined {
        return this['pictures_relative_path'];
    }
    public withPicturesExclusiveRights(picturesExclusiveRights: number): PicturesConfigurations {
        this['pictures_exclusive_rights'] = picturesExclusiveRights;
        return this;
    }
    public set picturesExclusiveRights(picturesExclusiveRights: number  | undefined) {
        this['pictures_exclusive_rights'] = picturesExclusiveRights;
    }
    public get picturesExclusiveRights(): number | undefined {
        return this['pictures_exclusive_rights'];
    }
    public withPicturesMoveContents(picturesMoveContents: number): PicturesConfigurations {
        this['pictures_move_contents'] = picturesMoveContents;
        return this;
    }
    public set picturesMoveContents(picturesMoveContents: number  | undefined) {
        this['pictures_move_contents'] = picturesMoveContents;
    }
    public get picturesMoveContents(): number | undefined {
        return this['pictures_move_contents'];
    }
    public withPicturesMoveContentOnPolicyRemoval(picturesMoveContentOnPolicyRemoval: number): PicturesConfigurations {
        this['pictures_move_content_on_policy_removal'] = picturesMoveContentOnPolicyRemoval;
        return this;
    }
    public set picturesMoveContentOnPolicyRemoval(picturesMoveContentOnPolicyRemoval: number  | undefined) {
        this['pictures_move_content_on_policy_removal'] = picturesMoveContentOnPolicyRemoval;
    }
    public get picturesMoveContentOnPolicyRemoval(): number | undefined {
        return this['pictures_move_content_on_policy_removal'];
    }
}