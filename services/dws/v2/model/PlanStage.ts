import { QueueResourceItem } from './QueueResourceItem';


export class PlanStage {
    public month?: string;
    public day?: string;
    private 'plan_id'?: string;
    private 'stage_id'?: string;
    private 'stage_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'next_valid_time'?: string;
    private 'queue_list'?: Array<QueueResourceItem>;
    public constructor(month?: string, day?: string, planId?: string, stageId?: string, stageName?: string) { 
        this['month'] = month;
        this['day'] = day;
        this['plan_id'] = planId;
        this['stage_id'] = stageId;
        this['stage_name'] = stageName;
    }
    public withMonth(month: string): PlanStage {
        this['month'] = month;
        return this;
    }
    public withDay(day: string): PlanStage {
        this['day'] = day;
        return this;
    }
    public withPlanId(planId: string): PlanStage {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withStageId(stageId: string): PlanStage {
        this['stage_id'] = stageId;
        return this;
    }
    public set stageId(stageId: string  | undefined) {
        this['stage_id'] = stageId;
    }
    public get stageId(): string | undefined {
        return this['stage_id'];
    }
    public withStageName(stageName: string): PlanStage {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
    public withStartTime(startTime: string): PlanStage {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): PlanStage {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withNextValidTime(nextValidTime: string): PlanStage {
        this['next_valid_time'] = nextValidTime;
        return this;
    }
    public set nextValidTime(nextValidTime: string  | undefined) {
        this['next_valid_time'] = nextValidTime;
    }
    public get nextValidTime(): string | undefined {
        return this['next_valid_time'];
    }
    public withQueueList(queueList: Array<QueueResourceItem>): PlanStage {
        this['queue_list'] = queueList;
        return this;
    }
    public set queueList(queueList: Array<QueueResourceItem>  | undefined) {
        this['queue_list'] = queueList;
    }
    public get queueList(): Array<QueueResourceItem> | undefined {
        return this['queue_list'];
    }
}