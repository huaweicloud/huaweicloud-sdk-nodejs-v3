import { RestoreInstanceFromCollectionRequestBodyCollections } from './RestoreInstanceFromCollectionRequestBodyCollections';


export class RestoreInstanceFromCollectionRequestBodyRestoreCollections {
    public database?: string;
    private 'restore_database_time'?: string;
    public collections?: Array<RestoreInstanceFromCollectionRequestBodyCollections>;
    public constructor(database?: string) { 
        this['database'] = database;
    }
    public withDatabase(database: string): RestoreInstanceFromCollectionRequestBodyRestoreCollections {
        this['database'] = database;
        return this;
    }
    public withRestoreDatabaseTime(restoreDatabaseTime: string): RestoreInstanceFromCollectionRequestBodyRestoreCollections {
        this['restore_database_time'] = restoreDatabaseTime;
        return this;
    }
    public set restoreDatabaseTime(restoreDatabaseTime: string  | undefined) {
        this['restore_database_time'] = restoreDatabaseTime;
    }
    public get restoreDatabaseTime(): string | undefined {
        return this['restore_database_time'];
    }
    public withCollections(collections: Array<RestoreInstanceFromCollectionRequestBodyCollections>): RestoreInstanceFromCollectionRequestBodyRestoreCollections {
        this['collections'] = collections;
        return this;
    }
}