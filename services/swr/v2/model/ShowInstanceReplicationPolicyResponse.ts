import { Filter } from './Filter';
import { ReplicationRegistry } from './ReplicationRegistry';
import { TriggerConfig } from './TriggerConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceReplicationPolicyResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'src_registry'?: ReplicationRegistry;
    private 'dest_registry'?: ReplicationRegistry;
    private 'dest_namespace'?: string;
    public filters?: Array<Filter>;
    private 'repo_scope_mode'?: string;
    public trigger?: TriggerConfig;
    public override?: boolean;
    public enabled?: boolean;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowInstanceReplicationPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInstanceReplicationPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowInstanceReplicationPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withSrcRegistry(srcRegistry: ReplicationRegistry): ShowInstanceReplicationPolicyResponse {
        this['src_registry'] = srcRegistry;
        return this;
    }
    public set srcRegistry(srcRegistry: ReplicationRegistry  | undefined) {
        this['src_registry'] = srcRegistry;
    }
    public get srcRegistry(): ReplicationRegistry | undefined {
        return this['src_registry'];
    }
    public withDestRegistry(destRegistry: ReplicationRegistry): ShowInstanceReplicationPolicyResponse {
        this['dest_registry'] = destRegistry;
        return this;
    }
    public set destRegistry(destRegistry: ReplicationRegistry  | undefined) {
        this['dest_registry'] = destRegistry;
    }
    public get destRegistry(): ReplicationRegistry | undefined {
        return this['dest_registry'];
    }
    public withDestNamespace(destNamespace: string): ShowInstanceReplicationPolicyResponse {
        this['dest_namespace'] = destNamespace;
        return this;
    }
    public set destNamespace(destNamespace: string  | undefined) {
        this['dest_namespace'] = destNamespace;
    }
    public get destNamespace(): string | undefined {
        return this['dest_namespace'];
    }
    public withFilters(filters: Array<Filter>): ShowInstanceReplicationPolicyResponse {
        this['filters'] = filters;
        return this;
    }
    public withRepoScopeMode(repoScopeMode: string): ShowInstanceReplicationPolicyResponse {
        this['repo_scope_mode'] = repoScopeMode;
        return this;
    }
    public set repoScopeMode(repoScopeMode: string  | undefined) {
        this['repo_scope_mode'] = repoScopeMode;
    }
    public get repoScopeMode(): string | undefined {
        return this['repo_scope_mode'];
    }
    public withTrigger(trigger: TriggerConfig): ShowInstanceReplicationPolicyResponse {
        this['trigger'] = trigger;
        return this;
    }
    public withOverride(override: boolean): ShowInstanceReplicationPolicyResponse {
        this['override'] = override;
        return this;
    }
    public withEnabled(enabled: boolean): ShowInstanceReplicationPolicyResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowInstanceReplicationPolicyResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowInstanceReplicationPolicyResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}