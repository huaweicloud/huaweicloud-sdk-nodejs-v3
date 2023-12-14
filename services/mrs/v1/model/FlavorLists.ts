

export class FlavorLists {
    public master?: Array<string>;
    public core?: Array<string>;
    public task?: Array<string>;
    public constructor() { 
    }
    public withMaster(master: Array<string>): FlavorLists {
        this['master'] = master;
        return this;
    }
    public withCore(core: Array<string>): FlavorLists {
        this['core'] = core;
        return this;
    }
    public withTask(task: Array<string>): FlavorLists {
        this['task'] = task;
        return this;
    }
}