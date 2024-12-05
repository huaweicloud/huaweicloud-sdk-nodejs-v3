

export class PermissionSetMemberCreateDTO {
    private 'member_type'?: PermissionSetMemberCreateDTOMemberTypeEnum | string;
    private 'member_id'?: string;
    private 'member_name'?: string;
    public workspace?: string;
    private 'auto_sync'?: boolean;
    public constructor() { 
    }
    public withMemberType(memberType: PermissionSetMemberCreateDTOMemberTypeEnum | string): PermissionSetMemberCreateDTO {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: PermissionSetMemberCreateDTOMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): PermissionSetMemberCreateDTOMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withMemberId(memberId: string): PermissionSetMemberCreateDTO {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withMemberName(memberName: string): PermissionSetMemberCreateDTO {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withWorkspace(workspace: string): PermissionSetMemberCreateDTO {
        this['workspace'] = workspace;
        return this;
    }
    public withAutoSync(autoSync: boolean): PermissionSetMemberCreateDTO {
        this['auto_sync'] = autoSync;
        return this;
    }
    public set autoSync(autoSync: boolean  | undefined) {
        this['auto_sync'] = autoSync;
    }
    public get autoSync(): boolean | undefined {
        return this['auto_sync'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetMemberCreateDTOMemberTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    WORKSPACE_ROLE = 'WORKSPACE_ROLE'
}
