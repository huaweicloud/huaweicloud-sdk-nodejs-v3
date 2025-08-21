

export class ResourcePermissionDto {
    private 'permission_id'?: number;
    public action?: string;
    private 'display_name'?: string;
    private 'display_name_cn'?: string;
    public enabled?: boolean;
    public editable?: boolean;
    public constructor() { 
    }
    public withPermissionId(permissionId: number): ResourcePermissionDto {
        this['permission_id'] = permissionId;
        return this;
    }
    public set permissionId(permissionId: number  | undefined) {
        this['permission_id'] = permissionId;
    }
    public get permissionId(): number | undefined {
        return this['permission_id'];
    }
    public withAction(action: string): ResourcePermissionDto {
        this['action'] = action;
        return this;
    }
    public withDisplayName(displayName: string): ResourcePermissionDto {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDisplayNameCn(displayNameCn: string): ResourcePermissionDto {
        this['display_name_cn'] = displayNameCn;
        return this;
    }
    public set displayNameCn(displayNameCn: string  | undefined) {
        this['display_name_cn'] = displayNameCn;
    }
    public get displayNameCn(): string | undefined {
        return this['display_name_cn'];
    }
    public withEnabled(enabled: boolean): ResourcePermissionDto {
        this['enabled'] = enabled;
        return this;
    }
    public withEditable(editable: boolean): ResourcePermissionDto {
        this['editable'] = editable;
        return this;
    }
}