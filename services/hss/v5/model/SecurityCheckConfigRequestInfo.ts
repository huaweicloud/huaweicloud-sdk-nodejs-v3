

export class SecurityCheckConfigRequestInfo {
    private 'task_id'?: number;
    public status?: boolean;
    private 'check_period_type'?: SecurityCheckConfigRequestInfoCheckPeriodTypeEnum | string;
    private 'day_period'?: number;
    private 'week_period'?: Array<string>;
    public hour?: number;
    public content?: Array<string>;
    private 'host_id_list'?: Array<string>;
    private 'operate_all'?: boolean;
    public constructor() { 
    }
    public withTaskId(taskId: number): SecurityCheckConfigRequestInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withStatus(status: boolean): SecurityCheckConfigRequestInfo {
        this['status'] = status;
        return this;
    }
    public withCheckPeriodType(checkPeriodType: SecurityCheckConfigRequestInfoCheckPeriodTypeEnum | string): SecurityCheckConfigRequestInfo {
        this['check_period_type'] = checkPeriodType;
        return this;
    }
    public set checkPeriodType(checkPeriodType: SecurityCheckConfigRequestInfoCheckPeriodTypeEnum | string  | undefined) {
        this['check_period_type'] = checkPeriodType;
    }
    public get checkPeriodType(): SecurityCheckConfigRequestInfoCheckPeriodTypeEnum | string | undefined {
        return this['check_period_type'];
    }
    public withDayPeriod(dayPeriod: number): SecurityCheckConfigRequestInfo {
        this['day_period'] = dayPeriod;
        return this;
    }
    public set dayPeriod(dayPeriod: number  | undefined) {
        this['day_period'] = dayPeriod;
    }
    public get dayPeriod(): number | undefined {
        return this['day_period'];
    }
    public withWeekPeriod(weekPeriod: Array<string>): SecurityCheckConfigRequestInfo {
        this['week_period'] = weekPeriod;
        return this;
    }
    public set weekPeriod(weekPeriod: Array<string>  | undefined) {
        this['week_period'] = weekPeriod;
    }
    public get weekPeriod(): Array<string> | undefined {
        return this['week_period'];
    }
    public withHour(hour: number): SecurityCheckConfigRequestInfo {
        this['hour'] = hour;
        return this;
    }
    public withContent(content: Array<string>): SecurityCheckConfigRequestInfo {
        this['content'] = content;
        return this;
    }
    public withHostIdList(hostIdList: Array<string>): SecurityCheckConfigRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withOperateAll(operateAll: boolean): SecurityCheckConfigRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SecurityCheckConfigRequestInfoCheckPeriodTypeEnum {
    DAY = 'day',
    WEEK = 'week'
}
