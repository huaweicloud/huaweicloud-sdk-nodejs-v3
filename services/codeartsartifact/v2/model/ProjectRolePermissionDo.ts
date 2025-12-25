

export class ProjectRolePermissionDo {
    public id?: string;
    private 'role_id'?: number;
    private 'devuc_role_id'?: string;
    private 'project_id'?: string;
    private 'is_permission_config'?: boolean;
    private 'is_change_pkg_status'?: boolean;
    private 'is_upload'?: boolean;
    private 'is_delete_restore_test_pkg'?: boolean;
    private 'is_delete_restore_prod_pkg'?: boolean;
    private 'is_edit_test_pkg'?: boolean;
    private 'is_mkdir'?: boolean;
    private 'is_download'?: boolean;
    private 'is_restore_all'?: boolean;
    private 'is_empty'?: boolean;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'migrated_630'?: number;
    public region?: string;
    private 'user_id'?: string;
    public roles?: string;
    public constructor() { 
    }
    public withId(id: string): ProjectRolePermissionDo {
        this['id'] = id;
        return this;
    }
    public withRoleId(roleId: number): ProjectRolePermissionDo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: number  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): number | undefined {
        return this['role_id'];
    }
    public withDevucRoleId(devucRoleId: string): ProjectRolePermissionDo {
        this['devuc_role_id'] = devucRoleId;
        return this;
    }
    public set devucRoleId(devucRoleId: string  | undefined) {
        this['devuc_role_id'] = devucRoleId;
    }
    public get devucRoleId(): string | undefined {
        return this['devuc_role_id'];
    }
    public withProjectId(projectId: string): ProjectRolePermissionDo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsPermissionConfig(isPermissionConfig: boolean): ProjectRolePermissionDo {
        this['is_permission_config'] = isPermissionConfig;
        return this;
    }
    public set isPermissionConfig(isPermissionConfig: boolean  | undefined) {
        this['is_permission_config'] = isPermissionConfig;
    }
    public get isPermissionConfig(): boolean | undefined {
        return this['is_permission_config'];
    }
    public withIsChangePkgStatus(isChangePkgStatus: boolean): ProjectRolePermissionDo {
        this['is_change_pkg_status'] = isChangePkgStatus;
        return this;
    }
    public set isChangePkgStatus(isChangePkgStatus: boolean  | undefined) {
        this['is_change_pkg_status'] = isChangePkgStatus;
    }
    public get isChangePkgStatus(): boolean | undefined {
        return this['is_change_pkg_status'];
    }
    public withIsUpload(isUpload: boolean): ProjectRolePermissionDo {
        this['is_upload'] = isUpload;
        return this;
    }
    public set isUpload(isUpload: boolean  | undefined) {
        this['is_upload'] = isUpload;
    }
    public get isUpload(): boolean | undefined {
        return this['is_upload'];
    }
    public withIsDeleteRestoreTestPkg(isDeleteRestoreTestPkg: boolean): ProjectRolePermissionDo {
        this['is_delete_restore_test_pkg'] = isDeleteRestoreTestPkg;
        return this;
    }
    public set isDeleteRestoreTestPkg(isDeleteRestoreTestPkg: boolean  | undefined) {
        this['is_delete_restore_test_pkg'] = isDeleteRestoreTestPkg;
    }
    public get isDeleteRestoreTestPkg(): boolean | undefined {
        return this['is_delete_restore_test_pkg'];
    }
    public withIsDeleteRestoreProdPkg(isDeleteRestoreProdPkg: boolean): ProjectRolePermissionDo {
        this['is_delete_restore_prod_pkg'] = isDeleteRestoreProdPkg;
        return this;
    }
    public set isDeleteRestoreProdPkg(isDeleteRestoreProdPkg: boolean  | undefined) {
        this['is_delete_restore_prod_pkg'] = isDeleteRestoreProdPkg;
    }
    public get isDeleteRestoreProdPkg(): boolean | undefined {
        return this['is_delete_restore_prod_pkg'];
    }
    public withIsEditTestPkg(isEditTestPkg: boolean): ProjectRolePermissionDo {
        this['is_edit_test_pkg'] = isEditTestPkg;
        return this;
    }
    public set isEditTestPkg(isEditTestPkg: boolean  | undefined) {
        this['is_edit_test_pkg'] = isEditTestPkg;
    }
    public get isEditTestPkg(): boolean | undefined {
        return this['is_edit_test_pkg'];
    }
    public withIsMkdir(isMkdir: boolean): ProjectRolePermissionDo {
        this['is_mkdir'] = isMkdir;
        return this;
    }
    public set isMkdir(isMkdir: boolean  | undefined) {
        this['is_mkdir'] = isMkdir;
    }
    public get isMkdir(): boolean | undefined {
        return this['is_mkdir'];
    }
    public withIsDownload(isDownload: boolean): ProjectRolePermissionDo {
        this['is_download'] = isDownload;
        return this;
    }
    public set isDownload(isDownload: boolean  | undefined) {
        this['is_download'] = isDownload;
    }
    public get isDownload(): boolean | undefined {
        return this['is_download'];
    }
    public withIsRestoreAll(isRestoreAll: boolean): ProjectRolePermissionDo {
        this['is_restore_all'] = isRestoreAll;
        return this;
    }
    public set isRestoreAll(isRestoreAll: boolean  | undefined) {
        this['is_restore_all'] = isRestoreAll;
    }
    public get isRestoreAll(): boolean | undefined {
        return this['is_restore_all'];
    }
    public withIsEmpty(isEmpty: boolean): ProjectRolePermissionDo {
        this['is_empty'] = isEmpty;
        return this;
    }
    public set isEmpty(isEmpty: boolean  | undefined) {
        this['is_empty'] = isEmpty;
    }
    public get isEmpty(): boolean | undefined {
        return this['is_empty'];
    }
    public withCreateTime(createTime: number): ProjectRolePermissionDo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ProjectRolePermissionDo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withMigrated630(migrated630: number): ProjectRolePermissionDo {
        this['migrated_630'] = migrated630;
        return this;
    }
    public set migrated630(migrated630: number  | undefined) {
        this['migrated_630'] = migrated630;
    }
    public get migrated630(): number | undefined {
        return this['migrated_630'];
    }
    public withRegion(region: string): ProjectRolePermissionDo {
        this['region'] = region;
        return this;
    }
    public withUserId(userId: string): ProjectRolePermissionDo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withRoles(roles: string): ProjectRolePermissionDo {
        this['roles'] = roles;
        return this;
    }
}