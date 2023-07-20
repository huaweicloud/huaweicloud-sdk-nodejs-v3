

export class ObsBucket {
    public bucket?: string;
    private 'creation_date'?: string;
    private 'is_authorized'?: number;
    public constructor() { 
    }
    public withBucket(bucket: string): ObsBucket {
        this['bucket'] = bucket;
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
    public withIsAuthorized(isAuthorized: number): ObsBucket {
        this['is_authorized'] = isAuthorized;
        return this;
    }
    public set isAuthorized(isAuthorized: number  | undefined) {
        this['is_authorized'] = isAuthorized;
    }
    public get isAuthorized(): number | undefined {
        return this['is_authorized'];
    }
}