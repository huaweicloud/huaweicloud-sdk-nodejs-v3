

export class Nodes {
    public id?: string;
    public status?: string;
    public constructor(id?: string, status?: string) { 
        this['id'] = id;
        this['status'] = status;
    }
    public withId(id: string): Nodes {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): Nodes {
        this['status'] = status;
        return this;
    }
}