

export class MemberBase {
    public host?: string;
    public weight?: number;
    private 'is_backup'?: boolean;
    private 'member_group_name'?: string;
    public status?: MemberBaseStatusEnum | number;
    public port?: number;
    public constructor() { 
    }
    public withHost(host: string): MemberBase {
        this['host'] = host;
        return this;
    }
    public withWeight(weight: number): MemberBase {
        this['weight'] = weight;
        return this;
    }
    public withIsBackup(isBackup: boolean): MemberBase {
        this['is_backup'] = isBackup;
        return this;
    }
    public set isBackup(isBackup: boolean  | undefined) {
        this['is_backup'] = isBackup;
    }
    public get isBackup(): boolean | undefined {
        return this['is_backup'];
    }
    public withMemberGroupName(memberGroupName: string): MemberBase {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withStatus(status: MemberBaseStatusEnum | number): MemberBase {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): MemberBase {
        this['port'] = port;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberBaseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
