

export class ShortGlobalEipSegment {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ShortGlobalEipSegment {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShortGlobalEipSegment {
        this['name'] = name;
        return this;
    }
}