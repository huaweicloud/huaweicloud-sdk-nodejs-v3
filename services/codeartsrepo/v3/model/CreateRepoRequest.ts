

export class CreateRepoRequest {
    private 'import_members'?: number;
    public name?: string;
    private 'project_uuid'?: string;
    private 'template_id'?: string;
    private 'visibility_level'?: number;
    private 'import_url'?: string;
    public description?: string;
    private 'gitignore_id'?: string;
    private 'license_id'?: number;
    private 'enable_readme'?: number;
    public caller?: string;
    public constructor(name?: string, projectUuid?: string) { 
        this['name'] = name;
        this['project_uuid'] = projectUuid;
    }
    public withImportMembers(importMembers: number): CreateRepoRequest {
        this['import_members'] = importMembers;
        return this;
    }
    public set importMembers(importMembers: number  | undefined) {
        this['import_members'] = importMembers;
    }
    public get importMembers(): number | undefined {
        return this['import_members'];
    }
    public withName(name: string): CreateRepoRequest {
        this['name'] = name;
        return this;
    }
    public withProjectUuid(projectUuid: string): CreateRepoRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTemplateId(templateId: string): CreateRepoRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withVisibilityLevel(visibilityLevel: number): CreateRepoRequest {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withImportUrl(importUrl: string): CreateRepoRequest {
        this['import_url'] = importUrl;
        return this;
    }
    public set importUrl(importUrl: string  | undefined) {
        this['import_url'] = importUrl;
    }
    public get importUrl(): string | undefined {
        return this['import_url'];
    }
    public withDescription(description: string): CreateRepoRequest {
        this['description'] = description;
        return this;
    }
    public withGitignoreId(gitignoreId: string): CreateRepoRequest {
        this['gitignore_id'] = gitignoreId;
        return this;
    }
    public set gitignoreId(gitignoreId: string  | undefined) {
        this['gitignore_id'] = gitignoreId;
    }
    public get gitignoreId(): string | undefined {
        return this['gitignore_id'];
    }
    public withLicenseId(licenseId: number): CreateRepoRequest {
        this['license_id'] = licenseId;
        return this;
    }
    public set licenseId(licenseId: number  | undefined) {
        this['license_id'] = licenseId;
    }
    public get licenseId(): number | undefined {
        return this['license_id'];
    }
    public withEnableReadme(enableReadme: number): CreateRepoRequest {
        this['enable_readme'] = enableReadme;
        return this;
    }
    public set enableReadme(enableReadme: number  | undefined) {
        this['enable_readme'] = enableReadme;
    }
    public get enableReadme(): number | undefined {
        return this['enable_readme'];
    }
    public withCaller(caller: string): CreateRepoRequest {
        this['caller'] = caller;
        return this;
    }
}