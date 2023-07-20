import { ListMetadatasRespSchemaList } from './ListMetadatasRespSchemaList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetadatas2Response extends SdkResponse {
    private 'schema_count'?: number;
    private 'schema_list'?: Array<ListMetadatasRespSchemaList>;
    public constructor() { 
        super();
    }
    public withSchemaCount(schemaCount: number): ListMetadatas2Response {
        this['schema_count'] = schemaCount;
        return this;
    }
    public set schemaCount(schemaCount: number  | undefined) {
        this['schema_count'] = schemaCount;
    }
    public get schemaCount(): number | undefined {
        return this['schema_count'];
    }
    public withSchemaList(schemaList: Array<ListMetadatasRespSchemaList>): ListMetadatas2Response {
        this['schema_list'] = schemaList;
        return this;
    }
    public set schemaList(schemaList: Array<ListMetadatasRespSchemaList>  | undefined) {
        this['schema_list'] = schemaList;
    }
    public get schemaList(): Array<ListMetadatasRespSchemaList> | undefined {
        return this['schema_list'];
    }
}