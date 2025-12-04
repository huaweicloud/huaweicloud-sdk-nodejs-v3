

export class RespFlavor {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): RespFlavor {
        this['id'] = id;
        return this;
    }
}