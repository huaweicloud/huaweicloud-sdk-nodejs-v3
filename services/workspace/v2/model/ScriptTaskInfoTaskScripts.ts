

export class ScriptTaskInfoTaskScripts {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ScriptTaskInfoTaskScripts {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ScriptTaskInfoTaskScripts {
        this['name'] = name;
        return this;
    }
}