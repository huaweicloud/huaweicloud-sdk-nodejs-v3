import { ChargeMode } from './ChargeMode';
import { Resource } from './Resource';


export class EnvironmentCreate {
    public name?: string;
    public alias?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'charge_mode'?: ChargeMode;
    private 'deploy_mode'?: string;
    private 'vpc_id'?: string;
    private 'base_resources'?: Array<Resource>;
    private 'optional_resources'?: Array<Resource>;
    public constructor(name?: string, deployMode?: string, vpcId?: string, baseResources?: Array<Resource>) { 
        this['name'] = name;
        this['deploy_mode'] = deployMode;
        this['vpc_id'] = vpcId;
        this['base_resources'] = baseResources;
    }
    public withName(name: string): EnvironmentCreate {
        this['name'] = name;
        return this;
    }
    public withAlias(alias: string): EnvironmentCreate {
        this['alias'] = alias;
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
    public withChargeMode(chargeMode: ChargeMode): EnvironmentCreate {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChargeMode  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChargeMode | undefined {
        return this['charge_mode'];
    }
    public withDeployMode(deployMode: string): EnvironmentCreate {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): string | undefined {
        return this['deploy_mode'];
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
    public withBaseResources(baseResources: Array<Resource>): EnvironmentCreate {
        this['base_resources'] = baseResources;
        return this;
    }
    public set baseResources(baseResources: Array<Resource>  | undefined) {
        this['base_resources'] = baseResources;
    }
    public get baseResources(): Array<Resource> | undefined {
        return this['base_resources'];
    }
    public withOptionalResources(optionalResources: Array<Resource>): EnvironmentCreate {
        this['optional_resources'] = optionalResources;
        return this;
    }
    public set optionalResources(optionalResources: Array<Resource>  | undefined) {
        this['optional_resources'] = optionalResources;
    }
    public get optionalResources(): Array<Resource> | undefined {
        return this['optional_resources'];
    }
}