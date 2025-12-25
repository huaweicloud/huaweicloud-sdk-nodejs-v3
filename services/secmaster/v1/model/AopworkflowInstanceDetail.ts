import { AopworkflowInstanceDetailDataclass } from './AopworkflowInstanceDetailDataclass';
import { AopworkflowInstanceDetailPlaybook } from './AopworkflowInstanceDetailPlaybook';
import { AopworkflowInstanceDetailWorkflow } from './AopworkflowInstanceDetailWorkflow';
import { WorkflowInstanceTopology } from './WorkflowInstanceTopology';


export class AopworkflowInstanceDetail {
    public id?: string;
    public name?: string;
    public workflow?: AopworkflowInstanceDetailWorkflow;
    public dataclass?: AopworkflowInstanceDetailDataclass;
    public playbook?: AopworkflowInstanceDetailPlaybook;
    private 'trigger_type'?: string;
    public status?: AopworkflowInstanceDetailStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'retry_count'?: number;
    private 'defense_id'?: string;
    private 'dataobject_id'?: string;
    public topology?: WorkflowInstanceTopology;
    public constructor() { 
    }
    public withId(id: string): AopworkflowInstanceDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AopworkflowInstanceDetail {
        this['name'] = name;
        return this;
    }
    public withWorkflow(workflow: AopworkflowInstanceDetailWorkflow): AopworkflowInstanceDetail {
        this['workflow'] = workflow;
        return this;
    }
    public withDataclass(dataclass: AopworkflowInstanceDetailDataclass): AopworkflowInstanceDetail {
        this['dataclass'] = dataclass;
        return this;
    }
    public withPlaybook(playbook: AopworkflowInstanceDetailPlaybook): AopworkflowInstanceDetail {
        this['playbook'] = playbook;
        return this;
    }
    public withTriggerType(triggerType: string): AopworkflowInstanceDetail {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withStatus(status: AopworkflowInstanceDetailStatusEnum | string): AopworkflowInstanceDetail {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): AopworkflowInstanceDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AopworkflowInstanceDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRetryCount(retryCount: number): AopworkflowInstanceDetail {
        this['retry_count'] = retryCount;
        return this;
    }
    public set retryCount(retryCount: number  | undefined) {
        this['retry_count'] = retryCount;
    }
    public get retryCount(): number | undefined {
        return this['retry_count'];
    }
    public withDefenseId(defenseId: string): AopworkflowInstanceDetail {
        this['defense_id'] = defenseId;
        return this;
    }
    public set defenseId(defenseId: string  | undefined) {
        this['defense_id'] = defenseId;
    }
    public get defenseId(): string | undefined {
        return this['defense_id'];
    }
    public withDataobjectId(dataobjectId: string): AopworkflowInstanceDetail {
        this['dataobject_id'] = dataobjectId;
        return this;
    }
    public set dataobjectId(dataobjectId: string  | undefined) {
        this['dataobject_id'] = dataobjectId;
    }
    public get dataobjectId(): string | undefined {
        return this['dataobject_id'];
    }
    public withTopology(topology: WorkflowInstanceTopology): AopworkflowInstanceDetail {
        this['topology'] = topology;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AopworkflowInstanceDetailStatusEnum {
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    FINISHED = 'FINISHED',
    RETRYING = 'RETRYING',
    TERMINATING = 'TERMINATING',
    TERMINATED = 'TERMINATED'
}
