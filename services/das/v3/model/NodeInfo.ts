

export class NodeInfo {
    public id?: string;
    public name?: string;
    public role?: string;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): NodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeInfo {
        this['name'] = name;
        return this;
    }
    public withRole(role: string): NodeInfo {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): NodeInfo {
        this['status'] = status;
        return this;
    }
    public withType(type: string): NodeInfo {
        this['type'] = type;
        return this;
    }
}