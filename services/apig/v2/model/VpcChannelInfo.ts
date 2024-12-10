import { MemberGroupInfo } from './MemberGroupInfo';
import { MicroServiceInfo } from './MicroServiceInfo';
import { VpcBase } from './VpcBase';


export class VpcChannelInfo {
    public name?: string;
    public port?: number;
    private 'balance_strategy'?: VpcChannelInfoBalanceStrategyEnum | number;
    private 'member_type'?: VpcChannelInfoMemberTypeEnum | string;
    public type?: number;
    private 'vpc_channel_type'?: VpcChannelInfoVpcChannelTypeEnum | string;
    private 'dict_code'?: string;
    private 'create_time'?: Date;
    public id?: string;
    public status?: VpcChannelInfoStatusEnum | number;
    private 'member_groups'?: Array<MemberGroupInfo>;
    private 'microservice_info'?: MicroServiceInfo;
    public constructor(name?: string, port?: number, balanceStrategy?: number, memberType?: string) { 
        this['name'] = name;
        this['port'] = port;
        this['balance_strategy'] = balanceStrategy;
        this['member_type'] = memberType;
    }
    public withName(name: string): VpcChannelInfo {
        this['name'] = name;
        return this;
    }
    public withPort(port: number): VpcChannelInfo {
        this['port'] = port;
        return this;
    }
    public withBalanceStrategy(balanceStrategy: VpcChannelInfoBalanceStrategyEnum | number): VpcChannelInfo {
        this['balance_strategy'] = balanceStrategy;
        return this;
    }
    public set balanceStrategy(balanceStrategy: VpcChannelInfoBalanceStrategyEnum | number  | undefined) {
        this['balance_strategy'] = balanceStrategy;
    }
    public get balanceStrategy(): VpcChannelInfoBalanceStrategyEnum | number | undefined {
        return this['balance_strategy'];
    }
    public withMemberType(memberType: VpcChannelInfoMemberTypeEnum | string): VpcChannelInfo {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: VpcChannelInfoMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): VpcChannelInfoMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withType(type: number): VpcChannelInfo {
        this['type'] = type;
        return this;
    }
    public withVpcChannelType(vpcChannelType: VpcChannelInfoVpcChannelTypeEnum | string): VpcChannelInfo {
        this['vpc_channel_type'] = vpcChannelType;
        return this;
    }
    public set vpcChannelType(vpcChannelType: VpcChannelInfoVpcChannelTypeEnum | string  | undefined) {
        this['vpc_channel_type'] = vpcChannelType;
    }
    public get vpcChannelType(): VpcChannelInfoVpcChannelTypeEnum | string | undefined {
        return this['vpc_channel_type'];
    }
    public withDictCode(dictCode: string): VpcChannelInfo {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withCreateTime(createTime: Date): VpcChannelInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): VpcChannelInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: VpcChannelInfoStatusEnum | number): VpcChannelInfo {
        this['status'] = status;
        return this;
    }
    public withMemberGroups(memberGroups: Array<MemberGroupInfo>): VpcChannelInfo {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupInfo>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupInfo> | undefined {
        return this['member_groups'];
    }
    public withMicroserviceInfo(microserviceInfo: MicroServiceInfo): VpcChannelInfo {
        this['microservice_info'] = microserviceInfo;
        return this;
    }
    public set microserviceInfo(microserviceInfo: MicroServiceInfo  | undefined) {
        this['microservice_info'] = microserviceInfo;
    }
    public get microserviceInfo(): MicroServiceInfo | undefined {
        return this['microservice_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcChannelInfoBalanceStrategyEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum VpcChannelInfoMemberTypeEnum {
    IP = 'ip',
    ECS = 'ecs'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcChannelInfoVpcChannelTypeEnum {
    BUILTIN = 'builtin',
    MICROSERVICE = 'microservice',
    REFERENCE = 'reference'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcChannelInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
