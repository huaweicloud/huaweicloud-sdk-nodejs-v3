import { EnvironmentCreateLabels } from './EnvironmentCreateLabels';


export class EnvironmentModify {
    public name?: string;
    public description?: string;
    public labels?: Array<EnvironmentCreateLabels>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): EnvironmentModify {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnvironmentModify {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<EnvironmentCreateLabels>): EnvironmentModify {
        this['labels'] = labels;
        return this;
    }
}