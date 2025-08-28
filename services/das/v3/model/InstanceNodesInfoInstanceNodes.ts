

export class InstanceNodesInfoInstanceNodes {
    public id?: string;
    public name?: string;
    public role?: string;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): InstanceNodesInfoInstanceNodes {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceNodesInfoInstanceNodes {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): InstanceNodesInfoInstanceNodes {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): InstanceNodesInfoInstanceNodes {
        this['status'] = status;
        return this;
    }
    public withType(type: string): InstanceNodesInfoInstanceNodes {
        this['type'] = type;
        return this;
    }
}