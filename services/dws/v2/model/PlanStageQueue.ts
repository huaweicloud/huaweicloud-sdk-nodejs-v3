import { WorkloadResourceItem } from './WorkloadResourceItem';


export class PlanStageQueue {
    private 'queue_name'?: string;
    private 'queue_resources'?: Array<WorkloadResourceItem>;
    public constructor(queueName?: string, queueResources?: Array<WorkloadResourceItem>) { 
        this['queue_name'] = queueName;
        this['queue_resources'] = queueResources;
    }
    public withQueueName(queueName: string): PlanStageQueue {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withQueueResources(queueResources: Array<WorkloadResourceItem>): PlanStageQueue {
        this['queue_resources'] = queueResources;
        return this;
    }
    public set queueResources(queueResources: Array<WorkloadResourceItem>  | undefined) {
        this['queue_resources'] = queueResources;
    }
    public get queueResources(): Array<WorkloadResourceItem> | undefined {
        return this['queue_resources'];
    }
}