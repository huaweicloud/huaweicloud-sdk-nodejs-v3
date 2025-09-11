
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditTaskStatusResponse extends SdkResponse {
    private 'begin_time'?: number;
    private 'busi_type'?: string;
    private 'completed_num'?: number;
    private 'end_time'?: number;
    public id?: number;
    private 'project_id'?: string;
    private 'query_begin_time'?: number;
    private 'query_end_time'?: number;
    private 'task_status'?: string;
    private 'task_switch'?: string;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: number): ShowAuditTaskStatusResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withBusiType(busiType: string): ShowAuditTaskStatusResponse {
        this['busi_type'] = busiType;
        return this;
    }
    public set busiType(busiType: string  | undefined) {
        this['busi_type'] = busiType;
    }
    public get busiType(): string | undefined {
        return this['busi_type'];
    }
    public withCompletedNum(completedNum: number): ShowAuditTaskStatusResponse {
        this['completed_num'] = completedNum;
        return this;
    }
    public set completedNum(completedNum: number  | undefined) {
        this['completed_num'] = completedNum;
    }
    public get completedNum(): number | undefined {
        return this['completed_num'];
    }
    public withEndTime(endTime: number): ShowAuditTaskStatusResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withId(id: number): ShowAuditTaskStatusResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ShowAuditTaskStatusResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQueryBeginTime(queryBeginTime: number): ShowAuditTaskStatusResponse {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: number  | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime(): number | undefined {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: number): ShowAuditTaskStatusResponse {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: number  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): number | undefined {
        return this['query_end_time'];
    }
    public withTaskStatus(taskStatus: string): ShowAuditTaskStatusResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withTaskSwitch(taskSwitch: string): ShowAuditTaskStatusResponse {
        this['task_switch'] = taskSwitch;
        return this;
    }
    public set taskSwitch(taskSwitch: string  | undefined) {
        this['task_switch'] = taskSwitch;
    }
    public get taskSwitch(): string | undefined {
        return this['task_switch'];
    }
    public withTotalNum(totalNum: number): ShowAuditTaskStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}