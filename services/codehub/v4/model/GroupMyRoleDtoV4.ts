

export class GroupMyRoleDtoV4 {
    public id?: number;
    private 'access_level'?: number;
    private 'role_namecn'?: string;
    private 'role_namen'?: string;
    private 'source_id'?: number;
    private 'source_type'?: string;
    private 'user_id'?: number;
    private 'notification_level'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'is_project_admin'?: number;
    private 'is_group_creator'?: number;
    private 'is_repo_creator'?: number;
    private 'role_show_flag'?: number;
    public constructor() { 
    }
    public withId(id: number): GroupMyRoleDtoV4 {
        this['id'] = id;
        return this;
    }
    public withAccessLevel(accessLevel: number): GroupMyRoleDtoV4 {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: number  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): number | undefined {
        return this['access_level'];
    }
    public withRoleNamecn(roleNamecn: string): GroupMyRoleDtoV4 {
        this['role_namecn'] = roleNamecn;
        return this;
    }
    public set roleNamecn(roleNamecn: string  | undefined) {
        this['role_namecn'] = roleNamecn;
    }
    public get roleNamecn(): string | undefined {
        return this['role_namecn'];
    }
    public withRoleNamen(roleNamen: string): GroupMyRoleDtoV4 {
        this['role_namen'] = roleNamen;
        return this;
    }
    public set roleNamen(roleNamen: string  | undefined) {
        this['role_namen'] = roleNamen;
    }
    public get roleNamen(): string | undefined {
        return this['role_namen'];
    }
    public withSourceId(sourceId: number): GroupMyRoleDtoV4 {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceType(sourceType: string): GroupMyRoleDtoV4 {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withUserId(userId: number): GroupMyRoleDtoV4 {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withNotificationLevel(notificationLevel: number): GroupMyRoleDtoV4 {
        this['notification_level'] = notificationLevel;
        return this;
    }
    public set notificationLevel(notificationLevel: number  | undefined) {
        this['notification_level'] = notificationLevel;
    }
    public get notificationLevel(): number | undefined {
        return this['notification_level'];
    }
    public withCreatedAt(createdAt: string): GroupMyRoleDtoV4 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GroupMyRoleDtoV4 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withIsProjectAdmin(isProjectAdmin: number): GroupMyRoleDtoV4 {
        this['is_project_admin'] = isProjectAdmin;
        return this;
    }
    public set isProjectAdmin(isProjectAdmin: number  | undefined) {
        this['is_project_admin'] = isProjectAdmin;
    }
    public get isProjectAdmin(): number | undefined {
        return this['is_project_admin'];
    }
    public withIsGroupCreator(isGroupCreator: number): GroupMyRoleDtoV4 {
        this['is_group_creator'] = isGroupCreator;
        return this;
    }
    public set isGroupCreator(isGroupCreator: number  | undefined) {
        this['is_group_creator'] = isGroupCreator;
    }
    public get isGroupCreator(): number | undefined {
        return this['is_group_creator'];
    }
    public withIsRepoCreator(isRepoCreator: number): GroupMyRoleDtoV4 {
        this['is_repo_creator'] = isRepoCreator;
        return this;
    }
    public set isRepoCreator(isRepoCreator: number  | undefined) {
        this['is_repo_creator'] = isRepoCreator;
    }
    public get isRepoCreator(): number | undefined {
        return this['is_repo_creator'];
    }
    public withRoleShowFlag(roleShowFlag: number): GroupMyRoleDtoV4 {
        this['role_show_flag'] = roleShowFlag;
        return this;
    }
    public set roleShowFlag(roleShowFlag: number  | undefined) {
        this['role_show_flag'] = roleShowFlag;
    }
    public get roleShowFlag(): number | undefined {
        return this['role_show_flag'];
    }
}