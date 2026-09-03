import { SchemaList } from './SchemaList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchemaNamesResponse extends SdkResponse {
    public data?: Array<SchemaList>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<SchemaList>): ListSchemaNamesResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListSchemaNamesResponse {
        this['total'] = total;
        return this;
    }
}