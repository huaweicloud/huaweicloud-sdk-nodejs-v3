import { PartitionReassignEntity } from './PartitionReassignEntity';


export class PartitionReassignRequest {
    public reassignments?: Array<PartitionReassignEntity>;
    public throttle?: number;
    private 'is_schedule'?: boolean;
    private 'execute_at'?: number;
    public constructor(reassignments?: Array<PartitionReassignEntity>) { 
        this['reassignments'] = reassignments;
    }
    public withReassignments(reassignments: Array<PartitionReassignEntity>): PartitionReassignRequest {
        this['reassignments'] = reassignments;
        return this;
    }
    public withThrottle(throttle: number): PartitionReassignRequest {
        this['throttle'] = throttle;
        return this;
    }
    public withIsSchedule(isSchedule: boolean): PartitionReassignRequest {
        this['is_schedule'] = isSchedule;
        return this;
    }
    public set isSchedule(isSchedule: boolean  | undefined) {
        this['is_schedule'] = isSchedule;
    }
    public get isSchedule(): boolean | undefined {
        return this['is_schedule'];
    }
    public withExecuteAt(executeAt: number): PartitionReassignRequest {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
}