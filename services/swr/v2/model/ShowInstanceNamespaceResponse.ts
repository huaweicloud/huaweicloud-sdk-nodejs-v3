import { CVEAllowlist } from './CVEAllowlist';
import { NamespaceMetadata } from './NamespaceMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceNamespaceResponse extends SdkResponse {
    public name?: string;
    public metadata?: NamespaceMetadata;
    private 'namespace_id'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'repo_count'?: number;
    private 'cve_allowlist'?: CVEAllowlist;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowInstanceNamespaceResponse {
        this['name'] = name;
        return this;
    }
    public withMetadata(metadata: NamespaceMetadata): ShowInstanceNamespaceResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withNamespaceId(namespaceId: number): ShowInstanceNamespaceResponse {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withCreatedAt(createdAt: string): ShowInstanceNamespaceResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowInstanceNamespaceResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withRepoCount(repoCount: number): ShowInstanceNamespaceResponse {
        this['repo_count'] = repoCount;
        return this;
    }
    public set repoCount(repoCount: number  | undefined) {
        this['repo_count'] = repoCount;
    }
    public get repoCount(): number | undefined {
        return this['repo_count'];
    }
    public withCveAllowlist(cveAllowlist: CVEAllowlist): ShowInstanceNamespaceResponse {
        this['cve_allowlist'] = cveAllowlist;
        return this;
    }
    public set cveAllowlist(cveAllowlist: CVEAllowlist  | undefined) {
        this['cve_allowlist'] = cveAllowlist;
    }
    public get cveAllowlist(): CVEAllowlist | undefined {
        return this['cve_allowlist'];
    }
}