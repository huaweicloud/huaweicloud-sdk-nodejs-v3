

export class ShowResolverQueryLogConfigRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowResolverQueryLogConfigRequest {
        this['id'] = id;
        return this;
    }
}