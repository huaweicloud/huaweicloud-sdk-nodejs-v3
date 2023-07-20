

export class ProtocolIdInfo {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ProtocolIdInfo {
        this['id'] = id;
        return this;
    }
}