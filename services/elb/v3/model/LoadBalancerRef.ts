

export class LoadBalancerRef {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): LoadBalancerRef {
        this['id'] = id;
        return this;
    }
}