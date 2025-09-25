
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityCheckConfigResponse extends SdkResponse {
    private 'task_id'?: number;
    public status?: boolean;
    private 'check_period_type'?: ShowSecurityCheckConfigResponseCheckPeriodTypeEnum | string;
    private 'day_period'?: number;
    private 'week_period'?: Array<string>;
    public hour?: number;
    public content?: Array<string>;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: number): ShowSecurityCheckConfigResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withStatus(status: boolean): ShowSecurityCheckConfigResponse {
        this['status'] = status;
        return this;
    }
    public withCheckPeriodType(checkPeriodType: ShowSecurityCheckConfigResponseCheckPeriodTypeEnum | string): ShowSecurityCheckConfigResponse {
        this['check_period_type'] = checkPeriodType;
        return this;
    }
    public set checkPeriodType(checkPeriodType: ShowSecurityCheckConfigResponseCheckPeriodTypeEnum | string  | undefined) {
        this['check_period_type'] = checkPeriodType;
    }
    public get checkPeriodType(): ShowSecurityCheckConfigResponseCheckPeriodTypeEnum | string | undefined {
        return this['check_period_type'];
    }
    public withDayPeriod(dayPeriod: number): ShowSecurityCheckConfigResponse {
        this['day_period'] = dayPeriod;
        return this;
    }
    public set dayPeriod(dayPeriod: number  | undefined) {
        this['day_period'] = dayPeriod;
    }
    public get dayPeriod(): number | undefined {
        return this['day_period'];
    }
    public withWeekPeriod(weekPeriod: Array<string>): ShowSecurityCheckConfigResponse {
        this['week_period'] = weekPeriod;
        return this;
    }
    public set weekPeriod(weekPeriod: Array<string>  | undefined) {
        this['week_period'] = weekPeriod;
    }
    public get weekPeriod(): Array<string> | undefined {
        return this['week_period'];
    }
    public withHour(hour: number): ShowSecurityCheckConfigResponse {
        this['hour'] = hour;
        return this;
    }
    public withContent(content: Array<string>): ShowSecurityCheckConfigResponse {
        this['content'] = content;
        return this;
    }
    public withHostIdList(hostIdList: Array<string>): ShowSecurityCheckConfigResponse {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityCheckConfigResponseCheckPeriodTypeEnum {
    DAY = 'day',
    WEEK = 'week'
}
