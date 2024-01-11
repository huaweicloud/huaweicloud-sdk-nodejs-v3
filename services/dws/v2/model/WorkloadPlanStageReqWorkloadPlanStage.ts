import { QueueResourceItem } from './QueueResourceItem';


export class WorkloadPlanStageReqWorkloadPlanStage {
    public day?: string;
    public month?: string;
    private 'stage_name'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'queue_list'?: Array<QueueResourceItem>;
    public constructor() { 
    }
    public withDay(day: string): WorkloadPlanStageReqWorkloadPlanStage {
        this['day'] = day;
        return this;
    }
    public withMonth(month: string): WorkloadPlanStageReqWorkloadPlanStage {
        this['month'] = month;
        return this;
    }
    public withStageName(stageName: string): WorkloadPlanStageReqWorkloadPlanStage {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
    public withStartTime(startTime: string): WorkloadPlanStageReqWorkloadPlanStage {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): WorkloadPlanStageReqWorkloadPlanStage {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withQueueList(queueList: Array<QueueResourceItem>): WorkloadPlanStageReqWorkloadPlanStage {
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