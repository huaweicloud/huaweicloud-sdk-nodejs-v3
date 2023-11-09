import { EnvironmentCreateLabels } from './EnvironmentCreateLabels';


export class EnvironmentCreate {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'vpc_id'?: string;
    private 'deploy_mode'?: EnvironmentCreateDeployModeEnum | string;
    public labels?: Array<EnvironmentCreateLabels>;
    public constructor(name?: string, vpcId?: string, deployMode?: string) { 
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['deploy_mode'] = deployMode;
    }
    public withName(name: string): EnvironmentCreate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnvironmentCreate {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EnvironmentCreate {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVpcId(vpcId: string): EnvironmentCreate {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDeployMode(deployMode: EnvironmentCreateDeployModeEnum | string): EnvironmentCreate {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: EnvironmentCreateDeployModeEnum | string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): EnvironmentCreateDeployModeEnum | string | undefined {
        return this['deploy_mode'];
    }
    public withLabels(labels: Array<EnvironmentCreateLabels>): EnvironmentCreate {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentCreateDeployModeEnum {
    CONTAINER = 'container',
    VIRTUALMACHINE = 'virtualmachine',
    MIXED = 'mixed'
}
