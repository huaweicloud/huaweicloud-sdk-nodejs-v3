

export class ResourcePoolVo {
    public id?: string;
    public name?: string;
    public type?: string;
    public selected?: string;
    private 'active_state'?: string;
    public constructor() { 
    }
    public withId(id: string): ResourcePoolVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourcePoolVo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ResourcePoolVo {
        this['type'] = type;
        return this;
    }
    public withSelected(selected: string): ResourcePoolVo {
        this['selected'] = selected;
        return this;
    }
    public withActiveState(activeState: string): ResourcePoolVo {
        this['active_state'] = activeState;
        return this;
    }
    public set activeState(activeState: string  | undefined) {
        this['active_state'] = activeState;
    }
    public get activeState(): string | undefined {
        return this['active_state'];
    }
}