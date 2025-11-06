import { AlarmPeriod } from './AlarmPeriod';
import { DirectoryDTO } from './DirectoryDTO';


export class AlarmRulesItemsDetails {
    public name?: string;
    public id?: number;
    private 'node_id'?: number;
    private 'remind_type'?: number;
    private 'topic_name'?: string;
    public urn?: string;
    private 'notify_type'?: number;
    private 'display_number'?: string;
    private 'callee_number'?: string;
    private 'complete_time'?: string;
    private 'create_time'?: number;
    private 'use_flag'?: number;
    private 'create_user'?: string;
    private 'rule_name'?: string;
    private 'alarm_periods'?: Array<AlarmPeriod>;
    private 'job_directory'?: Array<DirectoryDTO>;
    private 'node_id_list'?: Array<number>;
    private 'node_name_list'?: Array<string>;
    private 'add_mode'?: string;
    private 'subject_type'?: string;
    private 'notify_method'?: string;
    public protocol?: string;
    private 'other_persons'?: string;
    private 'max_send_times'?: number;
    private 'send_interval'?: number;
    private 'duty_schedule_id'?: number;
    private 'smn_config_id'?: string;
    public constructor() { 
    }
    public withName(name: string): AlarmRulesItemsDetails {
        this['name'] = name;
        return this;
    }
    public withId(id: number): AlarmRulesItemsDetails {
        this['id'] = id;
        return this;
    }
    public withNodeId(nodeId: number): AlarmRulesItemsDetails {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: number  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): number | undefined {
        return this['node_id'];
    }
    public withRemindType(remindType: number): AlarmRulesItemsDetails {
        this['remind_type'] = remindType;
        return this;
    }
    public set remindType(remindType: number  | undefined) {
        this['remind_type'] = remindType;
    }
    public get remindType(): number | undefined {
        return this['remind_type'];
    }
    public withTopicName(topicName: string): AlarmRulesItemsDetails {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
    public withUrn(urn: string): AlarmRulesItemsDetails {
        this['urn'] = urn;
        return this;
    }
    public withNotifyType(notifyType: number): AlarmRulesItemsDetails {
        this['notify_type'] = notifyType;
        return this;
    }
    public set notifyType(notifyType: number  | undefined) {
        this['notify_type'] = notifyType;
    }
    public get notifyType(): number | undefined {
        return this['notify_type'];
    }
    public withDisplayNumber(displayNumber: string): AlarmRulesItemsDetails {
        this['display_number'] = displayNumber;
        return this;
    }
    public set displayNumber(displayNumber: string  | undefined) {
        this['display_number'] = displayNumber;
    }
    public get displayNumber(): string | undefined {
        return this['display_number'];
    }
    public withCalleeNumber(calleeNumber: string): AlarmRulesItemsDetails {
        this['callee_number'] = calleeNumber;
        return this;
    }
    public set calleeNumber(calleeNumber: string  | undefined) {
        this['callee_number'] = calleeNumber;
    }
    public get calleeNumber(): string | undefined {
        return this['callee_number'];
    }
    public withCompleteTime(completeTime: string): AlarmRulesItemsDetails {
        this['complete_time'] = completeTime;
        return this;
    }
    public set completeTime(completeTime: string  | undefined) {
        this['complete_time'] = completeTime;
    }
    public get completeTime(): string | undefined {
        return this['complete_time'];
    }
    public withCreateTime(createTime: number): AlarmRulesItemsDetails {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUseFlag(useFlag: number): AlarmRulesItemsDetails {
        this['use_flag'] = useFlag;
        return this;
    }
    public set useFlag(useFlag: number  | undefined) {
        this['use_flag'] = useFlag;
    }
    public get useFlag(): number | undefined {
        return this['use_flag'];
    }
    public withCreateUser(createUser: string): AlarmRulesItemsDetails {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withRuleName(ruleName: string): AlarmRulesItemsDetails {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withAlarmPeriods(alarmPeriods: Array<AlarmPeriod>): AlarmRulesItemsDetails {
        this['alarm_periods'] = alarmPeriods;
        return this;
    }
    public set alarmPeriods(alarmPeriods: Array<AlarmPeriod>  | undefined) {
        this['alarm_periods'] = alarmPeriods;
    }
    public get alarmPeriods(): Array<AlarmPeriod> | undefined {
        return this['alarm_periods'];
    }
    public withJobDirectory(jobDirectory: Array<DirectoryDTO>): AlarmRulesItemsDetails {
        this['job_directory'] = jobDirectory;
        return this;
    }
    public set jobDirectory(jobDirectory: Array<DirectoryDTO>  | undefined) {
        this['job_directory'] = jobDirectory;
    }
    public get jobDirectory(): Array<DirectoryDTO> | undefined {
        return this['job_directory'];
    }
    public withNodeIdList(nodeIdList: Array<number>): AlarmRulesItemsDetails {
        this['node_id_list'] = nodeIdList;
        return this;
    }
    public set nodeIdList(nodeIdList: Array<number>  | undefined) {
        this['node_id_list'] = nodeIdList;
    }
    public get nodeIdList(): Array<number> | undefined {
        return this['node_id_list'];
    }
    public withNodeNameList(nodeNameList: Array<string>): AlarmRulesItemsDetails {
        this['node_name_list'] = nodeNameList;
        return this;
    }
    public set nodeNameList(nodeNameList: Array<string>  | undefined) {
        this['node_name_list'] = nodeNameList;
    }
    public get nodeNameList(): Array<string> | undefined {
        return this['node_name_list'];
    }
    public withAddMode(addMode: string): AlarmRulesItemsDetails {
        this['add_mode'] = addMode;
        return this;
    }
    public set addMode(addMode: string  | undefined) {
        this['add_mode'] = addMode;
    }
    public get addMode(): string | undefined {
        return this['add_mode'];
    }
    public withSubjectType(subjectType: string): AlarmRulesItemsDetails {
        this['subject_type'] = subjectType;
        return this;
    }
    public set subjectType(subjectType: string  | undefined) {
        this['subject_type'] = subjectType;
    }
    public get subjectType(): string | undefined {
        return this['subject_type'];
    }
    public withNotifyMethod(notifyMethod: string): AlarmRulesItemsDetails {
        this['notify_method'] = notifyMethod;
        return this;
    }
    public set notifyMethod(notifyMethod: string  | undefined) {
        this['notify_method'] = notifyMethod;
    }
    public get notifyMethod(): string | undefined {
        return this['notify_method'];
    }
    public withProtocol(protocol: string): AlarmRulesItemsDetails {
        this['protocol'] = protocol;
        return this;
    }
    public withOtherPersons(otherPersons: string): AlarmRulesItemsDetails {
        this['other_persons'] = otherPersons;
        return this;
    }
    public set otherPersons(otherPersons: string  | undefined) {
        this['other_persons'] = otherPersons;
    }
    public get otherPersons(): string | undefined {
        return this['other_persons'];
    }
    public withMaxSendTimes(maxSendTimes: number): AlarmRulesItemsDetails {
        this['max_send_times'] = maxSendTimes;
        return this;
    }
    public set maxSendTimes(maxSendTimes: number  | undefined) {
        this['max_send_times'] = maxSendTimes;
    }
    public get maxSendTimes(): number | undefined {
        return this['max_send_times'];
    }
    public withSendInterval(sendInterval: number): AlarmRulesItemsDetails {
        this['send_interval'] = sendInterval;
        return this;
    }
    public set sendInterval(sendInterval: number  | undefined) {
        this['send_interval'] = sendInterval;
    }
    public get sendInterval(): number | undefined {
        return this['send_interval'];
    }
    public withDutyScheduleId(dutyScheduleId: number): AlarmRulesItemsDetails {
        this['duty_schedule_id'] = dutyScheduleId;
        return this;
    }
    public set dutyScheduleId(dutyScheduleId: number  | undefined) {
        this['duty_schedule_id'] = dutyScheduleId;
    }
    public get dutyScheduleId(): number | undefined {
        return this['duty_schedule_id'];
    }
    public withSmnConfigId(smnConfigId: string): AlarmRulesItemsDetails {
        this['smn_config_id'] = smnConfigId;
        return this;
    }
    public set smnConfigId(smnConfigId: string  | undefined) {
        this['smn_config_id'] = smnConfigId;
    }
    public get smnConfigId(): string | undefined {
        return this['smn_config_id'];
    }
}