import { GaussDBforOpenGaussUserWithPrivilege } from './GaussDBforOpenGaussUserWithPrivilege';


export class GaussDBforOpenGaussGrantRequest {
    private 'db_name'?: string;
    public users?: Array<GaussDBforOpenGaussUserWithPrivilege>;
    public constructor(dbName?: string, users?: Array<GaussDBforOpenGaussUserWithPrivilege>) { 
        this['db_name'] = dbName;
        this['users'] = users;
    }
    public withDbName(dbName: string): GaussDBforOpenGaussGrantRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withUsers(users: Array<GaussDBforOpenGaussUserWithPrivilege>): GaussDBforOpenGaussGrantRequest {
        this['users'] = users;
        return this;
    }
}