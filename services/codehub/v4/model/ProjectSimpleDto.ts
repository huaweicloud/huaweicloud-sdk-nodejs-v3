

export class ProjectSimpleDto {
    public id?: number;
    public description?: string;
    public name?: string;
    private 'name_with_namespace'?: string;
    public path?: string;
    private 'path_with_namespace'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public archived?: boolean;
    private 'is_kia'?: boolean;
    private 'ssh_url_to_repo'?: string;
    private 'http_url_to_repo'?: string;
    private 'web_url'?: string;
    private 'readme_url'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'develop_mode'?: string;
    private 'moderation_result'?: boolean;
    public constructor() { 
    }
    public withId(id: number): ProjectSimpleDto {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ProjectSimpleDto {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ProjectSimpleDto {
        this['name'] = name;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): ProjectSimpleDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withPath(path: string): ProjectSimpleDto {
        this['path'] = path;
        return this;
    }
    public withPathWithNamespace(pathWithNamespace: string): ProjectSimpleDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withCreatedAt(createdAt: string): ProjectSimpleDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ProjectSimpleDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withArchived(archived: boolean): ProjectSimpleDto {
        this['archived'] = archived;
        return this;
    }
    public withIsKia(isKia: boolean): ProjectSimpleDto {
        this['is_kia'] = isKia;
        return this;
    }
    public set isKia(isKia: boolean  | undefined) {
        this['is_kia'] = isKia;
    }
    public get isKia(): boolean | undefined {
        return this['is_kia'];
    }
    public withSshUrlToRepo(sshUrlToRepo: string): ProjectSimpleDto {
        this['ssh_url_to_repo'] = sshUrlToRepo;
        return this;
    }
    public set sshUrlToRepo(sshUrlToRepo: string  | undefined) {
        this['ssh_url_to_repo'] = sshUrlToRepo;
    }
    public get sshUrlToRepo(): string | undefined {
        return this['ssh_url_to_repo'];
    }
    public withHttpUrlToRepo(httpUrlToRepo: string): ProjectSimpleDto {
        this['http_url_to_repo'] = httpUrlToRepo;
        return this;
    }
    public set httpUrlToRepo(httpUrlToRepo: string  | undefined) {
        this['http_url_to_repo'] = httpUrlToRepo;
    }
    public get httpUrlToRepo(): string | undefined {
        return this['http_url_to_repo'];
    }
    public withWebUrl(webUrl: string): ProjectSimpleDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withReadmeUrl(readmeUrl: string): ProjectSimpleDto {
        this['readme_url'] = readmeUrl;
        return this;
    }
    public set readmeUrl(readmeUrl: string  | undefined) {
        this['readme_url'] = readmeUrl;
    }
    public get readmeUrl(): string | undefined {
        return this['readme_url'];
    }
    public withProjectId(projectId: string): ProjectSimpleDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ProjectSimpleDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDevelopMode(developMode: string): ProjectSimpleDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withModerationResult(moderationResult: boolean): ProjectSimpleDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
}