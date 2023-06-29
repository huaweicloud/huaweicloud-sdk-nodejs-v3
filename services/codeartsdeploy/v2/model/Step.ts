

export class Step {
    public id?: string;
    public name?: string;
    public params?: { [key: string]: string; };
    public enable?: boolean;
    public constructor() { 
    }
    public withId(id: string): Step {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Step {
        this['name'] = name;
        return this;
    }
    public withParams(params: { [key: string]: string; }): Step {
        this['params'] = params;
        return this;
    }
    public withEnable(enable: boolean): Step {
        this['enable'] = enable;
        return this;
    }
}