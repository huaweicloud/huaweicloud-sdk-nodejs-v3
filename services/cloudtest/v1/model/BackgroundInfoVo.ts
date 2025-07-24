

export class BackgroundInfoVo {
    private 'project_uuid'?: string;
    private 'cover_file_name'?: string;
    private 'background_file_name'?: string;
    private 'logo_file_name'?: string;
    public constructor() { 
    }
    public withProjectUuid(projectUuid: string): BackgroundInfoVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withCoverFileName(coverFileName: string): BackgroundInfoVo {
        this['cover_file_name'] = coverFileName;
        return this;
    }
    public set coverFileName(coverFileName: string  | undefined) {
        this['cover_file_name'] = coverFileName;
    }
    public get coverFileName(): string | undefined {
        return this['cover_file_name'];
    }
    public withBackgroundFileName(backgroundFileName: string): BackgroundInfoVo {
        this['background_file_name'] = backgroundFileName;
        return this;
    }
    public set backgroundFileName(backgroundFileName: string  | undefined) {
        this['background_file_name'] = backgroundFileName;
    }
    public get backgroundFileName(): string | undefined {
        return this['background_file_name'];
    }
    public withLogoFileName(logoFileName: string): BackgroundInfoVo {
        this['logo_file_name'] = logoFileName;
        return this;
    }
    public set logoFileName(logoFileName: string  | undefined) {
        this['logo_file_name'] = logoFileName;
    }
    public get logoFileName(): string | undefined {
        return this['logo_file_name'];
    }
}