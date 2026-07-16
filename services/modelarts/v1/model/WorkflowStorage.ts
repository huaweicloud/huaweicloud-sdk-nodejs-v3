

export class WorkflowStorage {
    public name?: string;
    public type?: WorkflowStorageTypeEnum | string;
    public path?: string;
    public constructor() { 
    }
    public withName(name: string): WorkflowStorage {
        this['name'] = name;
        return this;
    }
    public withType(type: WorkflowStorageTypeEnum | string): WorkflowStorage {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): WorkflowStorage {
        this['path'] = path;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WorkflowStorageTypeEnum {
    OBS = 'obs'
}
