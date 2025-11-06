import { GroupMyRoleDtoV4 } from './GroupMyRoleDtoV4';


export class GroupBaseDto {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'ancestor_ids'?: Array<number>;
    private 'ancestor_names'?: Array<string>;
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
    private 'lfs_enabled'?: boolean;
    private 'full_name'?: string;
    private 'full_path'?: string;
    private 'item_type'?: string;
    private 'parent_id'?: number;
    private 'my_role'?: GroupMyRoleDtoV4;
    public members?: number;
    private 'web_url'?: string;
    private 'created_at'?: string;
    private 'sub_group_count'?: number;
    private 'last_owner'?: boolean;
    public starred?: boolean;
    public constructor() { 
    }
    public withProjectId(projectId: string): GroupBaseDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): GroupBaseDto {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withAncestorIds(ancestorIds: Array<number>): GroupBaseDto {
        this['ancestor_ids'] = ancestorIds;
        return this;
    }
    public set ancestorIds(ancestorIds: Array<number>  | undefined) {
        this['ancestor_ids'] = ancestorIds;
    }
    public get ancestorIds(): Array<number> | undefined {
        return this['ancestor_ids'];
    }
    public withAncestorNames(ancestorNames: Array<string>): GroupBaseDto {
        this['ancestor_names'] = ancestorNames;
        return this;
    }
    public set ancestorNames(ancestorNames: Array<string>  | undefined) {
        this['ancestor_names'] = ancestorNames;
    }
    public get ancestorNames(): Array<string> | undefined {
        return this['ancestor_names'];
    }
    public withDevelopMode(developMode: string): GroupBaseDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withId(id: number): GroupBaseDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupBaseDto {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): GroupBaseDto {
        this['path'] = path;
        return this;
    }
    public withGroupLevel(groupLevel: number): GroupBaseDto {
        this['group_level'] = groupLevel;
        return this;
    }
    public set groupLevel(groupLevel: number  | undefined) {
        this['group_level'] = groupLevel;
    }
    public get groupLevel(): number | undefined {
        return this['group_level'];
    }
    public withDescription(description: string): GroupBaseDto {
        this['description'] = description;
        return this;
    }
    public withSubgroupCount(subgroupCount: number): GroupBaseDto {
        this['subgroup_count'] = subgroupCount;
        return this;
    }
    public set subgroupCount(subgroupCount: number  | undefined) {
        this['subgroup_count'] = subgroupCount;
    }
    public get subgroupCount(): number | undefined {
        return this['subgroup_count'];
    }
    public withProjectCount(projectCount: number): GroupBaseDto {
        this['project_count'] = projectCount;
        return this;
    }
    public set projectCount(projectCount: number  | undefined) {
        this['project_count'] = projectCount;
    }
    public get projectCount(): number | undefined {
        return this['project_count'];
    }
    public withGroupRole(groupRole: number): GroupBaseDto {
        this['group_role'] = groupRole;
        return this;
    }
    public set groupRole(groupRole: number  | undefined) {
        this['group_role'] = groupRole;
    }
    public get groupRole(): number | undefined {
        return this['group_role'];
    }
    public withGroupMembersCount(groupMembersCount: number): GroupBaseDto {
        this['group_members_count'] = groupMembersCount;
        return this;
    }
    public set groupMembersCount(groupMembersCount: number  | undefined) {
        this['group_members_count'] = groupMembersCount;
    }
    public get groupMembersCount(): number | undefined {
        return this['group_members_count'];
    }
    public withDescendantType(descendantType: string): GroupBaseDto {
        this['descendant_type'] = descendantType;
        return this;
    }
    public set descendantType(descendantType: string  | undefined) {
        this['descendant_type'] = descendantType;
    }
    public get descendantType(): string | undefined {
        return this['descendant_type'];
    }
    public withVisibilityLevel(visibilityLevel: number): GroupBaseDto {
        this['visibility_level'] = visibilityLevel;
        return this;
    }
    public set visibilityLevel(visibilityLevel: number  | undefined) {
        this['visibility_level'] = visibilityLevel;
    }
    public get visibilityLevel(): number | undefined {
        return this['visibility_level'];
    }
    public withVisibility(visibility: string): GroupBaseDto {
        this['visibility'] = visibility;
        return this;
    }
    public withIsProjectAdmin(isProjectAdmin: number): GroupBaseDto {
        this['is_project_admin'] = isProjectAdmin;
        return this;
    }
    public set isProjectAdmin(isProjectAdmin: number  | undefined) {
        this['is_project_admin'] = isProjectAdmin;
    }
    public get isProjectAdmin(): number | undefined {
        return this['is_project_admin'];
    }
    public withIsGroupCreator(isGroupCreator: number): GroupBaseDto {
        this['is_group_creator'] = isGroupCreator;
        return this;
    }
    public set isGroupCreator(isGroupCreator: number  | undefined) {
        this['is_group_creator'] = isGroupCreator;
    }
    public get isGroupCreator(): number | undefined {
        return this['is_group_creator'];
    }
    public withIsRepoCreator(isRepoCreator: number): GroupBaseDto {
        this['is_repo_creator'] = isRepoCreator;
        return this;
    }
    public set isRepoCreator(isRepoCreator: number  | undefined) {
        this['is_repo_creator'] = isRepoCreator;
    }
    public get isRepoCreator(): number | undefined {
        return this['is_repo_creator'];
    }
    public withLfsEnabled(lfsEnabled: boolean): GroupBaseDto {
        this['lfs_enabled'] = lfsEnabled;
        return this;
    }
    public set lfsEnabled(lfsEnabled: boolean  | undefined) {
        this['lfs_enabled'] = lfsEnabled;
    }
    public get lfsEnabled(): boolean | undefined {
        return this['lfs_enabled'];
    }
    public withFullName(fullName: string): GroupBaseDto {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withFullPath(fullPath: string): GroupBaseDto {
        this['full_path'] = fullPath;
        return this;
    }
    public set fullPath(fullPath: string  | undefined) {
        this['full_path'] = fullPath;
    }
    public get fullPath(): string | undefined {
        return this['full_path'];
    }
    public withItemType(itemType: string): GroupBaseDto {
        this['item_type'] = itemType;
        return this;
    }
    public set itemType(itemType: string  | undefined) {
        this['item_type'] = itemType;
    }
    public get itemType(): string | undefined {
        return this['item_type'];
    }
    public withParentId(parentId: number): GroupBaseDto {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): number | undefined {
        return this['parent_id'];
    }
    public withMyRole(myRole: GroupMyRoleDtoV4): GroupBaseDto {
        this['my_role'] = myRole;
        return this;
    }
    public set myRole(myRole: GroupMyRoleDtoV4  | undefined) {
        this['my_role'] = myRole;
    }
    public get myRole(): GroupMyRoleDtoV4 | undefined {
        return this['my_role'];
    }
    public withMembers(members: number): GroupBaseDto {
        this['members'] = members;
        return this;
    }
    public withWebUrl(webUrl: string): GroupBaseDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withCreatedAt(createdAt: string): GroupBaseDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withSubGroupCount(subGroupCount: number): GroupBaseDto {
        this['sub_group_count'] = subGroupCount;
        return this;
    }
    public set subGroupCount(subGroupCount: number  | undefined) {
        this['sub_group_count'] = subGroupCount;
    }
    public get subGroupCount(): number | undefined {
        return this['sub_group_count'];
    }
    public withLastOwner(lastOwner: boolean): GroupBaseDto {
        this['last_owner'] = lastOwner;
        return this;
    }
    public set lastOwner(lastOwner: boolean  | undefined) {
        this['last_owner'] = lastOwner;
    }
    public get lastOwner(): boolean | undefined {
        return this['last_owner'];
    }
    public withStarred(starred: boolean): GroupBaseDto {
        this['starred'] = starred;
        return this;
    }
}