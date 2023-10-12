import { DeploymentTargetsPrimitiveTypeHolderDeploymentTargets } from './DeploymentTargetsPrimitiveTypeHolderDeploymentTargets';


export class DeploymentTargetsPrimitiveTypeHolder {
    private 'deployment_targets'?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets;
    public constructor(deploymentTargets?: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargetsPrimitiveTypeHolderDeploymentTargets): DeploymentTargetsPrimitiveTypeHolder {
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