

export class AttrsObject {
    public capacity?: string;
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withCapacity(capacity: string): AttrsObject {
        this['capacity'] = capacity;
        return this;
    }
    public withName(name: string): AttrsObject {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): AttrsObject {
        this['value'] = value;
        return this;
    }
}