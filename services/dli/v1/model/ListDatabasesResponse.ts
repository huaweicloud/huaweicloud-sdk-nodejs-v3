import { Database } from './Database';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabasesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'database_count'?: number;
    public databases?: Array<Database>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListDatabasesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListDatabasesResponse {
        this['message'] = message;
        return this;
    }
    public withDatabaseCount(databaseCount: number): ListDatabasesResponse {
        this['database_count'] = databaseCount;
        return this;
    }
    public set databaseCount(databaseCount: number  | undefined) {
        this['database_count'] = databaseCount;
    }
    public get databaseCount(): number | undefined {
        return this['database_count'];
    }
    public withDatabases(databases: Array<Database>): ListDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
}