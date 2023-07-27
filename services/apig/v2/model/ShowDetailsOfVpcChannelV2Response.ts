import { MemberGroupInfo } from './MemberGroupInfo';
import { MicroServiceInfo } from './MicroServiceInfo';
import { VpcChannelInfo } from './VpcChannelInfo';
import { VpcHealthConfigInfo } from './VpcHealthConfigInfo';
import { VpcMemberInfo } from './VpcMemberInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfVpcChannelV2Response extends SdkResponse {
    public name?: string;
    public port?: number;
    private 'balance_strategy'?: ShowDetailsOfVpcChannelV2ResponseBalanceStrategyEnum | number;
    private 'member_type'?: ShowDetailsOfVpcChannelV2ResponseMemberTypeEnum | string;
    public type?: number;
    private 'dict_code'?: string;
    private 'create_time'?: Date;
    public id?: string;
    public status?: ShowDetailsOfVpcChannelV2ResponseStatusEnum | number;
    private 'member_groups'?: Array<MemberGroupInfo>;
    private 'microservice_info'?: MicroServiceInfo;
    public members?: Array<VpcMemberInfo>;
    private 'vpc_health_config'?: VpcHealthConfigInfo;
    public constructor(name?: string, port?: number, balanceStrategy?: number, memberType?: string) { 
        super();
        this['name'] = name;
        this['port'] = port;
        this['balance_strategy'] = balanceStrategy;
        this['member_type'] = memberType;
    }
    public withName(name: string): ShowDetailsOfVpcChannelV2Response {
        this['name'] = name;
        return this;
    }
    public withPort(port: number): ShowDetailsOfVpcChannelV2Response {
        this['port'] = port;
        return this;
    }
    public withBalanceStrategy(balanceStrategy: ShowDetailsOfVpcChannelV2ResponseBalanceStrategyEnum | number): ShowDetailsOfVpcChannelV2Response {
        this['balance_strategy'] = balanceStrategy;
        return this;
    }
    public set balanceStrategy(balanceStrategy: ShowDetailsOfVpcChannelV2ResponseBalanceStrategyEnum | number  | undefined) {
        this['balance_strategy'] = balanceStrategy;
    }
    public get balanceStrategy(): ShowDetailsOfVpcChannelV2ResponseBalanceStrategyEnum | number | undefined {
        return this['balance_strategy'];
    }
    public withMemberType(memberType: ShowDetailsOfVpcChannelV2ResponseMemberTypeEnum | string): ShowDetailsOfVpcChannelV2Response {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: ShowDetailsOfVpcChannelV2ResponseMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): ShowDetailsOfVpcChannelV2ResponseMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withType(type: number): ShowDetailsOfVpcChannelV2Response {
        this['type'] = type;
        return this;
    }
    public withDictCode(dictCode: string): ShowDetailsOfVpcChannelV2Response {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withCreateTime(createTime: Date): ShowDetailsOfVpcChannelV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): ShowDetailsOfVpcChannelV2Response {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ShowDetailsOfVpcChannelV2ResponseStatusEnum | number): ShowDetailsOfVpcChannelV2Response {
        this['status'] = status;
        return this;
    }
    public withMemberGroups(memberGroups: Array<MemberGroupInfo>): ShowDetailsOfVpcChannelV2Response {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupInfo>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupInfo> | undefined {
        return this['member_groups'];
    }
    public withMicroserviceInfo(microserviceInfo: MicroServiceInfo): ShowDetailsOfVpcChannelV2Response {
        this['microservice_info'] = microserviceInfo;
        return this;
    }
    public set microserviceInfo(microserviceInfo: MicroServiceInfo  | undefined) {
        this['microservice_info'] = microserviceInfo;
    }
    public get microserviceInfo(): MicroServiceInfo | undefined {
        return this['microservice_info'];
    }
    public withMembers(members: Array<VpcMemberInfo>): ShowDetailsOfVpcChannelV2Response {
        this['members'] = members;
        return this;
    }
    public withVpcHealthConfig(vpcHealthConfig: VpcHealthConfigInfo): ShowDetailsOfVpcChannelV2Response {
        this['vpc_health_config'] = vpcHealthConfig;
        return this;
    }
    public set vpcHealthConfig(vpcHealthConfig: VpcHealthConfigInfo  | undefined) {
        this['vpc_health_config'] = vpcHealthConfig;
    }
    public get vpcHealthConfig(): VpcHealthConfigInfo | undefined {
        return this['vpc_health_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfVpcChannelV2ResponseBalanceStrategyEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfVpcChannelV2ResponseMemberTypeEnum {
    IP = 'ip',
    ECS = 'ecs'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfVpcChannelV2ResponseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
