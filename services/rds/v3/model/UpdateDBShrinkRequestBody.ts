

export class UpdateDBShrinkRequestBody {
    private 'db_name'?: string;
    public constructor(dbName?: string) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): UpdateDBShrinkRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
}