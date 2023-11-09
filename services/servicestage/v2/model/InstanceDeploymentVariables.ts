

export class InstanceDeploymentVariables {
    public environment?: object;
    public components?: object;
    public constructor() { 
    }
    public withEnvironment(environment: object): InstanceDeploymentVariables {
        this['environment'] = environment;
        return this;
    }
    public withComponents(components: object): InstanceDeploymentVariables {
        this['components'] = components;
        return this;
    }
}