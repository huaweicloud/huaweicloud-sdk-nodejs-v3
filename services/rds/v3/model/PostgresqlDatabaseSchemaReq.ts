import { PostgresqlCreateSchemaReq } from './PostgresqlCreateSchemaReq';


export class PostgresqlDatabaseSchemaReq {
    private 'db_name'?: string;
    public schemas?: Array<PostgresqlCreateSchemaReq>;
    public constructor(dbName?: string, schemas?: Array<PostgresqlCreateSchemaReq>) { 
        this['db_name'] = dbName;
        this['schemas'] = schemas;
    }
    public withDbName(dbName: string): PostgresqlDatabaseSchemaReq {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemas(schemas: Array<PostgresqlCreateSchemaReq>): PostgresqlDatabaseSchemaReq {
        this['schemas'] = schemas;
        return this;
    }
}