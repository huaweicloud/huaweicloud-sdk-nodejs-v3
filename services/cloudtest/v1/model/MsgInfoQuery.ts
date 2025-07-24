

export class MsgInfoQuery {
    private 'alert_types'?: Array<MsgInfoQueryAlertTypesEnum> | Array<string>;
    private 'case_id'?: string;
    private 'case_name'?: string;
    private 'end_time'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'send_alert_type'?: MsgInfoQuerySendAlertTypeEnum | string;
    private 'start_time'?: number;
    private 'task_id'?: string;
    private 'task_name'?: string;
    public constructor() { 
    }
    public withAlertTypes(alertTypes: Array<MsgInfoQueryAlertTypesEnum> | Array<string>): MsgInfoQuery {
        this['alert_types'] = alertTypes;
        return this;
    }
    public set alertTypes(alertTypes: Array<MsgInfoQueryAlertTypesEnum> | Array<string>  | undefined) {
        this['alert_types'] = alertTypes;
    }
    public get alertTypes(): Array<MsgInfoQueryAlertTypesEnum> | Array<string> | undefined {
        return this['alert_types'];
    }
    public withCaseId(caseId: string): MsgInfoQuery {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withCaseName(caseName: string): MsgInfoQuery {
        this['case_name'] = caseName;
        return this;
    }
    public set caseName(caseName: string  | undefined) {
        this['case_name'] = caseName;
    }
    public get caseName(): string | undefined {
        return this['case_name'];
    }
    public withEndTime(endTime: number): MsgInfoQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageNum(pageNum: number): MsgInfoQuery {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): MsgInfoQuery {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSendAlertType(sendAlertType: MsgInfoQuerySendAlertTypeEnum | string): MsgInfoQuery {
        this['send_alert_type'] = sendAlertType;
        return this;
    }
    public set sendAlertType(sendAlertType: MsgInfoQuerySendAlertTypeEnum | string  | undefined) {
        this['send_alert_type'] = sendAlertType;
    }
    public get sendAlertType(): MsgInfoQuerySendAlertTypeEnum | string | undefined {
        return this['send_alert_type'];
    }
    public withStartTime(startTime: number): MsgInfoQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskId(taskId: string): MsgInfoQuery {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): MsgInfoQuery {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MsgInfoQueryAlertTypesEnum {
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
export enum MsgInfoQuerySendAlertTypeEnum {
    LEVEL_ALERT = 'LEVEL_ALERT',
    OPERATION_NOTICE = 'OPERATION_NOTICE',
    RECOVER_ALERT = 'RECOVER_ALERT',
    RESTRAINING = 'RESTRAINING',
    RESTRAIN_ALERT = 'RESTRAIN_ALERT'
}
