import { JobInputResp } from './JobInputResp';
import { JobOutputResp } from './JobOutputResp';
import { StepConditionResp } from './StepConditionResp';
import { WorkflowConditionExecutionResp } from './WorkflowConditionExecutionResp';
import { WorkflowErrorInfoResp } from './WorkflowErrorInfoResp';
import { WorkflowStepExecutionPolicyResp } from './WorkflowStepExecutionPolicyResp';


export class StepExecutionResp {
    private 'step_name'?: string;
    private 'execution_name'?: string;
    public name?: string;
    public uuid?: string;
    private 'execution_uuid'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public duration?: number;
    public type?: StepExecutionRespTypeEnum | string;
    private 'instance_id'?: string;
    public status?: StepExecutionRespStatusEnum | string;
    public inputs?: Array<JobInputResp>;
    public outputs?: Array<JobOutputResp>;
    private 'step_uuid'?: string;
    public properties?: { [key: string]: string; };
    public events?: Array<string>;
    private 'error_info'?: WorkflowErrorInfoResp;
    public policy?: WorkflowStepExecutionPolicyResp;
    private 'conditions_execution'?: WorkflowConditionExecutionResp;
    private 'step_title'?: string;
    public conditions?: Array<StepConditionResp>;
    public constructor() { 
    }
    public withStepName(stepName: string): StepExecutionResp {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withExecutionName(executionName: string): StepExecutionResp {
        this['execution_name'] = executionName;
        return this;
    }
    public set executionName(executionName: string  | undefined) {
        this['execution_name'] = executionName;
    }
    public get executionName(): string | undefined {
        return this['execution_name'];
    }
    public withName(name: string): StepExecutionResp {
        this['name'] = name;
        return this;
    }
    public withUuid(uuid: string): StepExecutionResp {
        this['uuid'] = uuid;
        return this;
    }
    public withExecutionUuid(executionUuid: string): StepExecutionResp {
        this['execution_uuid'] = executionUuid;
        return this;
    }
    public set executionUuid(executionUuid: string  | undefined) {
        this['execution_uuid'] = executionUuid;
    }
    public get executionUuid(): string | undefined {
        return this['execution_uuid'];
    }
    public withCreatedAt(createdAt: string): StepExecutionResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): StepExecutionResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDuration(duration: number): StepExecutionResp {
        this['duration'] = duration;
        return this;
    }
    public withType(type: StepExecutionRespTypeEnum | string): StepExecutionResp {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): StepExecutionResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: StepExecutionRespStatusEnum | string): StepExecutionResp {
        this['status'] = status;
        return this;
    }
    public withInputs(inputs: Array<JobInputResp>): StepExecutionResp {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<JobOutputResp>): StepExecutionResp {
        this['outputs'] = outputs;
        return this;
    }
    public withStepUuid(stepUuid: string): StepExecutionResp {
        this['step_uuid'] = stepUuid;
        return this;
    }
    public set stepUuid(stepUuid: string  | undefined) {
        this['step_uuid'] = stepUuid;
    }
    public get stepUuid(): string | undefined {
        return this['step_uuid'];
    }
    public withProperties(properties: { [key: string]: string; }): StepExecutionResp {
        this['properties'] = properties;
        return this;
    }
    public withEvents(events: Array<string>): StepExecutionResp {
        this['events'] = events;
        return this;
    }
    public withErrorInfo(errorInfo: WorkflowErrorInfoResp): StepExecutionResp {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: WorkflowErrorInfoResp  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): WorkflowErrorInfoResp | undefined {
        return this['error_info'];
    }
    public withPolicy(policy: WorkflowStepExecutionPolicyResp): StepExecutionResp {
        this['policy'] = policy;
        return this;
    }
    public withConditionsExecution(conditionsExecution: WorkflowConditionExecutionResp): StepExecutionResp {
        this['conditions_execution'] = conditionsExecution;
        return this;
    }
    public set conditionsExecution(conditionsExecution: WorkflowConditionExecutionResp  | undefined) {
        this['conditions_execution'] = conditionsExecution;
    }
    public get conditionsExecution(): WorkflowConditionExecutionResp | undefined {
        return this['conditions_execution'];
    }
    public withStepTitle(stepTitle: string): StepExecutionResp {
        this['step_title'] = stepTitle;
        return this;
    }
    public set stepTitle(stepTitle: string  | undefined) {
        this['step_title'] = stepTitle;
    }
    public get stepTitle(): string | undefined {
        return this['step_title'];
    }
    public withConditions(conditions: Array<StepConditionResp>): StepExecutionResp {
        this['conditions'] = conditions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StepExecutionRespTypeEnum {
    TRANING_JOB = 'traning_job'
}
/**
    * @export
    * @enum {string}
    */
export enum StepExecutionRespStatusEnum {
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
