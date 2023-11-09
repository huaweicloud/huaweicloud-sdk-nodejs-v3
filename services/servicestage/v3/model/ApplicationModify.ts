import { EnvironmentCreateLabels } from './EnvironmentCreateLabels';


export class ApplicationModify {
    public name?: string;
    private 'enterprise_project_id'?: string;
    public description?: string;
    public labels?: Array<EnvironmentCreateLabels>;
    public constructor() { 
    }
    public withName(name: string): ApplicationModify {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ApplicationModify {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): ApplicationModify {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: Array<EnvironmentCreateLabels>): ApplicationModify {
        this['labels'] = labels;
        return this;
    }
}