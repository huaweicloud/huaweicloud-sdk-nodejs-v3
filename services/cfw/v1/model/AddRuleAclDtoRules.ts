import { OrderRuleAclDto } from './OrderRuleAclDto';
import { RuleAddressDtoForRequest } from './RuleAddressDtoForRequest';
import { RuleProfileDto } from './RuleProfileDto';
import { RuleServiceDto } from './RuleServiceDto';
import { TagsVO } from './TagsVO';


export class AddRuleAclDtoRules {
    public name?: string;
    public sequence?: OrderRuleAclDto;
    private 'address_type'?: AddRuleAclDtoRulesAddressTypeEnum | number;
    private 'action_type'?: number;
    public status?: AddRuleAclDtoRulesStatusEnum | number;
    public applications?: Array<string>;
    public applicationsJsonString?: string;
    private 'long_connect_time'?: number;
    private 'long_connect_time_hour'?: number;
    private 'long_connect_time_minute'?: number;
    private 'long_connect_time_second'?: number;
    private 'long_connect_enable'?: AddRuleAclDtoRulesLongConnectEnableEnum | number;
    public description?: string;
    public direction?: AddRuleAclDtoRulesDirectionEnum | number;
    public profile?: RuleProfileDto;
    public source?: RuleAddressDtoForRequest;
    public destination?: RuleAddressDtoForRequest;
    public service?: RuleServiceDto;
    public tag?: TagsVO;
    public constructor(name?: string, sequence?: OrderRuleAclDto, addressType?: number, actionType?: number, status?: number, longConnectEnable?: number, source?: RuleAddressDtoForRequest, destination?: RuleAddressDtoForRequest, service?: RuleServiceDto) { 
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
    public withAddressType(addressType: AddRuleAclDtoRulesAddressTypeEnum | number): AddRuleAclDtoRules {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: AddRuleAclDtoRulesAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): AddRuleAclDtoRulesAddressTypeEnum | number | undefined {
        return this['address_type'];
    }
    public withActionType(actionType: number): AddRuleAclDtoRules {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): number | undefined {
        return this['action_type'];
    }
    public withStatus(status: AddRuleAclDtoRulesStatusEnum | number): AddRuleAclDtoRules {
        this['status'] = status;
        return this;
    }
    public withApplications(applications: Array<string>): AddRuleAclDtoRules {
        this['applications'] = applications;
        return this;
    }
    public withApplicationsJsonString(applicationsJsonString: string): AddRuleAclDtoRules {
        this['applicationsJsonString'] = applicationsJsonString;
        return this;
    }
    public withLongConnectTime(longConnectTime: number): AddRuleAclDtoRules {
        this['long_connect_time'] = longConnectTime;
        return this;
    }
    public set longConnectTime(longConnectTime: number  | undefined) {
        this['long_connect_time'] = longConnectTime;
    }
    public get longConnectTime(): number | undefined {
        return this['long_connect_time'];
    }
    public withLongConnectTimeHour(longConnectTimeHour: number): AddRuleAclDtoRules {
        this['long_connect_time_hour'] = longConnectTimeHour;
        return this;
    }
    public set longConnectTimeHour(longConnectTimeHour: number  | undefined) {
        this['long_connect_time_hour'] = longConnectTimeHour;
    }
    public get longConnectTimeHour(): number | undefined {
        return this['long_connect_time_hour'];
    }
    public withLongConnectTimeMinute(longConnectTimeMinute: number): AddRuleAclDtoRules {
        this['long_connect_time_minute'] = longConnectTimeMinute;
        return this;
    }
    public set longConnectTimeMinute(longConnectTimeMinute: number  | undefined) {
        this['long_connect_time_minute'] = longConnectTimeMinute;
    }
    public get longConnectTimeMinute(): number | undefined {
        return this['long_connect_time_minute'];
    }
    public withLongConnectTimeSecond(longConnectTimeSecond: number): AddRuleAclDtoRules {
        this['long_connect_time_second'] = longConnectTimeSecond;
        return this;
    }
    public set longConnectTimeSecond(longConnectTimeSecond: number  | undefined) {
        this['long_connect_time_second'] = longConnectTimeSecond;
    }
    public get longConnectTimeSecond(): number | undefined {
        return this['long_connect_time_second'];
    }
    public withLongConnectEnable(longConnectEnable: AddRuleAclDtoRulesLongConnectEnableEnum | number): AddRuleAclDtoRules {
        this['long_connect_enable'] = longConnectEnable;
        return this;
    }
    public set longConnectEnable(longConnectEnable: AddRuleAclDtoRulesLongConnectEnableEnum | number  | undefined) {
        this['long_connect_enable'] = longConnectEnable;
    }
    public get longConnectEnable(): AddRuleAclDtoRulesLongConnectEnableEnum | number | undefined {
        return this['long_connect_enable'];
    }
    public withDescription(description: string): AddRuleAclDtoRules {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: AddRuleAclDtoRulesDirectionEnum | number): AddRuleAclDtoRules {
        this['direction'] = direction;
        return this;
    }
    public withProfile(profile: RuleProfileDto): AddRuleAclDtoRules {
        this['profile'] = profile;
        return this;
    }
    public withSource(source: RuleAddressDtoForRequest): AddRuleAclDtoRules {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: RuleAddressDtoForRequest): AddRuleAclDtoRules {
        this['destination'] = destination;
        return this;
    }
    public withService(service: RuleServiceDto): AddRuleAclDtoRules {
        this['service'] = service;
        return this;
    }
    public withTag(tag: TagsVO): AddRuleAclDtoRules {
        this['tag'] = tag;
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
