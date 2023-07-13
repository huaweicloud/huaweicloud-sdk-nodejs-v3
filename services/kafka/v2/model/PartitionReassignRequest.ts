import { PartitionReassignEntity } from './PartitionReassignEntity';


export class PartitionReassignRequest {
    public reassignments: Array<PartitionReassignEntity>;
    public throttle?: number;
    public constructor(reassignments?: any) { 
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
}