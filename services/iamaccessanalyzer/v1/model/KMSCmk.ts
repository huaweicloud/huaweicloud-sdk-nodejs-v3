

export class KMSCmk {
    public grants?: string;
    public constructor(grants?: string) { 
        this['grants'] = grants;
    }
    public withGrants(grants: string): KMSCmk {
        this['grants'] = grants;
        return this;
    }
}