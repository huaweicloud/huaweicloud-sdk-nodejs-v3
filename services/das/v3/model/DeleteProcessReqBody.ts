

export class DeleteProcessReqBody {
    private 'db_user_id'?: string;
    private 'process_ids'?: Array<string>;
    public user?: string;
    public database?: string;
    public constructor(dbUserId?: string) { 
        this['db_user_id'] = dbUserId;
    }
    public withDbUserId(dbUserId: string): DeleteProcessReqBody {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withProcessIds(processIds: Array<string>): DeleteProcessReqBody {
        this['process_ids'] = processIds;
        return this;
    }
    public set processIds(processIds: Array<string>  | undefined) {
        this['process_ids'] = processIds;
    }
    public get processIds(): Array<string> | undefined {
        return this['process_ids'];
    }
    public withUser(user: string): DeleteProcessReqBody {
        this['user'] = user;
        return this;
    }
    public withDatabase(database: string): DeleteProcessReqBody {
        this['database'] = database;
        return this;
    }
}