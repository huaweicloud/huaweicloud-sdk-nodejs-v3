

export class Vport {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): Vport {
        this['id'] = id;
        return this;
    }
}