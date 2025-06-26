import { Filter } from './Filter';
import { ReplicationRegistry } from './ReplicationRegistry';
import { TriggerConfig } from './TriggerConfig';


export class UpdateReplicationPolicyRequestBody {
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
    public constructor(name?: string, filters?: Array<Filter>, repoScopeMode?: string, trigger?: TriggerConfig, enabled?: boolean) { 
        this['name'] = name;
        this['filters'] = filters;
        this['repo_scope_mode'] = repoScopeMode;
        this['trigger'] = trigger;
        this['enabled'] = enabled;
    }
    public withName(name: string): UpdateReplicationPolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateReplicationPolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withSrcRegistry(srcRegistry: ReplicationRegistry): UpdateReplicationPolicyRequestBody {
        this['src_registry'] = srcRegistry;
        return this;
    }
    public set srcRegistry(srcRegistry: ReplicationRegistry  | undefined) {
        this['src_registry'] = srcRegistry;
    }
    public get srcRegistry(): ReplicationRegistry | undefined {
        return this['src_registry'];
    }
    public withDestRegistry(destRegistry: ReplicationRegistry): UpdateReplicationPolicyRequestBody {
        this['dest_registry'] = destRegistry;
        return this;
    }
    public set destRegistry(destRegistry: ReplicationRegistry  | undefined) {
        this['dest_registry'] = destRegistry;
    }
    public get destRegistry(): ReplicationRegistry | undefined {
        return this['dest_registry'];
    }
    public withDestNamespace(destNamespace: string): UpdateReplicationPolicyRequestBody {
        this['dest_namespace'] = destNamespace;
        return this;
    }
    public set destNamespace(destNamespace: string  | undefined) {
        this['dest_namespace'] = destNamespace;
    }
    public get destNamespace(): string | undefined {
        return this['dest_namespace'];
    }
    public withFilters(filters: Array<Filter>): UpdateReplicationPolicyRequestBody {
        this['filters'] = filters;
        return this;
    }
    public withRepoScopeMode(repoScopeMode: string): UpdateReplicationPolicyRequestBody {
        this['repo_scope_mode'] = repoScopeMode;
        return this;
    }
    public set repoScopeMode(repoScopeMode: string  | undefined) {
        this['repo_scope_mode'] = repoScopeMode;
    }
    public get repoScopeMode(): string | undefined {
        return this['repo_scope_mode'];
    }
    public withTrigger(trigger: TriggerConfig): UpdateReplicationPolicyRequestBody {
        this['trigger'] = trigger;
        return this;
    }
    public withOverride(override: boolean): UpdateReplicationPolicyRequestBody {
        this['override'] = override;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateReplicationPolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}