

export class UpdateDynamicServerlessPolicyRequestBody {
    private 'min_vcpus'?: string;
    private 'max_vcpus'?: string;
    private 'need_update_nodes_compute_ability'?: boolean;
    public constructor(minVcpus?: string, maxVcpus?: string) { 
        this['min_vcpus'] = minVcpus;
        this['max_vcpus'] = maxVcpus;
    }
    public withMinVcpus(minVcpus: string): UpdateDynamicServerlessPolicyRequestBody {
        this['min_vcpus'] = minVcpus;
        return this;
    }
    public set minVcpus(minVcpus: string  | undefined) {
        this['min_vcpus'] = minVcpus;
    }
    public get minVcpus(): string | undefined {
        return this['min_vcpus'];
    }
    public withMaxVcpus(maxVcpus: string): UpdateDynamicServerlessPolicyRequestBody {
        this['max_vcpus'] = maxVcpus;
        return this;
    }
    public set maxVcpus(maxVcpus: string  | undefined) {
        this['max_vcpus'] = maxVcpus;
    }
    public get maxVcpus(): string | undefined {
        return this['max_vcpus'];
    }
    public withNeedUpdateNodesComputeAbility(needUpdateNodesComputeAbility: boolean): UpdateDynamicServerlessPolicyRequestBody {
        this['need_update_nodes_compute_ability'] = needUpdateNodesComputeAbility;
        return this;
    }
    public set needUpdateNodesComputeAbility(needUpdateNodesComputeAbility: boolean  | undefined) {
        this['need_update_nodes_compute_ability'] = needUpdateNodesComputeAbility;
    }
    public get needUpdateNodesComputeAbility(): boolean | undefined {
        return this['need_update_nodes_compute_ability'];
    }
}