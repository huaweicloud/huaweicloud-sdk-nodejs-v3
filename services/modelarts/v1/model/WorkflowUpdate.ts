import { DataRequirement } from './DataRequirement';
import { WorkflowParameter } from './WorkflowParameter';
import { WorkflowStep } from './WorkflowStep';
import { WorkflowStorage } from './WorkflowStorage';


export class WorkflowUpdate {
    public name?: string;
    public description?: string;
    private 'data_requirements'?: Array<DataRequirement>;
    public parameters?: Array<WorkflowParameter>;
    public storages?: Array<WorkflowStorage>;
    public labels?: Array<string>;
    private 'smn_switch'?: string;
    public steps?: Array<WorkflowStep>;
    public constructor() { 
    }
    public withName(name: string): WorkflowUpdate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkflowUpdate {
        this['description'] = description;
        return this;
    }
    public withDataRequirements(dataRequirements: Array<DataRequirement>): WorkflowUpdate {
        this['data_requirements'] = dataRequirements;
        return this;
    }
    public set dataRequirements(dataRequirements: Array<DataRequirement>  | undefined) {
        this['data_requirements'] = dataRequirements;
    }
    public get dataRequirements(): Array<DataRequirement> | undefined {
        return this['data_requirements'];
    }
    public withParameters(parameters: Array<WorkflowParameter>): WorkflowUpdate {
        this['parameters'] = parameters;
        return this;
    }
    public withStorages(storages: Array<WorkflowStorage>): WorkflowUpdate {
        this['storages'] = storages;
        return this;
    }
    public withLabels(labels: Array<string>): WorkflowUpdate {
        this['labels'] = labels;
        return this;
    }
    public withSmnSwitch(smnSwitch: string): WorkflowUpdate {
        this['smn_switch'] = smnSwitch;
        return this;
    }
    public set smnSwitch(smnSwitch: string  | undefined) {
        this['smn_switch'] = smnSwitch;
    }
    public get smnSwitch(): string | undefined {
        return this['smn_switch'];
    }
    public withSteps(steps: Array<WorkflowStep>): WorkflowUpdate {
        this['steps'] = steps;
        return this;
    }
}