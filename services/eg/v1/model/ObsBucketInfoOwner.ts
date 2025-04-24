

export class ObsBucketInfoOwner {
    public displayName?: string;
    public id?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): ObsBucketInfoOwner {
        this['displayName'] = displayName;
        return this;
    }
    public withId(id: string): ObsBucketInfoOwner {
        this['id'] = id;
        return this;
    }
}