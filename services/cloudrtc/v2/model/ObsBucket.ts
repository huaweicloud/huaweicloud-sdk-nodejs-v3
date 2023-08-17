

export class ObsBucket {
    public bucket?: string;
    public location?: string;
    private 'creation_date'?: string;
    private 'is_authorized'?: boolean;
    public constructor(bucket?: string, location?: string, creationDate?: string, isAuthorized?: boolean) { 
        this['bucket'] = bucket;
        this['location'] = location;
        this['creation_date'] = creationDate;
        this['is_authorized'] = isAuthorized;
    }
    public withBucket(bucket: string): ObsBucket {
        this['bucket'] = bucket;
        return this;
    }
    public withLocation(location: string): ObsBucket {
        this['location'] = location;
        return this;
    }
    public withCreationDate(creationDate: string): ObsBucket {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
    public withIsAuthorized(isAuthorized: boolean): ObsBucket {
        this['is_authorized'] = isAuthorized;
        return this;
    }
    public set isAuthorized(isAuthorized: boolean  | undefined) {
        this['is_authorized'] = isAuthorized;
    }
    public get isAuthorized(): boolean | undefined {
        return this['is_authorized'];
    }
}