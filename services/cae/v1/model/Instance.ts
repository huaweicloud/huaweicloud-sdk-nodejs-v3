

export class Instance {
    public id?: string;
    public name?: string;
    public status?: InstanceStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): Instance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Instance {
        this['name'] = name;
        return this;
    }
    public withStatus(status: InstanceStatusEnum | string): Instance {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceStatusEnum {
    CREATING = 'creating',
    RUNNING = 'running',
    ABNORMAL = 'abnormal',
    FAILED = 'failed',
    TERMINATING = 'terminating'
}
