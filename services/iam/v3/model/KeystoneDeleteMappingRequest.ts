

export class KeystoneDeleteMappingRequest {
    public id: string;
    public constructor(id: any) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneDeleteMappingRequest {
        this['id'] = id;
        return this;
    }
}