import { CallIdentityPrimitiveTypeHolder } from './CallIdentityPrimitiveTypeHolder';
import { DeploymentTargets } from './DeploymentTargets';
import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { OperationPreferences } from './OperationPreferences';
import { OperationPreferencesTypeHolder } from './OperationPreferencesTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';


export class DeleteStackInstanceRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargets;
    private 'operation_preferences'?: OperationPreferences;
    private 'call_identity'?: DeleteStackInstanceRequestBodyCallIdentityEnum | string;
    public constructor(deploymentTargets?: DeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withStackSetId(stackSetId: string): DeleteStackInstanceRequestBody {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargets): DeleteStackInstanceRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargets | undefined {
        return this['deployment_targets'];
    }
    public withOperationPreferences(operationPreferences: OperationPreferences): DeleteStackInstanceRequestBody {
        this['operation_preferences'] = operationPreferences;
        return this;
    }
    public set operationPreferences(operationPreferences: OperationPreferences  | undefined) {
        this['operation_preferences'] = operationPreferences;
    }
    public get operationPreferences(): OperationPreferences | undefined {
        return this['operation_preferences'];
    }
    public withCallIdentity(callIdentity: DeleteStackInstanceRequestBodyCallIdentityEnum | string): DeleteStackInstanceRequestBody {
        this['call_identity'] = callIdentity;
        return this;
    }
    public set callIdentity(callIdentity: DeleteStackInstanceRequestBodyCallIdentityEnum | string  | undefined) {
        this['call_identity'] = callIdentity;
    }
    public get callIdentity(): DeleteStackInstanceRequestBodyCallIdentityEnum | string | undefined {
        return this['call_identity'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteStackInstanceRequestBodyCallIdentityEnum {
    SELF = 'SELF',
    DELEGATED_ADMIN = 'DELEGATED_ADMIN'
}
