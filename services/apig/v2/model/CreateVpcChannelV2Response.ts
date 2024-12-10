import { MemberGroupInfo } from './MemberGroupInfo';
import { MicroServiceInfo } from './MicroServiceInfo';
import { VpcBase } from './VpcBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcChannelV2Response extends SdkResponse {
    public name?: string;
    public port?: number;
    private 'balance_strategy'?: CreateVpcChannelV2ResponseBalanceStrategyEnum | number;
    private 'member_type'?: CreateVpcChannelV2ResponseMemberTypeEnum | string;
    public type?: number;
    private 'vpc_channel_type'?: CreateVpcChannelV2ResponseVpcChannelTypeEnum | string;
    private 'dict_code'?: string;
    private 'create_time'?: Date;
    public id?: string;
    public status?: CreateVpcChannelV2ResponseStatusEnum | number;
    private 'member_groups'?: Array<MemberGroupInfo>;
    private 'microservice_info'?: MicroServiceInfo;
    public constructor(name?: string, port?: number, balanceStrategy?: number, memberType?: string) { 
        super();
        this['name'] = name;
        this['port'] = port;
        this['balance_strategy'] = balanceStrategy;
        this['member_type'] = memberType;
    }
    public withName(name: string): CreateVpcChannelV2Response {
        this['name'] = name;
        return this;
    }
    public withPort(port: number): CreateVpcChannelV2Response {
        this['port'] = port;
        return this;
    }
    public withBalanceStrategy(balanceStrategy: CreateVpcChannelV2ResponseBalanceStrategyEnum | number): CreateVpcChannelV2Response {
        this['balance_strategy'] = balanceStrategy;
        return this;
    }
    public set balanceStrategy(balanceStrategy: CreateVpcChannelV2ResponseBalanceStrategyEnum | number  | undefined) {
        this['balance_strategy'] = balanceStrategy;
    }
    public get balanceStrategy(): CreateVpcChannelV2ResponseBalanceStrategyEnum | number | undefined {
        return this['balance_strategy'];
    }
    public withMemberType(memberType: CreateVpcChannelV2ResponseMemberTypeEnum | string): CreateVpcChannelV2Response {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: CreateVpcChannelV2ResponseMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): CreateVpcChannelV2ResponseMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withType(type: number): CreateVpcChannelV2Response {
        this['type'] = type;
        return this;
    }
    public withVpcChannelType(vpcChannelType: CreateVpcChannelV2ResponseVpcChannelTypeEnum | string): CreateVpcChannelV2Response {
        this['vpc_channel_type'] = vpcChannelType;
        return this;
    }
    public set vpcChannelType(vpcChannelType: CreateVpcChannelV2ResponseVpcChannelTypeEnum | string  | undefined) {
        this['vpc_channel_type'] = vpcChannelType;
    }
    public get vpcChannelType(): CreateVpcChannelV2ResponseVpcChannelTypeEnum | string | undefined {
        return this['vpc_channel_type'];
    }
    public withDictCode(dictCode: string): CreateVpcChannelV2Response {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withCreateTime(createTime: Date): CreateVpcChannelV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): CreateVpcChannelV2Response {
        this['id'] = id;
        return this;
    }
    public withStatus(status: CreateVpcChannelV2ResponseStatusEnum | number): CreateVpcChannelV2Response {
        this['status'] = status;
        return this;
    }
    public withMemberGroups(memberGroups: Array<MemberGroupInfo>): CreateVpcChannelV2Response {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupInfo>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupInfo> | undefined {
        return this['member_groups'];
    }
    public withMicroserviceInfo(microserviceInfo: MicroServiceInfo): CreateVpcChannelV2Response {
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
export enum CreateVpcChannelV2ResponseBalanceStrategyEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVpcChannelV2ResponseMemberTypeEnum {
    IP = 'ip',
    ECS = 'ecs'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVpcChannelV2ResponseVpcChannelTypeEnum {
    BUILTIN = 'builtin',
    MICROSERVICE = 'microservice',
    REFERENCE = 'reference'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateVpcChannelV2ResponseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
