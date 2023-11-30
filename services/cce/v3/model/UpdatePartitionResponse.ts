import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePartitionResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: PartitionMetadata;
    public spec?: PartitionSpec;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdatePartitionResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdatePartitionResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: PartitionMetadata): UpdatePartitionResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PartitionSpec): UpdatePartitionResponse {
        this['spec'] = spec;
        return this;
    }
}