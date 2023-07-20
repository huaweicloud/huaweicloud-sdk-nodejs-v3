import { RevokeRequestBodyUsers } from './RevokeRequestBodyUsers';


export class RevokeRequestBody {
    private 'db_name'?: string;
    public users?: Array<RevokeRequestBodyUsers>;
    public constructor(dbName?: string, users?: Array<RevokeRequestBodyUsers>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): RevokeRequestBody {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<RevokeRequestBodyUsers>): RevokeRequestBody {
        this['users'] = users;
        return this;
    }
}