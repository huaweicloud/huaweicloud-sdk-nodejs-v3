import { SchemasList } from './SchemasList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchemasResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'dw_id'?: string;
    public database?: string;
    public schemas?: Array<SchemasList>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListSchemasResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDwId(dwId: string): ListSchemasResponse {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDatabase(database: string): ListSchemasResponse {
        this['database'] = database;
        return this;
    }
    public withSchemas(schemas: Array<SchemasList>): ListSchemasResponse {
        this['schemas'] = schemas;
        return this;
    }
}