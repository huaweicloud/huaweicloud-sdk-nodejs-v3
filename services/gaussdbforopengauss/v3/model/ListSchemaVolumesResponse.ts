import { SchemaVolumeResult } from './SchemaVolumeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSchemaVolumesResponse extends SdkResponse {
    private 'schema_volumes'?: Array<SchemaVolumeResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSchemaVolumes(schemaVolumes: Array<SchemaVolumeResult>): ListSchemaVolumesResponse {
        this['schema_volumes'] = schemaVolumes;
        return this;
    }
    public set schemaVolumes(schemaVolumes: Array<SchemaVolumeResult>  | undefined) {
        this['schema_volumes'] = schemaVolumes;
    }
    public get schemaVolumes(): Array<SchemaVolumeResult> | undefined {
        return this['schema_volumes'];
    }
    public withTotalCount(totalCount: number): ListSchemaVolumesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}