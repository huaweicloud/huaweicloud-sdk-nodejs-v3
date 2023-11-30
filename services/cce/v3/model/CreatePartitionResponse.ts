import { PartitionMetadata } from './PartitionMetadata';
import { PartitionSpec } from './PartitionSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePartitionResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: PartitionMetadata;
    public spec?: PartitionSpec;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreatePartitionResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreatePartitionResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: PartitionMetadata): CreatePartitionResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PartitionSpec): CreatePartitionResponse {
        this['spec'] = spec;
        return this;
    }
}