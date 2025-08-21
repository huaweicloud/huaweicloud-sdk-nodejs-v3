import { ForkedFromRepositorySimplestDto } from './ForkedFromRepositorySimplestDto';


export class RepositorySimplestDto {
    public id?: number;
    public name?: string;
    public namespace?: string;
    public path?: string;
    private 'develop_mode'?: string;
    public visibility?: string;
    public security?: string;
    private 'star_count'?: number;
    private 'forks_count'?: number;
    private 'open_issues_count'?: number;
    private 'open_merge_requests_count'?: number;
    public starred?: boolean;
    private 'name_with_namespace'?: string;
    private 'last_activity_at'?: string;
    private 'forked_from_repository'?: ForkedFromRepositorySimplestDto;
    public permissions?: number;
    public archived?: boolean;
    private 'member_count'?: number;
    public uuid?: string;
    public description?: string;
    private 'last_repository_updated_at'?: string;
    private 'ssh_url_to_repo'?: string;
    private 'http_url_to_repo'?: string;
    public status?: string;
    private 'active_statistic'?: Array<number>;
    private 'project_name'?: string;
    private 'project_id'?: string;
    private 'project_is_delete'?: boolean;
    private 'creator_id'?: number;
    public constructor() { 
    }
    public withId(id: number): RepositorySimplestDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RepositorySimplestDto {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): RepositorySimplestDto {
        this['namespace'] = namespace;
        return this;
    }
    public withPath(path: string): RepositorySimplestDto {
        this['path'] = path;
        return this;
    }
    public withDevelopMode(developMode: string): RepositorySimplestDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withVisibility(visibility: string): RepositorySimplestDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurity(security: string): RepositorySimplestDto {
        this['security'] = security;
        return this;
    }
    public withStarCount(starCount: number): RepositorySimplestDto {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withForksCount(forksCount: number): RepositorySimplestDto {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withOpenIssuesCount(openIssuesCount: number): RepositorySimplestDto {
        this['open_issues_count'] = openIssuesCount;
        return this;
    }
    public set openIssuesCount(openIssuesCount: number  | undefined) {
        this['open_issues_count'] = openIssuesCount;
    }
    public get openIssuesCount(): number | undefined {
        return this['open_issues_count'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): RepositorySimplestDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withStarred(starred: boolean): RepositorySimplestDto {
        this['starred'] = starred;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): RepositorySimplestDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withLastActivityAt(lastActivityAt: string): RepositorySimplestDto {
        this['last_activity_at'] = lastActivityAt;
        return this;
    }
    public set lastActivityAt(lastActivityAt: string  | undefined) {
        this['last_activity_at'] = lastActivityAt;
    }
    public get lastActivityAt(): string | undefined {
        return this['last_activity_at'];
    }
    public withForkedFromRepository(forkedFromRepository: ForkedFromRepositorySimplestDto): RepositorySimplestDto {
        this['forked_from_repository'] = forkedFromRepository;
        return this;
    }
    public set forkedFromRepository(forkedFromRepository: ForkedFromRepositorySimplestDto  | undefined) {
        this['forked_from_repository'] = forkedFromRepository;
    }
    public get forkedFromRepository(): ForkedFromRepositorySimplestDto | undefined {
        return this['forked_from_repository'];
    }
    public withPermissions(permissions: number): RepositorySimplestDto {
        this['permissions'] = permissions;
        return this;
    }
    public withArchived(archived: boolean): RepositorySimplestDto {
        this['archived'] = archived;
        return this;
    }
    public withMemberCount(memberCount: number): RepositorySimplestDto {
        this['member_count'] = memberCount;
        return this;
    }
    public set memberCount(memberCount: number  | undefined) {
        this['member_count'] = memberCount;
    }
    public get memberCount(): number | undefined {
        return this['member_count'];
    }
    public withUuid(uuid: string): RepositorySimplestDto {
        this['uuid'] = uuid;
        return this;
    }
    public withDescription(description: string): RepositorySimplestDto {
        this['description'] = description;
        return this;
    }
    public withLastRepositoryUpdatedAt(lastRepositoryUpdatedAt: string): RepositorySimplestDto {
        this['last_repository_updated_at'] = lastRepositoryUpdatedAt;
        return this;
    }
    public set lastRepositoryUpdatedAt(lastRepositoryUpdatedAt: string  | undefined) {
        this['last_repository_updated_at'] = lastRepositoryUpdatedAt;
    }
    public get lastRepositoryUpdatedAt(): string | undefined {
        return this['last_repository_updated_at'];
    }
    public withSshUrlToRepo(sshUrlToRepo: string): RepositorySimplestDto {
        this['ssh_url_to_repo'] = sshUrlToRepo;
        return this;
    }
    public set sshUrlToRepo(sshUrlToRepo: string  | undefined) {
        this['ssh_url_to_repo'] = sshUrlToRepo;
    }
    public get sshUrlToRepo(): string | undefined {
        return this['ssh_url_to_repo'];
    }
    public withHttpUrlToRepo(httpUrlToRepo: string): RepositorySimplestDto {
        this['http_url_to_repo'] = httpUrlToRepo;
        return this;
    }
    public set httpUrlToRepo(httpUrlToRepo: string  | undefined) {
        this['http_url_to_repo'] = httpUrlToRepo;
    }
    public get httpUrlToRepo(): string | undefined {
        return this['http_url_to_repo'];
    }
    public withStatus(status: string): RepositorySimplestDto {
        this['status'] = status;
        return this;
    }
    public withActiveStatistic(activeStatistic: Array<number>): RepositorySimplestDto {
        this['active_statistic'] = activeStatistic;
        return this;
    }
    public set activeStatistic(activeStatistic: Array<number>  | undefined) {
        this['active_statistic'] = activeStatistic;
    }
    public get activeStatistic(): Array<number> | undefined {
        return this['active_statistic'];
    }
    public withProjectName(projectName: string): RepositorySimplestDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): RepositorySimplestDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectIsDelete(projectIsDelete: boolean): RepositorySimplestDto {
        this['project_is_delete'] = projectIsDelete;
        return this;
    }
    public set projectIsDelete(projectIsDelete: boolean  | undefined) {
        this['project_is_delete'] = projectIsDelete;
    }
    public get projectIsDelete(): boolean | undefined {
        return this['project_is_delete'];
    }
    public withCreatorId(creatorId: number): RepositorySimplestDto {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
}