import { RestoreInfo } from './RestoreInfo';


export class LogReplayDatabaseReq {
    public databases?: Array<RestoreInfo>;
    public constructor(databases?: Array<RestoreInfo>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<RestoreInfo>): LogReplayDatabaseReq {
        this['databases'] = databases;
        return this;
    }
}