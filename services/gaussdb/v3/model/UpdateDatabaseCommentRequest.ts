import { UpdateDatabaseComment } from './UpdateDatabaseComment';


export class UpdateDatabaseCommentRequest {
    public databases?: Array<UpdateDatabaseComment>;
    public constructor(databases?: Array<UpdateDatabaseComment>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<UpdateDatabaseComment>): UpdateDatabaseCommentRequest {
        this['databases'] = databases;
        return this;
    }
}