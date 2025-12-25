

export class HwcRdsRelatedInstance {
    public id?: string;
    public type?: string;
    public constructor(id?: string, type?: string) { 
        this['id'] = id;
        this['type'] = type;
    }
    public withId(id: string): HwcRdsRelatedInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): HwcRdsRelatedInstance {
        this['type'] = type;
        return this;
    }
}