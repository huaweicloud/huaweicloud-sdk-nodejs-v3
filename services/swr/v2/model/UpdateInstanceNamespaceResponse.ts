import { NamespaceMetadata } from './NamespaceMetadata';
import { UpdateCVEAllowlistRequest } from './UpdateCVEAllowlistRequest';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceNamespaceResponse extends SdkResponse {
    private 'namespace_name'?: string;
    public metadata?: NamespaceMetadata;
    private 'cve_allowlist'?: UpdateCVEAllowlistRequest;
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
    public withCveAllowlist(cveAllowlist: UpdateCVEAllowlistRequest): UpdateInstanceNamespaceResponse {
        this['cve_allowlist'] = cveAllowlist;
        return this;
    }
    public set cveAllowlist(cveAllowlist: UpdateCVEAllowlistRequest  | undefined) {
        this['cve_allowlist'] = cveAllowlist;
    }
    public get cveAllowlist(): UpdateCVEAllowlistRequest | undefined {
        return this['cve_allowlist'];
    }
}