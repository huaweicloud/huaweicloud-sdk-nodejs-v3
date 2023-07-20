

export class BandwidthRef {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BandwidthRef {
        this['id'] = id;
        return this;
    }
}