

export class PrePaidServerSecurityGroup {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): PrePaidServerSecurityGroup {
        this['id'] = id;
        return this;
    }
}