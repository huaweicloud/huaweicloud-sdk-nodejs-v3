import { GaussDBforOpenGaussCreateSchemaReq } from './GaussDBforOpenGaussCreateSchemaReq';


export class GaussDBforOpenGaussDatabaseSchemaReq {
    private 'db_name'?: string;
    public schemas?: Array<GaussDBforOpenGaussCreateSchemaReq>;
    public constructor(dbName?: string, schemas?: Array<GaussDBforOpenGaussCreateSchemaReq>) { 
        this['db_name'] = dbName;
        this['schemas'] = schemas;
    }
    public withDbName(dbName: string): GaussDBforOpenGaussDatabaseSchemaReq {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemas(schemas: Array<GaussDBforOpenGaussCreateSchemaReq>): GaussDBforOpenGaussDatabaseSchemaReq {
        this['schemas'] = schemas;
        return this;
    }
}