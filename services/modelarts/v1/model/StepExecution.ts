import { JobInput } from './JobInput';
import { JobOutput } from './JobOutput';
import { StepCondition } from './StepCondition';
import { WorkflowConditionExecution } from './WorkflowConditionExecution';
import { WorkflowErrorInfo } from './WorkflowErrorInfo';
import { WorkflowStepExecutionPolicy } from './WorkflowStepExecutionPolicy';


export class StepExecution {
    private 'step_name'?: string;
    public duration?: number;
    public type?: StepExecutionTypeEnum | string;
    private 'instance_id'?: string;
    public status?: StepExecutionStatusEnum | string;
    public inputs?: Array<JobInput>;
    public outputs?: Array<JobOutput>;
    private 'step_uuid'?: string;
    public properties?: { [key: string]: object; };
    public events?: Array<string>;
    private 'error_info'?: WorkflowErrorInfo;
    public policy?: WorkflowStepExecutionPolicy;
    private 'conditions_execution'?: WorkflowConditionExecution;
    private 'step_title'?: string;
    public conditions?: Array<StepCondition>;
    public constructor() { 
    }
    public withStepName(stepName: string): StepExecution {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withDuration(duration: number): StepExecution {
        this['duration'] = duration;
        return this;
    }
    public withType(type: StepExecutionTypeEnum | string): StepExecution {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): StepExecution {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: StepExecutionStatusEnum | string): StepExecution {
        this['status'] = status;
        return this;
    }
    public withInputs(inputs: Array<JobInput>): StepExecution {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<JobOutput>): StepExecution {
        this['outputs'] = outputs;
        return this;
    }
    public withStepUuid(stepUuid: string): StepExecution {
        this['step_uuid'] = stepUuid;
        return this;
    }
    public set stepUuid(stepUuid: string  | undefined) {
        this['step_uuid'] = stepUuid;
    }
    public get stepUuid(): string | undefined {
        return this['step_uuid'];
    }
    public withProperties(properties: { [key: string]: object; }): StepExecution {
        this['properties'] = properties;
        return this;
    }
    public withEvents(events: Array<string>): StepExecution {
        this['events'] = events;
        return this;
    }
    public withErrorInfo(errorInfo: WorkflowErrorInfo): StepExecution {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: WorkflowErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): WorkflowErrorInfo | undefined {
        return this['error_info'];
    }
    public withPolicy(policy: WorkflowStepExecutionPolicy): StepExecution {
        this['policy'] = policy;
        return this;
    }
    public withConditionsExecution(conditionsExecution: WorkflowConditionExecution): StepExecution {
        this['conditions_execution'] = conditionsExecution;
        return this;
    }
    public set conditionsExecution(conditionsExecution: WorkflowConditionExecution  | undefined) {
        this['conditions_execution'] = conditionsExecution;
    }
    public get conditionsExecution(): WorkflowConditionExecution | undefined {
        return this['conditions_execution'];
    }
    public withStepTitle(stepTitle: string): StepExecution {
        this['step_title'] = stepTitle;
        return this;
    }
    public set stepTitle(stepTitle: string  | undefined) {
        this['step_title'] = stepTitle;
    }
    public get stepTitle(): string | undefined {
        return this['step_title'];
    }
    public withConditions(conditions: Array<StepCondition>): StepExecution {
        this['conditions'] = conditions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StepExecutionTypeEnum {
    TRANING_JOB = 'traning_job'
}
/**
    * @export
    * @enum {string}
    */
export enum StepExecutionStatusEnum {
    INIT = 'init',
    WAIT_INPUTS = 'wait_inputs',
    PENDING = 'pending',
    CREATING = 'creating',
    CREATED = 'created',
    CREATE_FAILED = 'create_failed',
    RUNNING = 'running',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    TIMEOUT = 'timeout',
    COMPLETED = 'completed',
    FAILED = 'failed',
    HOLD = 'hold',
    SKIPPED = 'skipped'
}
