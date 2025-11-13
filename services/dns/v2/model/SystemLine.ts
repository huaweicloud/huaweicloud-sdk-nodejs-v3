

export class SystemLine {
    public id?: string;
    private 'father_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): SystemLine {
        this['id'] = id;
        return this;
    }
    public withFatherId(fatherId: string): SystemLine {
        this['father_id'] = fatherId;
        return this;
    }
    public set fatherId(fatherId: string  | undefined) {
        this['father_id'] = fatherId;
    }
    public get fatherId(): string | undefined {
        return this['father_id'];
    }
    public withName(name: string): SystemLine {
        this['name'] = name;
        return this;
    }
}