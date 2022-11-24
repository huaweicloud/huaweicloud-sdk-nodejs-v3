import { OrderRuleAclDto } from './OrderRuleAclDto';
import { RuleAddressDto } from './RuleAddressDto';
import { RuleServiceDto } from './RuleServiceDto';


export class UpdateRuleAclDto {
    private 'address_type'?: UpdateRuleAclDtoAddressTypeEnum | undefined;
    public name?: string;
    public sequence?: OrderRuleAclDto;
    public direction?: UpdateRuleAclDtoDirectionEnum;
    private 'action_type'?: UpdateRuleAclDtoActionTypeEnum | undefined;
    public status?: number;
    public description?: string;
    private 'long_connect_time_hour'?: number | undefined;
    private 'long_connect_time_minute'?: number | undefined;
    private 'long_connect_time_second'?: number | undefined;
    private 'long_connect_time'?: number | undefined;
    private 'long_connect_enable'?: UpdateRuleAclDtoLongConnectEnableEnum | undefined;
    public source?: RuleAddressDto;
    public destination?: RuleAddressDto;
    public service?: RuleServiceDto;
    public constructor() { 
    }
    public withAddressType(addressType: UpdateRuleAclDtoAddressTypeEnum): UpdateRuleAclDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: UpdateRuleAclDtoAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withName(name: string): UpdateRuleAclDto {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: OrderRuleAclDto): UpdateRuleAclDto {
        this['sequence'] = sequence;
        return this;
    }
    public withDirection(direction: UpdateRuleAclDtoDirectionEnum): UpdateRuleAclDto {
        this['direction'] = direction;
        return this;
    }
    public withActionType(actionType: UpdateRuleAclDtoActionTypeEnum): UpdateRuleAclDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: UpdateRuleAclDtoActionTypeEnum | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType() {
        return this['action_type'];
    }
    public withStatus(status: number): UpdateRuleAclDto {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UpdateRuleAclDto {
        this['description'] = description;
        return this;
    }
    public withLongConnectTimeHour(longConnectTimeHour: number): UpdateRuleAclDto {
        this['long_connect_time_hour'] = longConnectTimeHour;
        return this;
    }
    public set longConnectTimeHour(longConnectTimeHour: number | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour() {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): UpdateRuleAclDto {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute() {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): UpdateRuleAclDto {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond() {
        return this['long_connect_time_second'];
    }
    public withLongConnectTime(longConnectTime: number): UpdateRuleAclDto {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime() {
        return this['long_connect_time'];
    }
    public withLongConnectEnable(longConnectEnable: UpdateRuleAclDtoLongConnectEnableEnum): UpdateRuleAclDto {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: UpdateRuleAclDtoLongConnectEnableEnum | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable() {
        return this['long_connect_enable'];
    }
    public withSource(source: RuleAddressDto): UpdateRuleAclDto {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: RuleAddressDto): UpdateRuleAclDto {
        this['destination'] = destination;
        return this;
    }
    public withService(service: RuleServiceDto): UpdateRuleAclDto {
        this['service'] = service;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRuleAclDtoAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRuleAclDtoDirectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRuleAclDtoActionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRuleAclDtoLongConnectEnableEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
