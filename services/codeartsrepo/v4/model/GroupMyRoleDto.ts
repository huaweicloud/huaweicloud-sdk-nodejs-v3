

export class GroupMyRoleDto {
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
    private 'created_by_id'?: number;
    private 'invite_email'?: string;
    private 'invite_token'?: string;
    private 'invite_accepted_at'?: string;
    private 'requested_at'?: string;
    private 'expires_at'?: string;
    public limited?: boolean;
    public isProjectAdmin?: number;
    public isGroupCreator?: number;
    public isRepoCreator?: number;
    public roleShowFlag?: number;
    public constructor() { 
    }
    public withId(id: number): GroupMyRoleDto {
        this['id'] = id;
        return this;
    }
    public withAccessLevel(accessLevel: number): GroupMyRoleDto {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: number  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): number | undefined {
        return this['access_level'];
    }
    public withRoleNamecn(roleNamecn: string): GroupMyRoleDto {
        this['role_namecn'] = roleNamecn;
        return this;
    }
    public set roleNamecn(roleNamecn: string  | undefined) {
        this['role_namecn'] = roleNamecn;
    }
    public get roleNamecn(): string | undefined {
        return this['role_namecn'];
    }
    public withRoleNamen(roleNamen: string): GroupMyRoleDto {
        this['role_namen'] = roleNamen;
        return this;
    }
    public set roleNamen(roleNamen: string  | undefined) {
        this['role_namen'] = roleNamen;
    }
    public get roleNamen(): string | undefined {
        return this['role_namen'];
    }
    public withSourceId(sourceId: number): GroupMyRoleDto {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: number  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): number | undefined {
        return this['source_id'];
    }
    public withSourceType(sourceType: string): GroupMyRoleDto {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withUserId(userId: number): GroupMyRoleDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: number  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): number | undefined {
        return this['user_id'];
    }
    public withNotificationLevel(notificationLevel: number): GroupMyRoleDto {
        this['notification_level'] = notificationLevel;
        return this;
    }
    public set notificationLevel(notificationLevel: number  | undefined) {
        this['notification_level'] = notificationLevel;
    }
    public get notificationLevel(): number | undefined {
        return this['notification_level'];
    }
    public withCreatedAt(createdAt: string): GroupMyRoleDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GroupMyRoleDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCreatedById(createdById: number): GroupMyRoleDto {
        this['created_by_id'] = createdById;
        return this;
    }
    public set createdById(createdById: number  | undefined) {
        this['created_by_id'] = createdById;
    }
    public get createdById(): number | undefined {
        return this['created_by_id'];
    }
    public withInviteEmail(inviteEmail: string): GroupMyRoleDto {
        this['invite_email'] = inviteEmail;
        return this;
    }
    public set inviteEmail(inviteEmail: string  | undefined) {
        this['invite_email'] = inviteEmail;
    }
    public get inviteEmail(): string | undefined {
        return this['invite_email'];
    }
    public withInviteToken(inviteToken: string): GroupMyRoleDto {
        this['invite_token'] = inviteToken;
        return this;
    }
    public set inviteToken(inviteToken: string  | undefined) {
        this['invite_token'] = inviteToken;
    }
    public get inviteToken(): string | undefined {
        return this['invite_token'];
    }
    public withInviteAcceptedAt(inviteAcceptedAt: string): GroupMyRoleDto {
        this['invite_accepted_at'] = inviteAcceptedAt;
        return this;
    }
    public set inviteAcceptedAt(inviteAcceptedAt: string  | undefined) {
        this['invite_accepted_at'] = inviteAcceptedAt;
    }
    public get inviteAcceptedAt(): string | undefined {
        return this['invite_accepted_at'];
    }
    public withRequestedAt(requestedAt: string): GroupMyRoleDto {
        this['requested_at'] = requestedAt;
        return this;
    }
    public set requestedAt(requestedAt: string  | undefined) {
        this['requested_at'] = requestedAt;
    }
    public get requestedAt(): string | undefined {
        return this['requested_at'];
    }
    public withExpiresAt(expiresAt: string): GroupMyRoleDto {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withLimited(limited: boolean): GroupMyRoleDto {
        this['limited'] = limited;
        return this;
    }
    public withIsProjectAdmin(isProjectAdmin: number): GroupMyRoleDto {
        this['isProjectAdmin'] = isProjectAdmin;
        return this;
    }
    public withIsGroupCreator(isGroupCreator: number): GroupMyRoleDto {
        this['isGroupCreator'] = isGroupCreator;
        return this;
    }
    public withIsRepoCreator(isRepoCreator: number): GroupMyRoleDto {
        this['isRepoCreator'] = isRepoCreator;
        return this;
    }
    public withRoleShowFlag(roleShowFlag: number): GroupMyRoleDto {
        this['roleShowFlag'] = roleShowFlag;
        return this;
    }
}