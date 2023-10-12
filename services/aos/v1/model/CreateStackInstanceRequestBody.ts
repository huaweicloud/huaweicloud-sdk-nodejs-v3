import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { DeploymentTargetsPrimitiveTypeHolderDeploymentTargets } from './DeploymentTargetsPrimitiveTypeHolderDeploymentTargets';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolder } from './VarOverridesPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolderVarOverrides } from './VarOverridesPrimitiveTypeHolderVarOverrides';


export class CreateStackInstanceRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets;
    private 'var_overrides'?: VarOverridesPrimitiveTypeHolderVarOverrides;
    public constructor(deploymentTargets?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withStackSetId(stackSetId: string): CreateStackInstanceRequestBody {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets): CreateStackInstanceRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets | undefined {
        return this['deployment_targets'];
    }
    public withVarOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides): CreateStackInstanceRequestBody {
        this['var_overrides'] = varOverrides;
        return this;
    }
    public set varOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides  | undefined) {
        this['var_overrides'] = varOverrides;
    }
    public get varOverrides(): VarOverridesPrimitiveTypeHolderVarOverrides | undefined {
        return this['var_overrides'];
    }
}