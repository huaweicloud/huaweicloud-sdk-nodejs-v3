import { DeploymentTargets } from './DeploymentTargets';
import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { OperationPreferences } from './OperationPreferences';
import { OperationPreferencesTypeHolder } from './OperationPreferencesTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolder } from './VarOverridesPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolderVarOverrides } from './VarOverridesPrimitiveTypeHolderVarOverrides';


export class UpdateStackInstancesRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargets;
    private 'var_overrides'?: VarOverridesPrimitiveTypeHolderVarOverrides;
    private 'operation_preferences'?: OperationPreferences;
    public constructor(deploymentTargets?: DeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withStackSetId(stackSetId: string): UpdateStackInstancesRequestBody {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargets): UpdateStackInstancesRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargets | undefined {
        return this['deployment_targets'];
    }
    public withVarOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides): UpdateStackInstancesRequestBody {
        this['var_overrides'] = varOverrides;
        return this;
    }
    public set varOverrides(varOverrides: VarOverridesPrimitiveTypeHolderVarOverrides  | undefined) {
        this['var_overrides'] = varOverrides;
    }
    public get varOverrides(): VarOverridesPrimitiveTypeHolderVarOverrides | undefined {
        return this['var_overrides'];
    }
    public withOperationPreferences(operationPreferences: OperationPreferences): UpdateStackInstancesRequestBody {
        this['operation_preferences'] = operationPreferences;
        return this;
    }
    public set operationPreferences(operationPreferences: OperationPreferences  | undefined) {
        this['operation_preferences'] = operationPreferences;
    }
    public get operationPreferences(): OperationPreferences | undefined {
        return this['operation_preferences'];
    }
}