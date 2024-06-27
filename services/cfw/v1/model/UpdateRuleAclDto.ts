import { OrderRuleAclDto } from './OrderRuleAclDto';
import { RuleAddressDto } from './RuleAddressDto';
import { RuleServiceDto } from './RuleServiceDto';
import { TagsVO } from './TagsVO';


export class UpdateRuleAclDto {
    private 'address_type'?: UpdateRuleAclDtoAddressTypeEnum | number;
    public name?: string;
    public sequence?: OrderRuleAclDto;
    public direction?: UpdateRuleAclDtoDirectionEnum | number;
    private 'action_type'?: UpdateRuleAclDtoActionTypeEnum | number;
    public status?: number;
    public applications?: Array<string>;
    public applicationsJsonString?: string;
    public description?: string;
    private 'long_connect_time_hour'?: number;
    private 'long_connect_time_minute'?: number;
    private 'long_connect_time_second'?: number;
    private 'long_connect_time'?: number;
    private 'long_connect_enable'?: UpdateRuleAclDtoLongConnectEnableEnum | number;
    public source?: RuleAddressDto;
    public destination?: RuleAddressDto;
    public service?: RuleServiceDto;
    public type?: UpdateRuleAclDtoTypeEnum | number;
    public tag?: TagsVO;
    public constructor() { 
    }
    public withAddressType(addressType: UpdateRuleAclDtoAddressTypeEnum | number): UpdateRuleAclDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: UpdateRuleAclDtoAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): UpdateRuleAclDtoAddressTypeEnum | number | undefined {
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
    public withDirection(direction: UpdateRuleAclDtoDirectionEnum | number): UpdateRuleAclDto {
        this['direction'] = direction;
        return this;
    }
    public withActionType(actionType: UpdateRuleAclDtoActionTypeEnum | number): UpdateRuleAclDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: UpdateRuleAclDtoActionTypeEnum | number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): UpdateRuleAclDtoActionTypeEnum | number | undefined {
        return this['action_type'];
    }
    public withStatus(status: number): UpdateRuleAclDto {
        this['status'] = status;
        return this;
    }
    public withApplications(applications: Array<string>): UpdateRuleAclDto {
        this['applications'] = applications;
        return this;
    }
    public withApplicationsJsonString(applicationsJsonString: string): UpdateRuleAclDto {
        this['applicationsJsonString'] = applicationsJsonString;
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
    public set longConnectTimeHour(longConnectTimeHour: number  | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour(): number | undefined {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): UpdateRuleAclDto {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number  | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute(): number | undefined {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): UpdateRuleAclDto {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number  | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond(): number | undefined {
        return this['long_connect_time_second'];
    }
    public withLongConnectTime(longConnectTime: number): UpdateRuleAclDto {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number  | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime(): number | undefined {
        return this['long_connect_time'];
    }
    public withLongConnectEnable(longConnectEnable: UpdateRuleAclDtoLongConnectEnableEnum | number): UpdateRuleAclDto {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: UpdateRuleAclDtoLongConnectEnableEnum | number  | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable(): UpdateRuleAclDtoLongConnectEnableEnum | number | undefined {
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
    public withType(type: UpdateRuleAclDtoTypeEnum | number): UpdateRuleAclDto {
        this['type'] = type;
        return this;
    }
    public withTag(tag: TagsVO): UpdateRuleAclDto {
        this['tag'] = tag;
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
/**
    * @export
    * @enum {string}
    */
export enum UpdateRuleAclDtoTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
