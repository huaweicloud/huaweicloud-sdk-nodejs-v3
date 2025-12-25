

export class AopworkflowInstanceDetailPlaybook {
    private 'en_name'?: string;
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withEnName(enName: string): AopworkflowInstanceDetailPlaybook {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withId(id: string): AopworkflowInstanceDetailPlaybook {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AopworkflowInstanceDetailPlaybook {
        this['name'] = name;
        return this;
    }
}