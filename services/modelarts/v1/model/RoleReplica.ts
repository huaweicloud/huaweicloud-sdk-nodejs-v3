

export class RoleReplica {
    public name?: string;
    private 'max_replicas'?: number;
    private 'min_replicas'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): RoleReplica {
        this['name'] = name;
        return this;
    }
    public withMaxReplicas(maxReplicas: number): RoleReplica {
        this['max_replicas'] = maxReplicas;
        return this;
    }
    public set maxReplicas(maxReplicas: number  | undefined) {
        this['max_replicas'] = maxReplicas;
    }
    public get maxReplicas(): number | undefined {
        return this['max_replicas'];
    }
    public withMinReplicas(minReplicas: number): RoleReplica {
        this['min_replicas'] = minReplicas;
        return this;
    }
    public set minReplicas(minReplicas: number  | undefined) {
        this['min_replicas'] = minReplicas;
    }
    public get minReplicas(): number | undefined {
        return this['min_replicas'];
    }
}