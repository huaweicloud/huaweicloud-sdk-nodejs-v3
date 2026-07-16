import { JobInput } from './JobInput';
import { JobOutput } from './JobOutput';
import { StepCondition } from './StepCondition';
import { WorkflowStepPolicy } from './WorkflowStepPolicy';


export class WorkflowStep {
    public name?: string;
    public type?: string;
    public inputs?: Array<JobInput>;
    public outputs?: Array<JobOutput>;
    private 'created_at'?: string;
    public title?: string;
    public description?: string;
    public properties?: { [key: string]: object; };
    private 'depend_steps'?: Array<string>;
    public conditions?: Array<StepCondition>;
    private 'if_then_steps'?: Array<string>;
    private 'else_then_steps'?: Array<string>;
    public policy?: WorkflowStepPolicy;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): WorkflowStep {
        this['name'] = name;
        return this;
    }
    public withType(type: string): WorkflowStep {
        this['type'] = type;
        return this;
    }
    public withInputs(inputs: Array<JobInput>): WorkflowStep {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<JobOutput>): WorkflowStep {
        this['outputs'] = outputs;
        return this;
    }
    public withCreatedAt(createdAt: string): WorkflowStep {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withTitle(title: string): WorkflowStep {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): WorkflowStep {
        this['description'] = description;
        return this;
    }
    public withProperties(properties: { [key: string]: object; }): WorkflowStep {
        this['properties'] = properties;
        return this;
    }
    public withDependSteps(dependSteps: Array<string>): WorkflowStep {
        this['depend_steps'] = dependSteps;
        return this;
    }
    public set dependSteps(dependSteps: Array<string>  | undefined) {
        this['depend_steps'] = dependSteps;
    }
    public get dependSteps(): Array<string> | undefined {
        return this['depend_steps'];
    }
    public withConditions(conditions: Array<StepCondition>): WorkflowStep {
        this['conditions'] = conditions;
        return this;
    }
    public withIfThenSteps(ifThenSteps: Array<string>): WorkflowStep {
        this['if_then_steps'] = ifThenSteps;
        return this;
    }
    public set ifThenSteps(ifThenSteps: Array<string>  | undefined) {
        this['if_then_steps'] = ifThenSteps;
    }
    public get ifThenSteps(): Array<string> | undefined {
        return this['if_then_steps'];
    }
    public withElseThenSteps(elseThenSteps: Array<string>): WorkflowStep {
        this['else_then_steps'] = elseThenSteps;
        return this;
    }
    public set elseThenSteps(elseThenSteps: Array<string>  | undefined) {
        this['else_then_steps'] = elseThenSteps;
    }
    public get elseThenSteps(): Array<string> | undefined {
        return this['else_then_steps'];
    }
    public withPolicy(policy: WorkflowStepPolicy): WorkflowStep {
        this['policy'] = policy;
        return this;
    }
}