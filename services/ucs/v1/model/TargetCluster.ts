

export class TargetCluster {
    public name?: string;
    public replicas?: string;
    public constructor() { 
    }
    public withName(name: string): TargetCluster {
        this['name'] = name;
        return this;
    }
    public withReplicas(replicas: string): TargetCluster {
        this['replicas'] = replicas;
        return this;
    }
}