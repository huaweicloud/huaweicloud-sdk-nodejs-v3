import { CallIdentityPrimitiveTypeHolder } from './CallIdentityPrimitiveTypeHolder';
import { DeploymentTargets } from './DeploymentTargets';
import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { OperationPreferences } from './OperationPreferences';
import { OperationPreferencesTypeHolder } from './OperationPreferencesTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolder } from './VarOverridesPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolderVarOverrides } from './VarOverridesPrimitiveTypeHolderVarOverrides';


export class CreateStackInstanceRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargets;
    private 'var_overrides'?: VarOverridesPrimitiveTypeHolderVarOverrides;
    private 'operation_preferences'?: OperationPreferences;
    private 'call_identity'?: CreateStackInstanceRequestBodyCallIdentityEnum | string;
    public constructor(deploymentTargets?: DeploymentTargets) { 
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
    public withDeploymentTargets(deploymentTargets: DeploymentTargets): CreateStackInstanceRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargets | undefined {
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
    public withOperationPreferences(operationPreferences: OperationPreferences): CreateStackInstanceRequestBody {
        this['operation_preferences'] = operationPreferences;
        return this;
    }
    public set operationPreferences(operationPreferences: OperationPreferences  | undefined) {
        this['operation_preferences'] = operationPreferences;
    }
    public get operationPreferences(): OperationPreferences | undefined {
        return this['operation_preferences'];
    }
    public withCallIdentity(callIdentity: CreateStackInstanceRequestBodyCallIdentityEnum | string): CreateStackInstanceRequestBody {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: CreateStackInstanceRequestBodyCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): CreateStackInstanceRequestBodyCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateStackInstanceRequestBodyCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
