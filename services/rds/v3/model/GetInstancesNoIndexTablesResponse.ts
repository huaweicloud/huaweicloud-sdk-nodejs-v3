import { Table } from './Table';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetInstancesNoIndexTablesResponse extends SdkResponse {
    public tables?: Array<Table>;
    public constructor() { 
        super();
    }
    public withTables(tables: Array<Table>): GetInstancesNoIndexTablesResponse {
        this['tables'] = tables;
        return this;
    }
}