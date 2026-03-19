

export class CollectedWdrSnapshotInfoResultObsBucket {
    public name?: string;
    public type?: string;
    public url?: string;
    public port?: number;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withName(name: string): CollectedWdrSnapshotInfoResultObsBucket {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CollectedWdrSnapshotInfoResultObsBucket {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): CollectedWdrSnapshotInfoResultObsBucket {
        this['url'] = url;
        return this;
    }
    public withPort(port: number): CollectedWdrSnapshotInfoResultObsBucket {
        this['port'] = port;
        return this;
    }
    public withDomainId(domainId: string): CollectedWdrSnapshotInfoResultObsBucket {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}