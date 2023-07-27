import { MemberInfo } from './MemberInfo';


export class VpcMemberInfo {
    public host?: string;
    public weight?: number;
    private 'is_backup'?: boolean;
    private 'member_group_name'?: string;
    public status?: VpcMemberInfoStatusEnum | number;
    public port?: number;
    private 'ecs_id'?: string;
    private 'ecs_name'?: string;
    public id?: string;
    private 'vpc_channel_id'?: string;
    private 'create_time'?: Date;
    private 'member_group_id'?: string;
    public constructor() { 
    }
    public withHost(host: string): VpcMemberInfo {
        this['host'] = host;
        return this;
    }
    public withWeight(weight: number): VpcMemberInfo {
        this['weight'] = weight;
        return this;
    }
    public withIsBackup(isBackup: boolean): VpcMemberInfo {
        this['is_backup'] = isBackup;
        return this;
    }
    public set isBackup(isBackup: boolean  | undefined) {
        this['is_backup'] = isBackup;
    }
    public get isBackup(): boolean | undefined {
        return this['is_backup'];
    }
    public withMemberGroupName(memberGroupName: string): VpcMemberInfo {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withStatus(status: VpcMemberInfoStatusEnum | number): VpcMemberInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): VpcMemberInfo {
        this['port'] = port;
        return this;
    }
    public withEcsId(ecsId: string): VpcMemberInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withEcsName(ecsName: string): VpcMemberInfo {
        this['ecs_name'] = ecsName;
        return this;
    }
    public set ecsName(ecsName: string  | undefined) {
        this['ecs_name'] = ecsName;
    }
    public get ecsName(): string | undefined {
        return this['ecs_name'];
    }
    public withId(id: string): VpcMemberInfo {
        this['id'] = id;
        return this;
    }
    public withVpcChannelId(vpcChannelId: string): VpcMemberInfo {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withCreateTime(createTime: Date): VpcMemberInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withMemberGroupId(memberGroupId: string): VpcMemberInfo {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcMemberInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
