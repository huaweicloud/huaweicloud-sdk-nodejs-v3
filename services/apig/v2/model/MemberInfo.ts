import { MemberBase } from './MemberBase';


export class MemberInfo {
    public host?: string;
    public weight?: number;
    private 'is_backup'?: boolean;
    private 'member_group_name'?: string;
    public status?: MemberInfoStatusEnum | number;
    public port?: number;
    private 'ecs_id'?: string;
    private 'ecs_name'?: string;
    public constructor() { 
    }
    public withHost(host: string): MemberInfo {
        this['host'] = host;
        return this;
    }
    public withWeight(weight: number): MemberInfo {
        this['weight'] = weight;
        return this;
    }
    public withIsBackup(isBackup: boolean): MemberInfo {
        this['is_backup'] = isBackup;
        return this;
    }
    public set isBackup(isBackup: boolean  | undefined) {
        this['is_backup'] = isBackup;
    }
    public get isBackup(): boolean | undefined {
        return this['is_backup'];
    }
    public withMemberGroupName(memberGroupName: string): MemberInfo {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withStatus(status: MemberInfoStatusEnum | number): MemberInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): MemberInfo {
        this['port'] = port;
        return this;
    }
    public withEcsId(ecsId: string): MemberInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withEcsName(ecsName: string): MemberInfo {
        this['ecs_name'] = ecsName;
        return this;
    }
    public set ecsName(ecsName: string  | undefined) {
        this['ecs_name'] = ecsName;
    }
    public get ecsName(): string | undefined {
        return this['ecs_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
