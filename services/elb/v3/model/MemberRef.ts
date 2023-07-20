

export class MemberRef {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): MemberRef {
        this['id'] = id;
        return this;
    }
}