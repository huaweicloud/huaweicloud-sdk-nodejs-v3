import { RuleAddressDtoForResponse } from './RuleAddressDtoForResponse';
import { RuleServiceDtoForResponse } from './RuleServiceDtoForResponse';
import { TagsVO } from './TagsVO';


export class RuleAclListResponseDTODataRecords {
    private 'rule_id'?: string;
    public applications?: Array<string>;
    private 'address_type'?: number;
    public name?: string;
    private 'order_id'?: number;
    public direction?: RuleAclListResponseDTODataRecordsDirectionEnum | number;
    private 'action_type'?: number;
    public status?: number;
    public description?: string;
    private 'long_connect_time'?: number;
    private 'long_connect_enable'?: number;
    private 'long_connect_time_hour'?: number;
    private 'long_connect_time_minute'?: number;
    private 'long_connect_time_second'?: number;
    public source?: RuleAddressDtoForResponse;
    public destination?: RuleAddressDtoForResponse;
    public service?: RuleServiceDtoForResponse;
    public type?: RuleAclListResponseDTODataRecordsTypeEnum | number;
    private 'created_date'?: string;
    private 'last_open_time'?: string;
    public tag?: TagsVO;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleAclListResponseDTODataRecords {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withApplications(applications: Array<string>): RuleAclListResponseDTODataRecords {
        this['applications'] = applications;
        return this;
    }
    public withAddressType(addressType: number): RuleAclListResponseDTODataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withName(name: string): RuleAclListResponseDTODataRecords {
        this['name'] = name;
        return this;
    }
    public withOrderId(orderId: number): RuleAclListResponseDTODataRecords {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: number  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): number | undefined {
        return this['order_id'];
    }
    public withDirection(direction: RuleAclListResponseDTODataRecordsDirectionEnum | number): RuleAclListResponseDTODataRecords {
        this['direction'] = direction;
        return this;
    }
    public withActionType(actionType: number): RuleAclListResponseDTODataRecords {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): number | undefined {
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
    public withLongConnectTime(longConnectTime: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number  | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime(): number | undefined {
        return this['long_connect_time'];
    }
    public withLongConnectEnable(longConnectEnable: number): RuleAclListResponseDTODataRecords {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: number  | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable(): number | undefined {
        return this['long_connect_enable'];
    }
    public withLongConnectTimeHour(longConnectTimeHour: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_hour'] = longConnectTimeHour;
        return this;
    }
    public set longConnectTimeHour(longConnectTimeHour: number  | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour(): number | undefined {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number  | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute(): number | undefined {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): RuleAclListResponseDTODataRecords {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number  | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond(): number | undefined {
        return this['long_connect_time_second'];
    }
    public withSource(source: RuleAddressDtoForResponse): RuleAclListResponseDTODataRecords {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: RuleAddressDtoForResponse): RuleAclListResponseDTODataRecords {
        this['destination'] = destination;
        return this;
    }
    public withService(service: RuleServiceDtoForResponse): RuleAclListResponseDTODataRecords {
        this['service'] = service;
        return this;
    }
    public withType(type: RuleAclListResponseDTODataRecordsTypeEnum | number): RuleAclListResponseDTODataRecords {
        this['type'] = type;
        return this;
    }
    public withCreatedDate(createdDate: string): RuleAclListResponseDTODataRecords {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withLastOpenTime(lastOpenTime: string): RuleAclListResponseDTODataRecords {
        this['last_open_time'] = lastOpenTime;
        return this;
    }
    public set lastOpenTime(lastOpenTime: string  | undefined) {
        this['last_open_time'] = lastOpenTime;
    }
    public get lastOpenTime(): string | undefined {
        return this['last_open_time'];
    }
    public withTag(tag: TagsVO): RuleAclListResponseDTODataRecords {
        this['tag'] = tag;
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
/**
    * @export
    * @enum {string}
    */
export enum RuleAclListResponseDTODataRecordsTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
