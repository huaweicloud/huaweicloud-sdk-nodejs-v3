import { SchemaInfo } from './SchemaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchemasResponse extends SdkResponse {
    public schemas?: Array<SchemaInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withSchemas(schemas: Array<SchemaInfo>): ListSchemasResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withCount(count: number): ListSchemasResponse {
        this['count'] = count;
        return this;
    }
}