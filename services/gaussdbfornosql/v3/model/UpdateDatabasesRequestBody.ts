

export class UpdateDatabasesRequestBody {
    public action?: string;
    private 'db_id'?: number;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UpdateDatabasesRequestBody {
        this['action'] = action;
        return this;
    }
    public withDbId(dbId: number): UpdateDatabasesRequestBody {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: number  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): number | undefined {
        return this['db_id'];
    }
}