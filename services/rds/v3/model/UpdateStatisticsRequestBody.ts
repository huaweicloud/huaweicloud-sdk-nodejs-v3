

export class UpdateStatisticsRequestBody {
    private 'db_name'?: string;
    public constructor() { 
    }
    public withDbName(dbName: string): UpdateStatisticsRequestBody {
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