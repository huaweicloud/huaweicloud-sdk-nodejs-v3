import { DeploymentTargetsPrimitiveTypeHolder } from './DeploymentTargetsPrimitiveTypeHolder';
import { DeploymentTargetsPrimitiveTypeHolderDeploymentTargets } from './DeploymentTargetsPrimitiveTypeHolderDeploymentTargets';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';


export class DeleteStackInstanceRequestBody {
    private 'stack_set_id'?: string;
    private 'deployment_targets'?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets;
    public constructor(deploymentTargets?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets) { 
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
    public withDeploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets): DeleteStackInstanceRequestBody {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargetsPrimitiveTypeHolderDeploymentTargets | undefined {
        return this['deployment_targets'];
    }
}