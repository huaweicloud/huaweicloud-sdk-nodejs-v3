import { MemberGroupCreate } from './MemberGroupCreate';
import { MemberInfo } from './MemberInfo';
import { MicroServiceCreate } from './MicroServiceCreate';
import { VpcBase } from './VpcBase';
import { VpcHealthConfig } from './VpcHealthConfig';


export class VpcCreate {
    public name?: string;
    public port?: number;
    private 'balance_strategy'?: VpcCreateBalanceStrategyEnum | number;
    private 'member_type'?: VpcCreateMemberTypeEnum | string;
    public type?: number;
    private 'dict_code'?: string;
    private 'member_groups'?: Array<MemberGroupCreate>;
    public members?: Array<MemberInfo>;
    private 'vpc_health_config'?: VpcHealthConfig;
    private 'microservice_info'?: MicroServiceCreate;
    public constructor(name?: string, port?: number, balanceStrategy?: number, memberType?: string) { 
        this['name'] = name;
        this['port'] = port;
        this['balance_strategy'] = balanceStrategy;
        this['member_type'] = memberType;
    }
    public withName(name: string): VpcCreate {
        this['name'] = name;
        return this;
    }
    public withPort(port: number): VpcCreate {
        this['port'] = port;
        return this;
    }
    public withBalanceStrategy(balanceStrategy: VpcCreateBalanceStrategyEnum | number): VpcCreate {
        this['balance_strategy'] = balanceStrategy;
        return this;
    }
    public set balanceStrategy(balanceStrategy: VpcCreateBalanceStrategyEnum | number  | undefined) {
        this['balance_strategy'] = balanceStrategy;
    }
    public get balanceStrategy(): VpcCreateBalanceStrategyEnum | number | undefined {
        return this['balance_strategy'];
    }
    public withMemberType(memberType: VpcCreateMemberTypeEnum | string): VpcCreate {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: VpcCreateMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): VpcCreateMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withType(type: number): VpcCreate {
        this['type'] = type;
        return this;
    }
    public withDictCode(dictCode: string): VpcCreate {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withMemberGroups(memberGroups: Array<MemberGroupCreate>): VpcCreate {
        this['member_groups'] = memberGroups;
        return this;
    }
    public set memberGroups(memberGroups: Array<MemberGroupCreate>  | undefined) {
        this['member_groups'] = memberGroups;
    }
    public get memberGroups(): Array<MemberGroupCreate> | undefined {
        return this['member_groups'];
    }
    public withMembers(members: Array<MemberInfo>): VpcCreate {
        this['members'] = members;
        return this;
    }
    public withVpcHealthConfig(vpcHealthConfig: VpcHealthConfig): VpcCreate {
        this['vpc_health_config'] = vpcHealthConfig;
        return this;
    }
    public set vpcHealthConfig(vpcHealthConfig: VpcHealthConfig  | undefined) {
        this['vpc_health_config'] = vpcHealthConfig;
    }
    public get vpcHealthConfig(): VpcHealthConfig | undefined {
        return this['vpc_health_config'];
    }
    public withMicroserviceInfo(microserviceInfo: MicroServiceCreate): VpcCreate {
        this['microservice_info'] = microserviceInfo;
        return this;
    }
    public set microserviceInfo(microserviceInfo: MicroServiceCreate  | undefined) {
        this['microservice_info'] = microserviceInfo;
    }
    public get microserviceInfo(): MicroServiceCreate | undefined {
        return this['microservice_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcCreateBalanceStrategyEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum VpcCreateMemberTypeEnum {
    IP = 'ip',
    ECS = 'ecs'
}
