

export class NodesResultMsg {
    public name?: string;
    public status?: string;
    public constructor() { 
    }
    public withName(name: string): NodesResultMsg {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NodesResultMsg {
        this['status'] = status;
        return this;
    }
}