

export class EntityDto {
    public name?: string;
    public id?: string;
    public type?: string;
    public constructor(name?: string, id?: string, type?: string) { 
        this['name'] = name;
        this['id'] = id;
        this['type'] = type;
    }
    public withName(name: string): EntityDto {
        this['name'] = name;
        return this;
    }
    public withId(id: string): EntityDto {
        this['id'] = id;
        return this;
    }
    public withType(type: string): EntityDto {
        this['type'] = type;
        return this;
    }
}