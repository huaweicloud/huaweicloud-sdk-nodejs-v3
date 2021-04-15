

export class IdpIdInfo {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): IdpIdInfo {
        this['id'] = id;
        return this;
    }
}