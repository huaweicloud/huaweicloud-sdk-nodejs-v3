import { InstanceDeploymentVariables } from './InstanceDeploymentVariables';


export class InstanceDeployment {
    private 'instance_id'?: string;
    public variables?: InstanceDeploymentVariables;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): InstanceDeployment {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVariables(variables: InstanceDeploymentVariables): InstanceDeployment {
        this['variables'] = variables;
        return this;
    }
}