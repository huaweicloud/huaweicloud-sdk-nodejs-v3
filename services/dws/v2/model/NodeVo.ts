

export class NodeVo {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'inst_type'?: string;
    public constructor() { 
    }
    public withId(id: string): NodeVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NodeVo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NodeVo {
        this['status'] = status;
        return this;
    }
    public withInstType(instType: string): NodeVo {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: string  | undefined) {
        this['inst_type'] = instType;
    }
    public get instType(): string | undefined {
        return this['inst_type'];
    }
}