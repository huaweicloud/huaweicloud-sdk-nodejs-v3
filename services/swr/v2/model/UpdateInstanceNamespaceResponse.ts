import { NamespaceMetadata } from './NamespaceMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceNamespaceResponse extends SdkResponse {
    private 'namespace_name'?: string;
    public metadata?: NamespaceMetadata;
    public constructor() { 
        super();
    }
    public withNamespaceName(namespaceName: string): UpdateInstanceNamespaceResponse {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withMetadata(metadata: NamespaceMetadata): UpdateInstanceNamespaceResponse {
        this['metadata'] = metadata;
        return this;
    }
}