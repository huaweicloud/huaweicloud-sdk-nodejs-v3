

export class CheckpointCreateSkippedResource {
    public id?: string;
    public type?: string;
    public name?: string;
    public code?: string;
    public reason?: string;
    public constructor() { 
    }
    public withId(id: string): CheckpointCreateSkippedResource {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CheckpointCreateSkippedResource {
        this['type'] = type;
        return this;
    }
    public withName(name: string): CheckpointCreateSkippedResource {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): CheckpointCreateSkippedResource {
        this['code'] = code;
        return this;
    }
    public withReason(reason: string): CheckpointCreateSkippedResource {
        this['reason'] = reason;
        return this;
    }
}