import { CreateDatabaseDetailResponses } from './CreateDatabaseDetailResponses';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDatabaseResponse extends SdkResponse {
    public databases?: Array<CreateDatabaseDetailResponses>;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<CreateDatabaseDetailResponses>): CreateDatabaseResponse {
        this['databases'] = databases;
        return this;
    }
}