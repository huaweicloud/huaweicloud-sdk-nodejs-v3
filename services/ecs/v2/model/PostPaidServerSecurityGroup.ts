

export class PostPaidServerSecurityGroup {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): PostPaidServerSecurityGroup {
        this['id'] = id;
        return this;
    }
}