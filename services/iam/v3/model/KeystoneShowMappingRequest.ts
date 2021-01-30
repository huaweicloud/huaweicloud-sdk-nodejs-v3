

export class KeystoneShowMappingRequest {
    public id: string;
    public constructor(id: any) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneShowMappingRequest {
        this['id'] = id;
        return this;
    }
}