

export class RepositoryInfo {
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public gitignore?: string;
    private 'member_permission'?: number;
    private 'readme_permission'?: number;
    private 'visibility_level'?: number;
    private 'license_id'?: number;
    public constructor() { 
    }
    public withName(name: string): RepositoryInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RepositoryInfo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): RepositoryInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): RepositoryInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withGitignore(gitignore: string): RepositoryInfo {
        this['gitignore'] = gitignore;
        return this;
    }
    public withMemberPermission(memberPermission: number): RepositoryInfo {
        this['member_permission'] = memberPermission;
        return this;
    }
    public set memberPermission(memberPermission: number  | undefined) {
        this['member_permission'] = memberPermission;
    }
    public get memberPermission(): number | undefined {
        return this['member_permission'];
    }
    public withReadmePermission(readmePermission: number): RepositoryInfo {
        this['readme_permission'] = readmePermission;
        return this;
    }
    public set readmePermission(readmePermission: number  | undefined) {
        this['readme_permission'] = readmePermission;
    }
    public get readmePermission(): number | undefined {
        return this['readme_permission'];
    }
    public withVisibilityLevel(visibilityLevel: number): RepositoryInfo {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withLicenseId(licenseId: number): RepositoryInfo {
        this['license_id'] = licenseId;
        return this;
    }
    public set licenseId(licenseId: number  | undefined) {
        this['license_id'] = licenseId;
    }
    public get licenseId(): number | undefined {
        return this['license_id'];
    }
}