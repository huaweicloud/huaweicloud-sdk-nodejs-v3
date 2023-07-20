

export class Components {
    public id?: string;
    public role?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): Components {
        this['id'] = id;
        return this;
    }
    public withRole(role: string): Components {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): Components {
        this['status'] = status;
        return this;
    }
}