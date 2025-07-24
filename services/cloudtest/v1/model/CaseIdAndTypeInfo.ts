

export class CaseIdAndTypeInfo {
    public id?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): CaseIdAndTypeInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CaseIdAndTypeInfo {
        this['type'] = type;
        return this;
    }
}