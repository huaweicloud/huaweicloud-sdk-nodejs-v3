

export class CommonDto {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): CommonDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CommonDto {
        this['name'] = name;
        return this;
    }
}