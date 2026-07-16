import { NetworkMetadata } from './NetworkMetadata';
import { NetworkSpec } from './NetworkSpec';
import { NetworkStatus } from './NetworkStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteNetworkResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadata;
    public spec?: NetworkSpec;
    public status?: NetworkStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): DeleteNetworkResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): DeleteNetworkResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadata): DeleteNetworkResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): DeleteNetworkResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NetworkStatus): DeleteNetworkResponse {
        this['status'] = status;
        return this;
    }
}