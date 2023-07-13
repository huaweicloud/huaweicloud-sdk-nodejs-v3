import { OrderRuleAclDto } from './OrderRuleAclDto';
import { RuleAddressDto } from './RuleAddressDto';
import { RuleServiceDto } from './RuleServiceDto';


export class AddRuleAclDtoRules {
    public name: string;
    public sequence: OrderRuleAclDto;
    private 'address_type': AddRuleAclDtoRulesAddressTypeEnum | undefined;
    private 'action_type': number | undefined;
    public status: AddRuleAclDtoRulesStatusEnum;
    private 'long_connect_time'?: number | undefined;
    private 'long_connect_time_hour'?: number | undefined;
    private 'long_connect_time_minute'?: number | undefined;
    private 'long_connect_time_second'?: number | undefined;
    private 'long_connect_enable': AddRuleAclDtoRulesLongConnectEnableEnum | undefined;
    public description?: string;
    public direction?: AddRuleAclDtoRulesDirectionEnum;
    public source: RuleAddressDto;
    public destination: RuleAddressDto;
    public service: RuleServiceDto;
    public constructor(name?: any, sequence?: any, addressType?: any, actionType?: any, status?: any, longConnectEnable?: any, source?: any, destination?: any, service?: any) { 
        this['name'] = name;
        this['sequence'] = sequence;
        this['address_type'] = addressType;
        this['action_type'] = actionType;
        this['status'] = status;
        this['long_connect_enable'] = longConnectEnable;
        this['source'] = source;
        this['destination'] = destination;
        this['service'] = service;
    }
    public withName(name: string): AddRuleAclDtoRules {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: OrderRuleAclDto): AddRuleAclDtoRules {
        this['sequence'] = sequence;
        return this;
    }
    public withAddressType(addressType: AddRuleAclDtoRulesAddressTypeEnum): AddRuleAclDtoRules {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: AddRuleAclDtoRulesAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withActionType(actionType: number): AddRuleAclDtoRules {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: number | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType() {
        return this['action_type'];
    }
    public withStatus(status: AddRuleAclDtoRulesStatusEnum): AddRuleAclDtoRules {
        this['status'] = status;
        return this;
    }
    public withLongConnectTime(longConnectTime: number): AddRuleAclDtoRules {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime() {
        return this['long_connect_time'];
    }
    public withLongConnectTimeHour(longConnectTimeHour: number): AddRuleAclDtoRules {
        this['long_connect_time_hour'] = longConnectTimeHour;
        return this;
    }
    public set longConnectTimeHour(longConnectTimeHour: number | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour() {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): AddRuleAclDtoRules {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute() {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): AddRuleAclDtoRules {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond() {
        return this['long_connect_time_second'];
    }
    public withLongConnectEnable(longConnectEnable: AddRuleAclDtoRulesLongConnectEnableEnum): AddRuleAclDtoRules {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: AddRuleAclDtoRulesLongConnectEnableEnum | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable() {
        return this['long_connect_enable'];
    }
    public withDescription(description: string): AddRuleAclDtoRules {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: AddRuleAclDtoRulesDirectionEnum): AddRuleAclDtoRules {
        this['direction'] = direction;
        return this;
    }
    public withSource(source: RuleAddressDto): AddRuleAclDtoRules {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: RuleAddressDto): AddRuleAclDtoRules {
        this['destination'] = destination;
        return this;
    }
    public withService(service: RuleServiceDto): AddRuleAclDtoRules {
        this['service'] = service;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddRuleAclDtoRulesAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum AddRuleAclDtoRulesStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddRuleAclDtoRulesLongConnectEnableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AddRuleAclDtoRulesDirectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
