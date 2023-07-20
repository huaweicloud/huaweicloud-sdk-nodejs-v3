

export class TargetRootDb {
    private 'db_name'?: string;
    private 'db_encoding'?: string;
    public constructor() { 
    }
    public withDbName(dbName: string): TargetRootDb {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbEncoding(dbEncoding: string): TargetRootDb {
        this['db_encoding'] = dbEncoding;
        return this;
    }
    public set dbEncoding(dbEncoding: string  | undefined) {
        this['db_encoding'] = dbEncoding;
    }
    public get dbEncoding(): string | undefined {
        return this['db_encoding'];
    }
}