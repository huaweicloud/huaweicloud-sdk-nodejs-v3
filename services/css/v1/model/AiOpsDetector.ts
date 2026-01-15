

export class AiOpsDetector {
    public id?: string;
    public name?: string;
    public desc?: string;
    public constructor() { 
    }
    public withId(id: string): AiOpsDetector {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AiOpsDetector {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): AiOpsDetector {
        this['desc'] = desc;
        return this;
    }
}