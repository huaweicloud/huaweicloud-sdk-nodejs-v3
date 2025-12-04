import { NamespaceMetadata } from './NamespaceMetadata';
import { UpdateCVEAllowlistRequest } from './UpdateCVEAllowlistRequest';


export class UpdateNamespaceRequestBody {
    public metadata?: NamespaceMetadata;
    private 'cve_allowlist'?: UpdateCVEAllowlistRequest;
    public constructor(metadata?: NamespaceMetadata) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: NamespaceMetadata): UpdateNamespaceRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withCveAllowlist(cveAllowlist: UpdateCVEAllowlistRequest): UpdateNamespaceRequestBody {
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