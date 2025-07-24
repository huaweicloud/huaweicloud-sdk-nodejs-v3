

export class MsgInfoVo {
    private 'alert_channels'?: string;
    private 'alert_groups'?: string;
    private 'alert_level'?: number;
    private 'alert_num'?: number;
    private 'alert_time'?: Date;
    private 'alert_type'?: MsgInfoVoAlertTypeEnum | string;
    public content?: string;
    public id?: string;
    public link?: string;
    private 'location_names'?: string;
    private 'send_alert_type'?: MsgInfoVoSendAlertTypeEnum | string;
    private 'sub_task_case_id'?: string;
    private 'sub_task_case_start_time'?: Date;
    private 'sub_task_id'?: string;
    private 'sub_task_start_time'?: Date;
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'test_case_id'?: string;
    private 'test_case_name'?: string;
    private 'test_suite_type'?: number;
    public constructor() { 
    }
    public withAlertChannels(alertChannels: string): MsgInfoVo {
        this['alert_channels'] = alertChannels;
        return this;
    }
    public set alertChannels(alertChannels: string  | undefined) {
        this['alert_channels'] = alertChannels;
    }
    public get alertChannels(): string | undefined {
        return this['alert_channels'];
    }
    public withAlertGroups(alertGroups: string): MsgInfoVo {
        this['alert_groups'] = alertGroups;
        return this;
    }
    public set alertGroups(alertGroups: string  | undefined) {
        this['alert_groups'] = alertGroups;
    }
    public get alertGroups(): string | undefined {
        return this['alert_groups'];
    }
    public withAlertLevel(alertLevel: number): MsgInfoVo {
        this['alert_level'] = alertLevel;
        return this;
    }
    public set alertLevel(alertLevel: number  | undefined) {
        this['alert_level'] = alertLevel;
    }
    public get alertLevel(): number | undefined {
        return this['alert_level'];
    }
    public withAlertNum(alertNum: number): MsgInfoVo {
        this['alert_num'] = alertNum;
        return this;
    }
    public set alertNum(alertNum: number  | undefined) {
        this['alert_num'] = alertNum;
    }
    public get alertNum(): number | undefined {
        return this['alert_num'];
    }
    public withAlertTime(alertTime: Date): MsgInfoVo {
        this['alert_time'] = alertTime;
        return this;
    }
    public set alertTime(alertTime: Date  | undefined) {
        this['alert_time'] = alertTime;
    }
    public get alertTime(): Date | undefined {
        return this['alert_time'];
    }
    public withAlertType(alertType: MsgInfoVoAlertTypeEnum | string): MsgInfoVo {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: MsgInfoVoAlertTypeEnum | string  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): MsgInfoVoAlertTypeEnum | string | undefined {
        return this['alert_type'];
    }
    public withContent(content: string): MsgInfoVo {
        this['content'] = content;
        return this;
    }
    public withId(id: string): MsgInfoVo {
        this['id'] = id;
        return this;
    }
    public withLink(link: string): MsgInfoVo {
        this['link'] = link;
        return this;
    }
    public withLocationNames(locationNames: string): MsgInfoVo {
        this['location_names'] = locationNames;
        return this;
    }
    public set locationNames(locationNames: string  | undefined) {
        this['location_names'] = locationNames;
    }
    public get locationNames(): string | undefined {
        return this['location_names'];
    }
    public withSendAlertType(sendAlertType: MsgInfoVoSendAlertTypeEnum | string): MsgInfoVo {
        this['send_alert_type'] = sendAlertType;
        return this;
    }
    public set sendAlertType(sendAlertType: MsgInfoVoSendAlertTypeEnum | string  | undefined) {
        this['send_alert_type'] = sendAlertType;
    }
    public get sendAlertType(): MsgInfoVoSendAlertTypeEnum | string | undefined {
        return this['send_alert_type'];
    }
    public withSubTaskCaseId(subTaskCaseId: string): MsgInfoVo {
        this['sub_task_case_id'] = subTaskCaseId;
        return this;
    }
    public set subTaskCaseId(subTaskCaseId: string  | undefined) {
        this['sub_task_case_id'] = subTaskCaseId;
    }
    public get subTaskCaseId(): string | undefined {
        return this['sub_task_case_id'];
    }
    public withSubTaskCaseStartTime(subTaskCaseStartTime: Date): MsgInfoVo {
        this['sub_task_case_start_time'] = subTaskCaseStartTime;
        return this;
    }
    public set subTaskCaseStartTime(subTaskCaseStartTime: Date  | undefined) {
        this['sub_task_case_start_time'] = subTaskCaseStartTime;
    }
    public get subTaskCaseStartTime(): Date | undefined {
        return this['sub_task_case_start_time'];
    }
    public withSubTaskId(subTaskId: string): MsgInfoVo {
        this['sub_task_id'] = subTaskId;
        return this;
    }
    public set subTaskId(subTaskId: string  | undefined) {
        this['sub_task_id'] = subTaskId;
    }
    public get subTaskId(): string | undefined {
        return this['sub_task_id'];
    }
    public withSubTaskStartTime(subTaskStartTime: Date): MsgInfoVo {
        this['sub_task_start_time'] = subTaskStartTime;
        return this;
    }
    public set subTaskStartTime(subTaskStartTime: Date  | undefined) {
        this['sub_task_start_time'] = subTaskStartTime;
    }
    public get subTaskStartTime(): Date | undefined {
        return this['sub_task_start_time'];
    }
    public withTaskId(taskId: string): MsgInfoVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): MsgInfoVo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTestCaseId(testCaseId: string): MsgInfoVo {
        this['test_case_id'] = testCaseId;
        return this;
    }
    public set testCaseId(testCaseId: string  | undefined) {
        this['test_case_id'] = testCaseId;
    }
    public get testCaseId(): string | undefined {
        return this['test_case_id'];
    }
    public withTestCaseName(testCaseName: string): MsgInfoVo {
        this['test_case_name'] = testCaseName;
        return this;
    }
    public set testCaseName(testCaseName: string  | undefined) {
        this['test_case_name'] = testCaseName;
    }
    public get testCaseName(): string | undefined {
        return this['test_case_name'];
    }
    public withTestSuiteType(testSuiteType: number): MsgInfoVo {
        this['test_suite_type'] = testSuiteType;
        return this;
    }
    public set testSuiteType(testSuiteType: number  | undefined) {
        this['test_suite_type'] = testSuiteType;
    }
    public get testSuiteType(): number | undefined {
        return this['test_suite_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MsgInfoVoAlertTypeEnum {
    E_1 = '1',
    E_10 = '10',
    E_11 = '11',
    E_12 = '12',
    E_14 = '14',
    E_16 = '16',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5',
    E_6 = '6',
    E_7 = '7',
    E_9 = '9'
}
/**
    * @export
    * @enum {string}
    */
export enum MsgInfoVoSendAlertTypeEnum {
    LEVEL_ALERT = 'LEVEL_ALERT',
    OPERATION_NOTICE = 'OPERATION_NOTICE',
    RECOVER_ALERT = 'RECOVER_ALERT',
    RESTRAINING = 'RESTRAINING',
    RESTRAIN_ALERT = 'RESTRAIN_ALERT'
}
