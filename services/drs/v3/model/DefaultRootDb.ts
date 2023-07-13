

export class DefaultRootDb {
    private 'db_name'?: string | undefined;
    private 'db_encoding'?: string | undefined;
    public constructor() { 
    }
    public withDbName(dbName: string): DefaultRootDb {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withDbEncoding(dbEncoding: string): DefaultRootDb {
        this['db_encoding'] = dbEncoding;
        return this;
    }
    public set dbEncoding(dbEncoding: string | undefined) {
        this['db_encoding'] = dbEncoding;
    }
    public get dbEncoding() {
        return this['db_encoding'];
    }
}