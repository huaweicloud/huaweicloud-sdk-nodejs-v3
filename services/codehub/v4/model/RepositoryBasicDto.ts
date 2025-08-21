import { NamespaceBasicDto } from './NamespaceBasicDto';
import { RepositorySimpleDto } from './RepositorySimpleDto';
import { RepositoryUserBasicDto } from './RepositoryUserBasicDto';


export class RepositoryBasicDto {
    public id?: number;
    public description?: string;
    public name?: string;
    private 'name_with_namespace'?: string;
    public path?: string;
    private 'path_with_namespace'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public archived?: boolean;
    private 'ssh_url_to_repo'?: string;
    private 'http_url_to_repo'?: string;
    private 'web_url'?: string;
    private 'readme_url'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'develop_mode'?: RepositoryBasicDtoDevelopModeEnum | string;
    private 'moderation_result'?: boolean;
    private 'default_branch'?: string;
    private 'avatar_url'?: string;
    private 'star_count'?: number;
    private 'forks_count'?: number;
    private 'open_issues_count'?: number;
    private 'open_merge_requests_count'?: number;
    private 'last_activity_at'?: string;
    public namespace?: NamespaceBasicDto;
    private 'empty_repo'?: boolean;
    public starred?: boolean;
    public visibility?: string;
    private 'security_tag'?: string;
    public security?: string;
    private 'network_type'?: string;
    public owner?: RepositoryUserBasicDto;
    public creator?: RepositoryUserBasicDto;
    private 'creator_id'?: number;
    private 'forked_from_repository'?: RepositorySimpleDto;
    public constructor() { 
    }
    public withId(id: number): RepositoryBasicDto {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): RepositoryBasicDto {
        this['description'] = description;
        return this;
    }
    public withName(name: string): RepositoryBasicDto {
        this['name'] = name;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): RepositoryBasicDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withPath(path: string): RepositoryBasicDto {
        this['path'] = path;
        return this;
    }
    public withPathWithNamespace(pathWithNamespace: string): RepositoryBasicDto {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withCreatedAt(createdAt: string): RepositoryBasicDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): RepositoryBasicDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withArchived(archived: boolean): RepositoryBasicDto {
        this['archived'] = archived;
        return this;
    }
    public withSshUrlToRepo(sshUrlToRepo: string): RepositoryBasicDto {
        this['ssh_url_to_repo'] = sshUrlToRepo;
        return this;
    }
    public set sshUrlToRepo(sshUrlToRepo: string  | undefined) {
        this['ssh_url_to_repo'] = sshUrlToRepo;
    }
    public get sshUrlToRepo(): string | undefined {
        return this['ssh_url_to_repo'];
    }
    public withHttpUrlToRepo(httpUrlToRepo: string): RepositoryBasicDto {
        this['http_url_to_repo'] = httpUrlToRepo;
        return this;
    }
    public set httpUrlToRepo(httpUrlToRepo: string  | undefined) {
        this['http_url_to_repo'] = httpUrlToRepo;
    }
    public get httpUrlToRepo(): string | undefined {
        return this['http_url_to_repo'];
    }
    public withWebUrl(webUrl: string): RepositoryBasicDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withReadmeUrl(readmeUrl: string): RepositoryBasicDto {
        this['readme_url'] = readmeUrl;
        return this;
    }
    public set readmeUrl(readmeUrl: string  | undefined) {
        this['readme_url'] = readmeUrl;
    }
    public get readmeUrl(): string | undefined {
        return this['readme_url'];
    }
    public withProjectId(projectId: string): RepositoryBasicDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): RepositoryBasicDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDevelopMode(developMode: RepositoryBasicDtoDevelopModeEnum | string): RepositoryBasicDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: RepositoryBasicDtoDevelopModeEnum | string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): RepositoryBasicDtoDevelopModeEnum | string | undefined {
        return this['develop_mode'];
    }
    public withModerationResult(moderationResult: boolean): RepositoryBasicDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withDefaultBranch(defaultBranch: string): RepositoryBasicDto {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withAvatarUrl(avatarUrl: string): RepositoryBasicDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withStarCount(starCount: number): RepositoryBasicDto {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withForksCount(forksCount: number): RepositoryBasicDto {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withOpenIssuesCount(openIssuesCount: number): RepositoryBasicDto {
        this['open_issues_count'] = openIssuesCount;
        return this;
    }
    public set openIssuesCount(openIssuesCount: number  | undefined) {
        this['open_issues_count'] = openIssuesCount;
    }
    public get openIssuesCount(): number | undefined {
        return this['open_issues_count'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): RepositoryBasicDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withLastActivityAt(lastActivityAt: string): RepositoryBasicDto {
        this['last_activity_at'] = lastActivityAt;
        return this;
    }
    public set lastActivityAt(lastActivityAt: string  | undefined) {
        this['last_activity_at'] = lastActivityAt;
    }
    public get lastActivityAt(): string | undefined {
        return this['last_activity_at'];
    }
    public withNamespace(namespace: NamespaceBasicDto): RepositoryBasicDto {
        this['namespace'] = namespace;
        return this;
    }
    public withEmptyRepo(emptyRepo: boolean): RepositoryBasicDto {
        this['empty_repo'] = emptyRepo;
        return this;
    }
    public set emptyRepo(emptyRepo: boolean  | undefined) {
        this['empty_repo'] = emptyRepo;
    }
    public get emptyRepo(): boolean | undefined {
        return this['empty_repo'];
    }
    public withStarred(starred: boolean): RepositoryBasicDto {
        this['starred'] = starred;
        return this;
    }
    public withVisibility(visibility: string): RepositoryBasicDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurityTag(securityTag: string): RepositoryBasicDto {
        this['security_tag'] = securityTag;
        return this;
    }
    public set securityTag(securityTag: string  | undefined) {
        this['security_tag'] = securityTag;
    }
    public get securityTag(): string | undefined {
        return this['security_tag'];
    }
    public withSecurity(security: string): RepositoryBasicDto {
        this['security'] = security;
        return this;
    }
    public withNetworkType(networkType: string): RepositoryBasicDto {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withOwner(owner: RepositoryUserBasicDto): RepositoryBasicDto {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: RepositoryUserBasicDto): RepositoryBasicDto {
        this['creator'] = creator;
        return this;
    }
    public withCreatorId(creatorId: number): RepositoryBasicDto {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withForkedFromRepository(forkedFromRepository: RepositorySimpleDto): RepositoryBasicDto {
        this['forked_from_repository'] = forkedFromRepository;
        return this;
    }
    public set forkedFromRepository(forkedFromRepository: RepositorySimpleDto  | undefined) {
        this['forked_from_repository'] = forkedFromRepository;
    }
    public get forkedFromRepository(): RepositorySimpleDto | undefined {
        return this['forked_from_repository'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryBasicDtoDevelopModeEnum {
    NORMAL = 'normal',
    CR = 'CR'
}
