import { DeploymentTargets } from './DeploymentTargets';


export class DeploymentTargetsPrimitiveTypeHolder {
    private 'deployment_targets'?: DeploymentTargets;
    public constructor(deploymentTargets?: DeploymentTargets) { 
        this['deployment_targets'] = deploymentTargets;
    }
    public withDeploymentTargets(deploymentTargets: DeploymentTargets): DeploymentTargetsPrimitiveTypeHolder {
        this['deployment_targets'] = deploymentTargets;
        return this;
    }
    public set deploymentTargets(deploymentTargets: DeploymentTargets  | undefined) {
        this['deployment_targets'] = deploymentTargets;
    }
    public get deploymentTargets(): DeploymentTargets | undefined {
        return this['deployment_targets'];
    }
}