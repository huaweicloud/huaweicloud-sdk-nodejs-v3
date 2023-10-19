

export class UUIDIdentifier {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UUIDIdentifier {
        this['id'] = id;
        return this;
    }
}