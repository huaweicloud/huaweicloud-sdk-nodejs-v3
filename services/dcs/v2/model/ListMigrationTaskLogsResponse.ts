import { MigrationLog } from './MigrationLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMigrationTaskLogsResponse extends SdkResponse {
    private 'log_num'?: number;
    private 'migration_logs'?: Array<MigrationLog>;
    public constructor() { 
        super();
    }
    public withLogNum(logNum: number): ListMigrationTaskLogsResponse {
        this['log_num'] = logNum;
        return this;
    }
    public set logNum(logNum: number  | undefined) {
        this['log_num'] = logNum;
    }
    public get logNum(): number | undefined {
        return this['log_num'];
    }
    public withMigrationLogs(migrationLogs: Array<MigrationLog>): ListMigrationTaskLogsResponse {
        this['migration_logs'] = migrationLogs;
        return this;
    }
    public set migrationLogs(migrationLogs: Array<MigrationLog>  | undefined) {
        this['migration_logs'] = migrationLogs;
    }
    public get migrationLogs(): Array<MigrationLog> | undefined {
        return this['migration_logs'];
    }
}