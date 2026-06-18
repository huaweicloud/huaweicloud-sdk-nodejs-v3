import { NamespaceBasicDto } from './NamespaceBasicDto';
import { PermissionsDto } from './PermissionsDto';
import { RepositoryBasicDto } from './RepositoryBasicDto';
import { RepositoryIdentityDto } from './RepositoryIdentityDto';
import { RepositorySimpleDto } from './RepositorySimpleDto';
import { RepositoryStatisticsDto } from './RepositoryStatisticsDto';
import { RepositoryUserBasicDto } from './RepositoryUserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferRepositoryResponse extends SdkResponse {
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
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'develop_mode'?: TransferRepositoryResponseDevelopModeEnum | string;
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
    private 'encryption_status'?: TransferRepositoryResponseEncryptionStatusEnum | string;
    private 'repo_encryption_enabled'?: boolean;
    public uuid?: string;
    private 'ancestor_ids'?: Array<number>;
    private 'ancestor_names'?: Array<string>;
    private 'import_status'?: string;
    private 'import_url'?: string;
    private 'import_error'?: string;
    private 'repo_type'?: string;
    private 'only_allow_merge_if_pipeline_succeeds'?: boolean;
    private 'request_access_enabled'?: boolean;
    private 'only_allow_merge_if_all_discussions_are_resolved'?: boolean;
    private 'merge_method'?: string;
    private 'fork_network_repositories'?: Array<RepositoryIdentityDto>;
    public permissions?: PermissionsDto;
    private 'repository_type'?: string;
    public statistics?: RepositoryStatisticsDto;
    private 'branch_count'?: number;
    private 'tag_count'?: number;
    private 'label_count'?: number;
    private 'member_count'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): TransferRepositoryResponse {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): TransferRepositoryResponse {
        this['description'] = description;
        return this;
    }
    public withName(name: string): TransferRepositoryResponse {
        this['name'] = name;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): TransferRepositoryResponse {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withPath(path: string): TransferRepositoryResponse {
        this['path'] = path;
        return this;
    }
    public withPathWithNamespace(pathWithNamespace: string): TransferRepositoryResponse {
        this['path_with_namespace'] = pathWithNamespace;
        return this;
    }
    public set pathWithNamespace(pathWithNamespace: string  | undefined) {
        this['path_with_namespace'] = pathWithNamespace;
    }
    public get pathWithNamespace(): string | undefined {
        return this['path_with_namespace'];
    }
    public withCreatedAt(createdAt: string): TransferRepositoryResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): TransferRepositoryResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withArchived(archived: boolean): TransferRepositoryResponse {
        this['archived'] = archived;
        return this;
    }
    public withSshUrlToRepo(sshUrlToRepo: string): TransferRepositoryResponse {
        this['ssh_url_to_repo'] = sshUrlToRepo;
        return this;
    }
    public set sshUrlToRepo(sshUrlToRepo: string  | undefined) {
        this['ssh_url_to_repo'] = sshUrlToRepo;
    }
    public get sshUrlToRepo(): string | undefined {
        return this['ssh_url_to_repo'];
    }
    public withHttpUrlToRepo(httpUrlToRepo: string): TransferRepositoryResponse {
        this['http_url_to_repo'] = httpUrlToRepo;
        return this;
    }
    public set httpUrlToRepo(httpUrlToRepo: string  | undefined) {
        this['http_url_to_repo'] = httpUrlToRepo;
    }
    public get httpUrlToRepo(): string | undefined {
        return this['http_url_to_repo'];
    }
    public withProjectId(projectId: string): TransferRepositoryResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): TransferRepositoryResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDevelopMode(developMode: TransferRepositoryResponseDevelopModeEnum | string): TransferRepositoryResponse {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: TransferRepositoryResponseDevelopModeEnum | string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): TransferRepositoryResponseDevelopModeEnum | string | undefined {
        return this['develop_mode'];
    }
    public withModerationResult(moderationResult: boolean): TransferRepositoryResponse {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withDefaultBranch(defaultBranch: string): TransferRepositoryResponse {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withAvatarUrl(avatarUrl: string): TransferRepositoryResponse {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withStarCount(starCount: number): TransferRepositoryResponse {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withForksCount(forksCount: number): TransferRepositoryResponse {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withOpenIssuesCount(openIssuesCount: number): TransferRepositoryResponse {
        this['open_issues_count'] = openIssuesCount;
        return this;
    }
    public set openIssuesCount(openIssuesCount: number  | undefined) {
        this['open_issues_count'] = openIssuesCount;
    }
    public get openIssuesCount(): number | undefined {
        return this['open_issues_count'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): TransferRepositoryResponse {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withLastActivityAt(lastActivityAt: string): TransferRepositoryResponse {
        this['last_activity_at'] = lastActivityAt;
        return this;
    }
    public set lastActivityAt(lastActivityAt: string  | undefined) {
        this['last_activity_at'] = lastActivityAt;
    }
    public get lastActivityAt(): string | undefined {
        return this['last_activity_at'];
    }
    public withNamespace(namespace: NamespaceBasicDto): TransferRepositoryResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withEmptyRepo(emptyRepo: boolean): TransferRepositoryResponse {
        this['empty_repo'] = emptyRepo;
        return this;
    }
    public set emptyRepo(emptyRepo: boolean  | undefined) {
        this['empty_repo'] = emptyRepo;
    }
    public get emptyRepo(): boolean | undefined {
        return this['empty_repo'];
    }
    public withStarred(starred: boolean): TransferRepositoryResponse {
        this['starred'] = starred;
        return this;
    }
    public withVisibility(visibility: string): TransferRepositoryResponse {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurityTag(securityTag: string): TransferRepositoryResponse {
        this['security_tag'] = securityTag;
        return this;
    }
    public set securityTag(securityTag: string  | undefined) {
        this['security_tag'] = securityTag;
    }
    public get securityTag(): string | undefined {
        return this['security_tag'];
    }
    public withSecurity(security: string): TransferRepositoryResponse {
        this['security'] = security;
        return this;
    }
    public withNetworkType(networkType: string): TransferRepositoryResponse {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withOwner(owner: RepositoryUserBasicDto): TransferRepositoryResponse {
        this['owner'] = owner;
        return this;
    }
    public withCreator(creator: RepositoryUserBasicDto): TransferRepositoryResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreatorId(creatorId: number): TransferRepositoryResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withForkedFromRepository(forkedFromRepository: RepositorySimpleDto): TransferRepositoryResponse {
        this['forked_from_repository'] = forkedFromRepository;
        return this;
    }
    public set forkedFromRepository(forkedFromRepository: RepositorySimpleDto  | undefined) {
        this['forked_from_repository'] = forkedFromRepository;
    }
    public get forkedFromRepository(): RepositorySimpleDto | undefined {
        return this['forked_from_repository'];
    }
    public withEncryptionStatus(encryptionStatus: TransferRepositoryResponseEncryptionStatusEnum | string): TransferRepositoryResponse {
        this['encryption_status'] = encryptionStatus;
        return this;
    }
    public set encryptionStatus(encryptionStatus: TransferRepositoryResponseEncryptionStatusEnum | string  | undefined) {
        this['encryption_status'] = encryptionStatus;
    }
    public get encryptionStatus(): TransferRepositoryResponseEncryptionStatusEnum | string | undefined {
        return this['encryption_status'];
    }
    public withRepoEncryptionEnabled(repoEncryptionEnabled: boolean): TransferRepositoryResponse {
        this['repo_encryption_enabled'] = repoEncryptionEnabled;
        return this;
    }
    public set repoEncryptionEnabled(repoEncryptionEnabled: boolean  | undefined) {
        this['repo_encryption_enabled'] = repoEncryptionEnabled;
    }
    public get repoEncryptionEnabled(): boolean | undefined {
        return this['repo_encryption_enabled'];
    }
    public withUuid(uuid: string): TransferRepositoryResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withAncestorIds(ancestorIds: Array<number>): TransferRepositoryResponse {
        this['ancestor_ids'] = ancestorIds;
        return this;
    }
    public set ancestorIds(ancestorIds: Array<number>  | undefined) {
        this['ancestor_ids'] = ancestorIds;
    }
    public get ancestorIds(): Array<number> | undefined {
        return this['ancestor_ids'];
    }
    public withAncestorNames(ancestorNames: Array<string>): TransferRepositoryResponse {
        this['ancestor_names'] = ancestorNames;
        return this;
    }
    public set ancestorNames(ancestorNames: Array<string>  | undefined) {
        this['ancestor_names'] = ancestorNames;
    }
    public get ancestorNames(): Array<string> | undefined {
        return this['ancestor_names'];
    }
    public withImportStatus(importStatus: string): TransferRepositoryResponse {
        this['import_status'] = importStatus;
        return this;
    }
    public set importStatus(importStatus: string  | undefined) {
        this['import_status'] = importStatus;
    }
    public get importStatus(): string | undefined {
        return this['import_status'];
    }
    public withImportUrl(importUrl: string): TransferRepositoryResponse {
        this['import_url'] = importUrl;
        return this;
    }
    public set importUrl(importUrl: string  | undefined) {
        this['import_url'] = importUrl;
    }
    public get importUrl(): string | undefined {
        return this['import_url'];
    }
    public withImportError(importError: string): TransferRepositoryResponse {
        this['import_error'] = importError;
        return this;
    }
    public set importError(importError: string  | undefined) {
        this['import_error'] = importError;
    }
    public get importError(): string | undefined {
        return this['import_error'];
    }
    public withRepoType(repoType: string): TransferRepositoryResponse {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: string  | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType(): string | undefined {
        return this['repo_type'];
    }
    public withOnlyAllowMergeIfPipelineSucceeds(onlyAllowMergeIfPipelineSucceeds: boolean): TransferRepositoryResponse {
        this['only_allow_merge_if_pipeline_succeeds'] = onlyAllowMergeIfPipelineSucceeds;
        return this;
    }
    public set onlyAllowMergeIfPipelineSucceeds(onlyAllowMergeIfPipelineSucceeds: boolean  | undefined) {
        this['only_allow_merge_if_pipeline_succeeds'] = onlyAllowMergeIfPipelineSucceeds;
    }
    public get onlyAllowMergeIfPipelineSucceeds(): boolean | undefined {
        return this['only_allow_merge_if_pipeline_succeeds'];
    }
    public withRequestAccessEnabled(requestAccessEnabled: boolean): TransferRepositoryResponse {
        this['request_access_enabled'] = requestAccessEnabled;
        return this;
    }
    public set requestAccessEnabled(requestAccessEnabled: boolean  | undefined) {
        this['request_access_enabled'] = requestAccessEnabled;
    }
    public get requestAccessEnabled(): boolean | undefined {
        return this['request_access_enabled'];
    }
    public withOnlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean): TransferRepositoryResponse {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
        return this;
    }
    public set onlyAllowMergeIfAllDiscussionsAreResolved(onlyAllowMergeIfAllDiscussionsAreResolved: boolean  | undefined) {
        this['only_allow_merge_if_all_discussions_are_resolved'] = onlyAllowMergeIfAllDiscussionsAreResolved;
    }
    public get onlyAllowMergeIfAllDiscussionsAreResolved(): boolean | undefined {
        return this['only_allow_merge_if_all_discussions_are_resolved'];
    }
    public withMergeMethod(mergeMethod: string): TransferRepositoryResponse {
        this['merge_method'] = mergeMethod;
        return this;
    }
    public set mergeMethod(mergeMethod: string  | undefined) {
        this['merge_method'] = mergeMethod;
    }
    public get mergeMethod(): string | undefined {
        return this['merge_method'];
    }
    public withForkNetworkRepositories(forkNetworkRepositories: Array<RepositoryIdentityDto>): TransferRepositoryResponse {
        this['fork_network_repositories'] = forkNetworkRepositories;
        return this;
    }
    public set forkNetworkRepositories(forkNetworkRepositories: Array<RepositoryIdentityDto>  | undefined) {
        this['fork_network_repositories'] = forkNetworkRepositories;
    }
    public get forkNetworkRepositories(): Array<RepositoryIdentityDto> | undefined {
        return this['fork_network_repositories'];
    }
    public withPermissions(permissions: PermissionsDto): TransferRepositoryResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withRepositoryType(repositoryType: string): TransferRepositoryResponse {
        this['repository_type'] = repositoryType;
        return this;
    }
    public set repositoryType(repositoryType: string  | undefined) {
        this['repository_type'] = repositoryType;
    }
    public get repositoryType(): string | undefined {
        return this['repository_type'];
    }
    public withStatistics(statistics: RepositoryStatisticsDto): TransferRepositoryResponse {
        this['statistics'] = statistics;
        return this;
    }
    public withBranchCount(branchCount: number): TransferRepositoryResponse {
        this['branch_count'] = branchCount;
        return this;
    }
    public set branchCount(branchCount: number  | undefined) {
        this['branch_count'] = branchCount;
    }
    public get branchCount(): number | undefined {
        return this['branch_count'];
    }
    public withTagCount(tagCount: number): TransferRepositoryResponse {
        this['tag_count'] = tagCount;
        return this;
    }
    public set tagCount(tagCount: number  | undefined) {
        this['tag_count'] = tagCount;
    }
    public get tagCount(): number | undefined {
        return this['tag_count'];
    }
    public withLabelCount(labelCount: number): TransferRepositoryResponse {
        this['label_count'] = labelCount;
        return this;
    }
    public set labelCount(labelCount: number  | undefined) {
        this['label_count'] = labelCount;
    }
    public get labelCount(): number | undefined {
        return this['label_count'];
    }
    public withMemberCount(memberCount: number): TransferRepositoryResponse {
        this['member_count'] = memberCount;
        return this;
    }
    public set memberCount(memberCount: number  | undefined) {
        this['member_count'] = memberCount;
    }
    public get memberCount(): number | undefined {
        return this['member_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransferRepositoryResponseDevelopModeEnum {
    NORMAL = 'normal',
    CR = 'CR'
}
/**
    * @export
    * @enum {string}
    */
export enum TransferRepositoryResponseEncryptionStatusEnum {
    ENCRYPTING = 'encrypting',
    ENCRYPTED = 'encrypted',
    DECRYPTING = 'decrypting',
    DECRYPTED = 'decrypted'
}
