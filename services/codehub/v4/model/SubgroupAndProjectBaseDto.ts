import { ProjectCreatorDto } from './ProjectCreatorDto';


export class SubgroupAndProjectBaseDto {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'role_namecn'?: string;
    private 'role_nameen'?: string;
    private 'full_name'?: string;
    private 'full_path'?: string;
    private 'created_at'?: string;
    private 'updated_at_timestamp'?: string;
    private 'star_time'?: string;
    public starred?: boolean;
    private 'develop_mode'?: string;
    public id?: number;
    public name?: string;
    public path?: string;
    private 'group_level'?: number;
    public description?: string;
    private 'subgroup_count'?: number;
    private 'project_count'?: number;
    private 'group_role'?: number;
    private 'group_members_count'?: number;
    private 'descendant_type'?: string;
    private 'visibility_level'?: number;
    public visibility?: string;
    private 'is_project_admin'?: number;
    private 'is_group_creator'?: number;
    private 'is_repo_creator'?: number;
    private 'role_show_flag'?: number;
    public uuid?: string;
    private 'forks_count'?: number;
    private 'is_kia'?: boolean;
    private 'is_owner'?: boolean;
    public archived?: boolean;
    private 'last_repository_updated_at'?: string;
    private 'open_merge_requests_count'?: number;
    private 'all_merge_requests_count'?: number;
    private 'project_role'?: number;
    private 'project_members_count'?: number;
    private 'project_creator'?: ProjectCreatorDto;
    private 'star_count'?: number;
    private 'tag_list'?: Array<string>;
    private 'http_url_to_repo'?: string;
    private 'ssh_url_to_repo'?: string;
    public status?: number;
    private 'active_statistic'?: Array<number>;
    private 'security_tag'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): SubgroupAndProjectBaseDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): SubgroupAndProjectBaseDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRoleNamecn(roleNamecn: string): SubgroupAndProjectBaseDto {
        this['role_namecn'] = roleNamecn;
        return this;
    }
    public set roleNamecn(roleNamecn: string  | undefined) {
        this['role_namecn'] = roleNamecn;
    }
    public get roleNamecn(): string | undefined {
        return this['role_namecn'];
    }
    public withRoleNameen(roleNameen: string): SubgroupAndProjectBaseDto {
        this['role_nameen'] = roleNameen;
        return this;
    }
    public set roleNameen(roleNameen: string  | undefined) {
        this['role_nameen'] = roleNameen;
    }
    public get roleNameen(): string | undefined {
        return this['role_nameen'];
    }
    public withFullName(fullName: string): SubgroupAndProjectBaseDto {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withFullPath(fullPath: string): SubgroupAndProjectBaseDto {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withCreatedAt(createdAt: string): SubgroupAndProjectBaseDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAtTimestamp(updatedAtTimestamp: string): SubgroupAndProjectBaseDto {
        this['updated_at_timestamp'] = updatedAtTimestamp;
        return this;
    }
    public set updatedAtTimestamp(updatedAtTimestamp: string  | undefined) {
        this['updated_at_timestamp'] = updatedAtTimestamp;
    }
    public get updatedAtTimestamp(): string | undefined {
        return this['updated_at_timestamp'];
    }
    public withStarTime(starTime: string): SubgroupAndProjectBaseDto {
        this['star_time'] = starTime;
        return this;
    }
    public set starTime(starTime: string  | undefined) {
        this['star_time'] = starTime;
    }
    public get starTime(): string | undefined {
        return this['star_time'];
    }
    public withStarred(starred: boolean): SubgroupAndProjectBaseDto {
        this['starred'] = starred;
        return this;
    }
    public withDevelopMode(developMode: string): SubgroupAndProjectBaseDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withId(id: number): SubgroupAndProjectBaseDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubgroupAndProjectBaseDto {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): SubgroupAndProjectBaseDto {
        this['path'] = path;
        return this;
    }
    public withGroupLevel(groupLevel: number): SubgroupAndProjectBaseDto {
        this['group_level'] = groupLevel;
        return this;
    }
    public set groupLevel(groupLevel: number  | undefined) {
        this['group_level'] = groupLevel;
    }
    public get groupLevel(): number | undefined {
        return this['group_level'];
    }
    public withDescription(description: string): SubgroupAndProjectBaseDto {
        this['description'] = description;
        return this;
    }
    public withSubgroupCount(subgroupCount: number): SubgroupAndProjectBaseDto {
        this['subgroup_count'] = subgroupCount;
        return this;
    }
    public set subgroupCount(subgroupCount: number  | undefined) {
        this['subgroup_count'] = subgroupCount;
    }
    public get subgroupCount(): number | undefined {
        return this['subgroup_count'];
    }
    public withProjectCount(projectCount: number): SubgroupAndProjectBaseDto {
        this['project_count'] = projectCount;
        return this;
    }
    public set projectCount(projectCount: number  | undefined) {
        this['project_count'] = projectCount;
    }
    public get projectCount(): number | undefined {
        return this['project_count'];
    }
    public withGroupRole(groupRole: number): SubgroupAndProjectBaseDto {
        this['group_role'] = groupRole;
        return this;
    }
    public set groupRole(groupRole: number  | undefined) {
        this['group_role'] = groupRole;
    }
    public get groupRole(): number | undefined {
        return this['group_role'];
    }
    public withGroupMembersCount(groupMembersCount: number): SubgroupAndProjectBaseDto {
        this['group_members_count'] = groupMembersCount;
        return this;
    }
    public set groupMembersCount(groupMembersCount: number  | undefined) {
        this['group_members_count'] = groupMembersCount;
    }
    public get groupMembersCount(): number | undefined {
        return this['group_members_count'];
    }
    public withDescendantType(descendantType: string): SubgroupAndProjectBaseDto {
        this['descendant_type'] = descendantType;
        return this;
    }
    public set descendantType(descendantType: string  | undefined) {
        this['descendant_type'] = descendantType;
    }
    public get descendantType(): string | undefined {
        return this['descendant_type'];
    }
    public withVisibilityLevel(visibilityLevel: number): SubgroupAndProjectBaseDto {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withVisibility(visibility: string): SubgroupAndProjectBaseDto {
        this['visibility'] = visibility;
        return this;
    }
    public withIsProjectAdmin(isProjectAdmin: number): SubgroupAndProjectBaseDto {
        this['is_project_admin'] = isProjectAdmin;
        return this;
    }
    public set isProjectAdmin(isProjectAdmin: number  | undefined) {
        this['is_project_admin'] = isProjectAdmin;
    }
    public get isProjectAdmin(): number | undefined {
        return this['is_project_admin'];
    }
    public withIsGroupCreator(isGroupCreator: number): SubgroupAndProjectBaseDto {
        this['is_group_creator'] = isGroupCreator;
        return this;
    }
    public set isGroupCreator(isGroupCreator: number  | undefined) {
        this['is_group_creator'] = isGroupCreator;
    }
    public get isGroupCreator(): number | undefined {
        return this['is_group_creator'];
    }
    public withIsRepoCreator(isRepoCreator: number): SubgroupAndProjectBaseDto {
        this['is_repo_creator'] = isRepoCreator;
        return this;
    }
    public set isRepoCreator(isRepoCreator: number  | undefined) {
        this['is_repo_creator'] = isRepoCreator;
    }
    public get isRepoCreator(): number | undefined {
        return this['is_repo_creator'];
    }
    public withRoleShowFlag(roleShowFlag: number): SubgroupAndProjectBaseDto {
        this['role_show_flag'] = roleShowFlag;
        return this;
    }
    public set roleShowFlag(roleShowFlag: number  | undefined) {
        this['role_show_flag'] = roleShowFlag;
    }
    public get roleShowFlag(): number | undefined {
        return this['role_show_flag'];
    }
    public withUuid(uuid: string): SubgroupAndProjectBaseDto {
        this['uuid'] = uuid;
        return this;
    }
    public withForksCount(forksCount: number): SubgroupAndProjectBaseDto {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withIsKia(isKia: boolean): SubgroupAndProjectBaseDto {
        this['is_kia'] = isKia;
        return this;
    }
    public set isKia(isKia: boolean  | undefined) {
        this['is_kia'] = isKia;
    }
    public get isKia(): boolean | undefined {
        return this['is_kia'];
    }
    public withIsOwner(isOwner: boolean): SubgroupAndProjectBaseDto {
        this['is_owner'] = isOwner;
        return this;
    }
    public set isOwner(isOwner: boolean  | undefined) {
        this['is_owner'] = isOwner;
    }
    public get isOwner(): boolean | undefined {
        return this['is_owner'];
    }
    public withArchived(archived: boolean): SubgroupAndProjectBaseDto {
        this['archived'] = archived;
        return this;
    }
    public withLastRepositoryUpdatedAt(lastRepositoryUpdatedAt: string): SubgroupAndProjectBaseDto {
        this['last_repository_updated_at'] = lastRepositoryUpdatedAt;
        return this;
    }
    public set lastRepositoryUpdatedAt(lastRepositoryUpdatedAt: string  | undefined) {
        this['last_repository_updated_at'] = lastRepositoryUpdatedAt;
    }
    public get lastRepositoryUpdatedAt(): string | undefined {
        return this['last_repository_updated_at'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): SubgroupAndProjectBaseDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withAllMergeRequestsCount(allMergeRequestsCount: number): SubgroupAndProjectBaseDto {
        this['all_merge_requests_count'] = allMergeRequestsCount;
        return this;
    }
    public set allMergeRequestsCount(allMergeRequestsCount: number  | undefined) {
        this['all_merge_requests_count'] = allMergeRequestsCount;
    }
    public get allMergeRequestsCount(): number | undefined {
        return this['all_merge_requests_count'];
    }
    public withProjectRole(projectRole: number): SubgroupAndProjectBaseDto {
        this['project_role'] = projectRole;
        return this;
    }
    public set projectRole(projectRole: number  | undefined) {
        this['project_role'] = projectRole;
    }
    public get projectRole(): number | undefined {
        return this['project_role'];
    }
    public withProjectMembersCount(projectMembersCount: number): SubgroupAndProjectBaseDto {
        this['project_members_count'] = projectMembersCount;
        return this;
    }
    public set projectMembersCount(projectMembersCount: number  | undefined) {
        this['project_members_count'] = projectMembersCount;
    }
    public get projectMembersCount(): number | undefined {
        return this['project_members_count'];
    }
    public withProjectCreator(projectCreator: ProjectCreatorDto): SubgroupAndProjectBaseDto {
        this['project_creator'] = projectCreator;
        return this;
    }
    public set projectCreator(projectCreator: ProjectCreatorDto  | undefined) {
        this['project_creator'] = projectCreator;
    }
    public get projectCreator(): ProjectCreatorDto | undefined {
        return this['project_creator'];
    }
    public withStarCount(starCount: number): SubgroupAndProjectBaseDto {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withTagList(tagList: Array<string>): SubgroupAndProjectBaseDto {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
    public withHttpUrlToRepo(httpUrlToRepo: string): SubgroupAndProjectBaseDto {
        this['http_url_to_repo'] = httpUrlToRepo;
        return this;
    }
    public set httpUrlToRepo(httpUrlToRepo: string  | undefined) {
        this['http_url_to_repo'] = httpUrlToRepo;
    }
    public get httpUrlToRepo(): string | undefined {
        return this['http_url_to_repo'];
    }
    public withSshUrlToRepo(sshUrlToRepo: string): SubgroupAndProjectBaseDto {
        this['ssh_url_to_repo'] = sshUrlToRepo;
        return this;
    }
    public set sshUrlToRepo(sshUrlToRepo: string  | undefined) {
        this['ssh_url_to_repo'] = sshUrlToRepo;
    }
    public get sshUrlToRepo(): string | undefined {
        return this['ssh_url_to_repo'];
    }
    public withStatus(status: number): SubgroupAndProjectBaseDto {
        this['status'] = status;
        return this;
    }
    public withActiveStatistic(activeStatistic: Array<number>): SubgroupAndProjectBaseDto {
        this['active_statistic'] = activeStatistic;
        return this;
    }
    public set activeStatistic(activeStatistic: Array<number>  | undefined) {
        this['active_statistic'] = activeStatistic;
    }
    public get activeStatistic(): Array<number> | undefined {
        return this['active_statistic'];
    }
    public withSecurityTag(securityTag: string): SubgroupAndProjectBaseDto {
        this['security_tag'] = securityTag;
        return this;
    }
    public set securityTag(securityTag: string  | undefined) {
        this['security_tag'] = securityTag;
    }
    public get securityTag(): string | undefined {
        return this['security_tag'];
    }
}