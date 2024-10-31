

export class CaptureTaskId {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): CaptureTaskId {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CaptureTaskId {
        this['name'] = name;
        return this;
    }
}