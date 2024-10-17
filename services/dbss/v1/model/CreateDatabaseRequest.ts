import { CreateDatabaseRequestDatabase } from './CreateDatabaseRequestDatabase';


export class CreateDatabaseRequest {
    public database?: CreateDatabaseRequestDatabase;
    public constructor(database?: CreateDatabaseRequestDatabase) { 
        this['database'] = database;
    }
    public withDatabase(database: CreateDatabaseRequestDatabase): CreateDatabaseRequest {
        this['database'] = database;
        return this;
    }
}