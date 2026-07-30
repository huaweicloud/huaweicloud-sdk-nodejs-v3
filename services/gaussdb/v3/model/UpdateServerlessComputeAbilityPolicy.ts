

export class UpdateServerlessComputeAbilityPolicy {
    private 'min_vcpus'?: string;
    private 'max_vcpus'?: string;
    private 'need_update_nodes_compute_ability'?: boolean;
    private 'scale_out_switch'?: boolean;
    private 'max_readonly_node_count'?: number;
    private 'min_readonly_node_count'?: number;
    public constructor(minVcpus?: string, maxVcpus?: string) { 
        this['min_vcpus'] = minVcpus;
        this['max_vcpus'] = maxVcpus;
    }
    public withMinVcpus(minVcpus: string): UpdateServerlessComputeAbilityPolicy {
        this['min_vcpus'] = minVcpus;
        return this;
    }
    public set minVcpus(minVcpus: string  | undefined) {
        this['min_vcpus'] = minVcpus;
    }
    public get minVcpus(): string | undefined {
        return this['min_vcpus'];
    }
    public withMaxVcpus(maxVcpus: string): UpdateServerlessComputeAbilityPolicy {
        this['max_vcpus'] = maxVcpus;
        return this;
    }
    public set maxVcpus(maxVcpus: string  | undefined) {
        this['max_vcpus'] = maxVcpus;
    }
    public get maxVcpus(): string | undefined {
        return this['max_vcpus'];
    }
    public withNeedUpdateNodesComputeAbility(needUpdateNodesComputeAbility: boolean): UpdateServerlessComputeAbilityPolicy {
        this['need_update_nodes_compute_ability'] = needUpdateNodesComputeAbility;
        return this;
    }
    public set needUpdateNodesComputeAbility(needUpdateNodesComputeAbility: boolean  | undefined) {
        this['need_update_nodes_compute_ability'] = needUpdateNodesComputeAbility;
    }
    public get needUpdateNodesComputeAbility(): boolean | undefined {
        return this['need_update_nodes_compute_ability'];
    }
    public withScaleOutSwitch(scaleOutSwitch: boolean): UpdateServerlessComputeAbilityPolicy {
        this['scale_out_switch'] = scaleOutSwitch;
        return this;
    }
    public set scaleOutSwitch(scaleOutSwitch: boolean  | undefined) {
        this['scale_out_switch'] = scaleOutSwitch;
    }
    public get scaleOutSwitch(): boolean | undefined {
        return this['scale_out_switch'];
    }
    public withMaxReadonlyNodeCount(maxReadonlyNodeCount: number): UpdateServerlessComputeAbilityPolicy {
        this['max_readonly_node_count'] = maxReadonlyNodeCount;
        return this;
    }
    public set maxReadonlyNodeCount(maxReadonlyNodeCount: number  | undefined) {
        this['max_readonly_node_count'] = maxReadonlyNodeCount;
    }
    public get maxReadonlyNodeCount(): number | undefined {
        return this['max_readonly_node_count'];
    }
    public withMinReadonlyNodeCount(minReadonlyNodeCount: number): UpdateServerlessComputeAbilityPolicy {
        this['min_readonly_node_count'] = minReadonlyNodeCount;
        return this;
    }
    public set minReadonlyNodeCount(minReadonlyNodeCount: number  | undefined) {
        this['min_readonly_node_count'] = minReadonlyNodeCount;
    }
    public get minReadonlyNodeCount(): number | undefined {
        return this['min_readonly_node_count'];
    }
}