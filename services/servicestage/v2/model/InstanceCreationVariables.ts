

export class InstanceCreationVariables {
    public environment?: object;
    public components?: object;
    public constructor() { 
    }
    public withEnvironment(environment: object): InstanceCreationVariables {
        this['environment'] = environment;
        return this;
    }
    public withComponents(components: object): InstanceCreationVariables {
        this['components'] = components;
        return this;
    }
}