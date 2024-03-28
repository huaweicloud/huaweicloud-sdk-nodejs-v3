import { CreateTableRequestBody } from './CreateTableRequestBody';


export class CreateTableRequest {
    private 'database_name'?: string;
    public body?: CreateTableRequestBody;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): CreateTableRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withBody(body: CreateTableRequestBody): CreateTableRequest {
        this['body'] = body;
        return this;
    }
}