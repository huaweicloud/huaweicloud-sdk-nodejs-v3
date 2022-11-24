import { OrderRuleAclDto } from './OrderRuleAclDto';
import { RuleAddressDto } from './RuleAddressDto';
import { RuleServiceDto } from './RuleServiceDto';


export class RuleAclListResponseDTODataRecords {
    private 'rule_id'?: string | undefined;
    private 'address_type'?: number | undefined;
    public name?: string;
    public sequence?: OrderRuleAclDto;
    public direction?: RuleAclListResponseDTODataRecordsDirectionEnum;
    private 'action_type'?: number | undefined;
    public status?: number;
    public description?: string;
    private 'long_connect_time_hour'?: number | undefined;
    private 'long_connect_time_minute'?: number | undefined;
    private 'long_connect_time_second'?: number | undefined;
    private 'long_connect_time'?: number | undefined;
    private 'long_connect_enable'?: number | undefined;
    public source?: RuleAddressDto;
    public destination?: RuleAddressDto;
    public service?: RuleServiceDto;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleAclListResponseDTODataRecords {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withAddressType(addressType: number): RuleAclListResponseDTODataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
    public withName(name: string): RuleAclListResponseDTODataRecords {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: OrderRuleAclDto): RuleAclListResponseDTODataRecords {
        this['sequence'] = sequence;
        return this;
    }
    public withDirection(direction: RuleAclListResponseDTODataRecordsDirectionEnum): RuleAclListResponseDTODataRecords {
        this['direction'] = direction;
        return this;
    }
    public withActionType(actionType: number): RuleAclListResponseDTODataRecords {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: number | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType() {
        return this['action_type'];
    }
    public withStatus(status: number): RuleAclListResponseDTODataRecords {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): RuleAclListResponseDTODataRecords {
        this['description'] = description;
        return this;
    }
    public withLongConnectTimeHour(longConnectTimeHour: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_hour'] = longConnectTimeHour;
        return this;
    }
    public set longConnectTimeHour(longConnectTimeHour: number | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour() {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute() {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond() {
        return this['long_connect_time_second'];
    }
    public withLongConnectTime(longConnectTime: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime() {
        return this['long_connect_time'];
    }
    public withLongConnectEnable(longConnectEnable: number): RuleAclListResponseDTODataRecords {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: number | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable() {
        return this['long_connect_enable'];
    }
    public withSource(source: RuleAddressDto): RuleAclListResponseDTODataRecords {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: RuleAddressDto): RuleAclListResponseDTODataRecords {
        this['destination'] = destination;
        return this;
    }
    public withService(service: RuleServiceDto): RuleAclListResponseDTODataRecords {
        this['service'] = service;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuleAclListResponseDTODataRecordsDirectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
