

export class ModifyOfflineTaskReq {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ModifyOfflineTaskReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyOfflineTaskReq {
        this['description'] = description;
        return this;
    }
}