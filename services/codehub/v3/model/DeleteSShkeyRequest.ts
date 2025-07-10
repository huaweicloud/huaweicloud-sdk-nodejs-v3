

export class DeleteSShkeyRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteSShkeyRequest {
        this['id'] = id;
        return this;
    }
}