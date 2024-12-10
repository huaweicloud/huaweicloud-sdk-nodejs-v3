

export class VpcBase {
    public name?: string;
    public port?: number;
    private 'balance_strategy'?: VpcBaseBalanceStrategyEnum | number;
    private 'member_type'?: VpcBaseMemberTypeEnum | string;
    public type?: number;
    private 'vpc_channel_type'?: VpcBaseVpcChannelTypeEnum | string;
    private 'dict_code'?: string;
    public constructor(name?: string, port?: number, balanceStrategy?: number, memberType?: string) { 
        this['name'] = name;
        this['port'] = port;
        this['balance_strategy'] = balanceStrategy;
        this['member_type'] = memberType;
    }
    public withName(name: string): VpcBase {
        this['name'] = name;
        return this;
    }
    public withPort(port: number): VpcBase {
        this['port'] = port;
        return this;
    }
    public withBalanceStrategy(balanceStrategy: VpcBaseBalanceStrategyEnum | number): VpcBase {
        this['balance_strategy'] = balanceStrategy;
        return this;
    }
    public set balanceStrategy(balanceStrategy: VpcBaseBalanceStrategyEnum | number  | undefined) {
        this['balance_strategy'] = balanceStrategy;
    }
    public get balanceStrategy(): VpcBaseBalanceStrategyEnum | number | undefined {
        return this['balance_strategy'];
    }
    public withMemberType(memberType: VpcBaseMemberTypeEnum | string): VpcBase {
        this['member_type'] = memberType;
        return this;
    }
    public set memberType(memberType: VpcBaseMemberTypeEnum | string  | undefined) {
        this['member_type'] = memberType;
    }
    public get memberType(): VpcBaseMemberTypeEnum | string | undefined {
        return this['member_type'];
    }
    public withType(type: number): VpcBase {
        this['type'] = type;
        return this;
    }
    public withVpcChannelType(vpcChannelType: VpcBaseVpcChannelTypeEnum | string): VpcBase {
        this['vpc_channel_type'] = vpcChannelType;
        return this;
    }
    public set vpcChannelType(vpcChannelType: VpcBaseVpcChannelTypeEnum | string  | undefined) {
        this['vpc_channel_type'] = vpcChannelType;
    }
    public get vpcChannelType(): VpcBaseVpcChannelTypeEnum | string | undefined {
        return this['vpc_channel_type'];
    }
    public withDictCode(dictCode: string): VpcBase {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcBaseBalanceStrategyEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export enum VpcBaseMemberTypeEnum {
    IP = 'ip',
    ECS = 'ecs'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcBaseVpcChannelTypeEnum {
    BUILTIN = 'builtin',
    MICROSERVICE = 'microservice',
    REFERENCE = 'reference'
}
