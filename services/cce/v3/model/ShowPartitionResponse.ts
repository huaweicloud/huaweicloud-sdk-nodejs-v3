import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartitionResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: PartitionMetadata;
    public spec?: PartitionSpec;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowPartitionResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowPartitionResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: PartitionMetadata): ShowPartitionResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PartitionSpec): ShowPartitionResponse {
        this['spec'] = spec;
        return this;
    }
}