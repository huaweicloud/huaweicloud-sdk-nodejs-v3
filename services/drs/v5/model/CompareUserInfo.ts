

export class CompareUserInfo {
    public id?: string;
    private 'src_user_name'?: string;
    private 'tar_user_name'?: string;
    private 'src_privileges'?: string;
    private 'tar_privileges'?: string;
    private 'is_target_existed'?: boolean;
    private 'compare_result'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(id?: string, srcUserName?: string, tarUserName?: string, srcPrivileges?: string, tarPrivileges?: string, isTargetExisted?: boolean, compareResult?: number, createdAt?: string, updatedAt?: string) { 
        this['id'] = id;
        this['src_user_name'] = srcUserName;
        this['tar_user_name'] = tarUserName;
        this['src_privileges'] = srcPrivileges;
        this['tar_privileges'] = tarPrivileges;
        this['is_target_existed'] = isTargetExisted;
        this['compare_result'] = compareResult;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): CompareUserInfo {
        this['id'] = id;
        return this;
    }
    public withSrcUserName(srcUserName: string): CompareUserInfo {
        this['src_user_name'] = srcUserName;
        return this;
    }
    public set srcUserName(srcUserName: string  | undefined) {
        this['src_user_name'] = srcUserName;
    }
    public get srcUserName(): string | undefined {
        return this['src_user_name'];
    }
    public withTarUserName(tarUserName: string): CompareUserInfo {
        this['tar_user_name'] = tarUserName;
        return this;
    }
    public set tarUserName(tarUserName: string  | undefined) {
        this['tar_user_name'] = tarUserName;
    }
    public get tarUserName(): string | undefined {
        return this['tar_user_name'];
    }
    public withSrcPrivileges(srcPrivileges: string): CompareUserInfo {
        this['src_privileges'] = srcPrivileges;
        return this;
    }
    public set srcPrivileges(srcPrivileges: string  | undefined) {
        this['src_privileges'] = srcPrivileges;
    }
    public get srcPrivileges(): string | undefined {
        return this['src_privileges'];
    }
    public withTarPrivileges(tarPrivileges: string): CompareUserInfo {
        this['tar_privileges'] = tarPrivileges;
        return this;
    }
    public set tarPrivileges(tarPrivileges: string  | undefined) {
        this['tar_privileges'] = tarPrivileges;
    }
    public get tarPrivileges(): string | undefined {
        return this['tar_privileges'];
    }
    public withIsTargetExisted(isTargetExisted: boolean): CompareUserInfo {
        this['is_target_existed'] = isTargetExisted;
        return this;
    }
    public set isTargetExisted(isTargetExisted: boolean  | undefined) {
        this['is_target_existed'] = isTargetExisted;
    }
    public get isTargetExisted(): boolean | undefined {
        return this['is_target_existed'];
    }
    public withCompareResult(compareResult: number): CompareUserInfo {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: number  | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult(): number | undefined {
        return this['compare_result'];
    }
    public withCreatedAt(createdAt: string): CompareUserInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CompareUserInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}