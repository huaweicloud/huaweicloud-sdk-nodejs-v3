

export class PermissionSetMemberCreateDTO2 {
    private 'member_type'?: PermissionSetMemberCreateDTO2MemberTypeEnum | string;
    private 'member_id'?: string;
    private 'member_name'?: string;
    public workspace?: string;
    public constructor() { 
    }
    public withMemberType(memberType: PermissionSetMemberCreateDTO2MemberTypeEnum | string): PermissionSetMemberCreateDTO2 {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: PermissionSetMemberCreateDTO2MemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): PermissionSetMemberCreateDTO2MemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withMemberId(memberId: string): PermissionSetMemberCreateDTO2 {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withMemberName(memberName: string): PermissionSetMemberCreateDTO2 {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withWorkspace(workspace: string): PermissionSetMemberCreateDTO2 {
        this['workspace'] = workspace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetMemberCreateDTO2MemberTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    WORKSPACE_ROLE = 'WORKSPACE_ROLE'
}
