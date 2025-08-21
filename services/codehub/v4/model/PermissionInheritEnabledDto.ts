

export class PermissionInheritEnabledDto {
    private 'inherit_parent_permission'?: boolean;
    public constructor(inheritParentPermission?: boolean) { 
        this['inherit_parent_permission'] = inheritParentPermission;
    }
    public withInheritParentPermission(inheritParentPermission: boolean): PermissionInheritEnabledDto {
        this['inherit_parent_permission'] = inheritParentPermission;
        return this;
    }
    public set inheritParentPermission(inheritParentPermission: boolean  | undefined) {
        this['inherit_parent_permission'] = inheritParentPermission;
    }
    public get inheritParentPermission(): boolean | undefined {
        return this['inherit_parent_permission'];
    }
}