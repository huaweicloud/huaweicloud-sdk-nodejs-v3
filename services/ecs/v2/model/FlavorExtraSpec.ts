

export class FlavorExtraSpec {
    private 'ecs:performancetype'?: string;
    private 'hw:numa_nodes'?: string;
    private 'resource_type'?: string;
    private 'hpet_support'?: string;
    private 'instance_vnic:type'?: string;
    private 'instance_vnic:instance_bandwidth'?: string;
    private 'instance_vnic:max_count'?: string;
    private 'quota:local_disk'?: string;
    private 'quota:nvme_ssd'?: string;
    private 'extra_spec:io:persistent_grant'?: string;
    private 'ecs:generation'?: string;
    private 'ecs:virtualization_env_types'?: string;
    private 'pci_passthrough:enable_gpu'?: string;
    private 'pci_passthrough:gpu_specs'?: string;
    private 'pci_passthrough:alias'?: string;
    private 'cond:operation:status'?: string;
    private 'cond:operation:az'?: string;
    private 'quota:max_rate'?: string;
    private 'quota:min_rate'?: string;
    private 'quota:max_pps'?: string;
    private 'cond:operation:charge'?: string;
    private 'cond:operation:charge:stop'?: string;
    private 'cond:spot:operation:az'?: string;
    private 'cond:operation:roles'?: string;
    private 'cond:spot:operation:status'?: string;
    private 'cond:network'?: string;
    private 'cond:storage'?: string;
    private 'cond:storage:type'?: string;
    private 'cond:compute:live_resizable'?: string;
    private 'cond:compute'?: string;
    private 'info:gpu:name'?: string;
    private 'info:cpu:name'?: string;
    private 'quota:gpu'?: string;
    private 'quota:vif_max_num'?: string;
    private 'quota:sub_network_interface_max_num'?: string;
    private 'ecs:instance_architecture'?: string;
    public constructor() { 
    }
    public withEcsPerformancetype(ecsPerformancetype: string): FlavorExtraSpec {
        this['ecs:performancetype'] = ecsPerformancetype;
        return this;
    }
    public set ecsPerformancetype(ecsPerformancetype: string  | undefined) {
        this['ecs:performancetype'] = ecsPerformancetype;
    }
    public get ecsPerformancetype(): string | undefined {
        return this['ecs:performancetype'];
    }
    public withHwNumaNodes(hwNumaNodes: string): FlavorExtraSpec {
        this['hw:numa_nodes'] = hwNumaNodes;
        return this;
    }
    public set hwNumaNodes(hwNumaNodes: string  | undefined) {
        this['hw:numa_nodes'] = hwNumaNodes;
    }
    public get hwNumaNodes(): string | undefined {
        return this['hw:numa_nodes'];
    }
    public withResourceType(resourceType: string): FlavorExtraSpec {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withHpetSupport(hpetSupport: string): FlavorExtraSpec {
        this['hpet_support'] = hpetSupport;
        return this;
    }
    public set hpetSupport(hpetSupport: string  | undefined) {
        this['hpet_support'] = hpetSupport;
    }
    public get hpetSupport(): string | undefined {
        return this['hpet_support'];
    }
    public withInstanceVnicType(instanceVnicType: string): FlavorExtraSpec {
        this['instance_vnic:type'] = instanceVnicType;
        return this;
    }
    public set instanceVnicType(instanceVnicType: string  | undefined) {
        this['instance_vnic:type'] = instanceVnicType;
    }
    public get instanceVnicType(): string | undefined {
        return this['instance_vnic:type'];
    }
    public withInstanceVnicInstanceBandwidth(instanceVnicInstanceBandwidth: string): FlavorExtraSpec {
        this['instance_vnic:instance_bandwidth'] = instanceVnicInstanceBandwidth;
        return this;
    }
    public set instanceVnicInstanceBandwidth(instanceVnicInstanceBandwidth: string  | undefined) {
        this['instance_vnic:instance_bandwidth'] = instanceVnicInstanceBandwidth;
    }
    public get instanceVnicInstanceBandwidth(): string | undefined {
        return this['instance_vnic:instance_bandwidth'];
    }
    public withInstanceVnicMaxCount(instanceVnicMaxCount: string): FlavorExtraSpec {
        this['instance_vnic:max_count'] = instanceVnicMaxCount;
        return this;
    }
    public set instanceVnicMaxCount(instanceVnicMaxCount: string  | undefined) {
        this['instance_vnic:max_count'] = instanceVnicMaxCount;
    }
    public get instanceVnicMaxCount(): string | undefined {
        return this['instance_vnic:max_count'];
    }
    public withQuotaLocalDisk(quotaLocalDisk: string): FlavorExtraSpec {
        this['quota:local_disk'] = quotaLocalDisk;
        return this;
    }
    public set quotaLocalDisk(quotaLocalDisk: string  | undefined) {
        this['quota:local_disk'] = quotaLocalDisk;
    }
    public get quotaLocalDisk(): string | undefined {
        return this['quota:local_disk'];
    }
    public withQuotaNvmeSsd(quotaNvmeSsd: string): FlavorExtraSpec {
        this['quota:nvme_ssd'] = quotaNvmeSsd;
        return this;
    }
    public set quotaNvmeSsd(quotaNvmeSsd: string  | undefined) {
        this['quota:nvme_ssd'] = quotaNvmeSsd;
    }
    public get quotaNvmeSsd(): string | undefined {
        return this['quota:nvme_ssd'];
    }
    public withExtraSpecIoPersistentGrant(extraSpecIoPersistentGrant: string): FlavorExtraSpec {
        this['extra_spec:io:persistent_grant'] = extraSpecIoPersistentGrant;
        return this;
    }
    public set extraSpecIoPersistentGrant(extraSpecIoPersistentGrant: string  | undefined) {
        this['extra_spec:io:persistent_grant'] = extraSpecIoPersistentGrant;
    }
    public get extraSpecIoPersistentGrant(): string | undefined {
        return this['extra_spec:io:persistent_grant'];
    }
    public withEcsGeneration(ecsGeneration: string): FlavorExtraSpec {
        this['ecs:generation'] = ecsGeneration;
        return this;
    }
    public set ecsGeneration(ecsGeneration: string  | undefined) {
        this['ecs:generation'] = ecsGeneration;
    }
    public get ecsGeneration(): string | undefined {
        return this['ecs:generation'];
    }
    public withEcsVirtualizationEnvTypes(ecsVirtualizationEnvTypes: string): FlavorExtraSpec {
        this['ecs:virtualization_env_types'] = ecsVirtualizationEnvTypes;
        return this;
    }
    public set ecsVirtualizationEnvTypes(ecsVirtualizationEnvTypes: string  | undefined) {
        this['ecs:virtualization_env_types'] = ecsVirtualizationEnvTypes;
    }
    public get ecsVirtualizationEnvTypes(): string | undefined {
        return this['ecs:virtualization_env_types'];
    }
    public withPciPassthroughEnableGpu(pciPassthroughEnableGpu: string): FlavorExtraSpec {
        this['pci_passthrough:enable_gpu'] = pciPassthroughEnableGpu;
        return this;
    }
    public set pciPassthroughEnableGpu(pciPassthroughEnableGpu: string  | undefined) {
        this['pci_passthrough:enable_gpu'] = pciPassthroughEnableGpu;
    }
    public get pciPassthroughEnableGpu(): string | undefined {
        return this['pci_passthrough:enable_gpu'];
    }
    public withPciPassthroughGpuSpecs(pciPassthroughGpuSpecs: string): FlavorExtraSpec {
        this['pci_passthrough:gpu_specs'] = pciPassthroughGpuSpecs;
        return this;
    }
    public set pciPassthroughGpuSpecs(pciPassthroughGpuSpecs: string  | undefined) {
        this['pci_passthrough:gpu_specs'] = pciPassthroughGpuSpecs;
    }
    public get pciPassthroughGpuSpecs(): string | undefined {
        return this['pci_passthrough:gpu_specs'];
    }
    public withPciPassthroughAlias(pciPassthroughAlias: string): FlavorExtraSpec {
        this['pci_passthrough:alias'] = pciPassthroughAlias;
        return this;
    }
    public set pciPassthroughAlias(pciPassthroughAlias: string  | undefined) {
        this['pci_passthrough:alias'] = pciPassthroughAlias;
    }
    public get pciPassthroughAlias(): string | undefined {
        return this['pci_passthrough:alias'];
    }
    public withCondOperationStatus(condOperationStatus: string): FlavorExtraSpec {
        this['cond:operation:status'] = condOperationStatus;
        return this;
    }
    public set condOperationStatus(condOperationStatus: string  | undefined) {
        this['cond:operation:status'] = condOperationStatus;
    }
    public get condOperationStatus(): string | undefined {
        return this['cond:operation:status'];
    }
    public withCondOperationAz(condOperationAz: string): FlavorExtraSpec {
        this['cond:operation:az'] = condOperationAz;
        return this;
    }
    public set condOperationAz(condOperationAz: string  | undefined) {
        this['cond:operation:az'] = condOperationAz;
    }
    public get condOperationAz(): string | undefined {
        return this['cond:operation:az'];
    }
    public withQuotaMaxRate(quotaMaxRate: string): FlavorExtraSpec {
        this['quota:max_rate'] = quotaMaxRate;
        return this;
    }
    public set quotaMaxRate(quotaMaxRate: string  | undefined) {
        this['quota:max_rate'] = quotaMaxRate;
    }
    public get quotaMaxRate(): string | undefined {
        return this['quota:max_rate'];
    }
    public withQuotaMinRate(quotaMinRate: string): FlavorExtraSpec {
        this['quota:min_rate'] = quotaMinRate;
        return this;
    }
    public set quotaMinRate(quotaMinRate: string  | undefined) {
        this['quota:min_rate'] = quotaMinRate;
    }
    public get quotaMinRate(): string | undefined {
        return this['quota:min_rate'];
    }
    public withQuotaMaxPps(quotaMaxPps: string): FlavorExtraSpec {
        this['quota:max_pps'] = quotaMaxPps;
        return this;
    }
    public set quotaMaxPps(quotaMaxPps: string  | undefined) {
        this['quota:max_pps'] = quotaMaxPps;
    }
    public get quotaMaxPps(): string | undefined {
        return this['quota:max_pps'];
    }
    public withCondOperationCharge(condOperationCharge: string): FlavorExtraSpec {
        this['cond:operation:charge'] = condOperationCharge;
        return this;
    }
    public set condOperationCharge(condOperationCharge: string  | undefined) {
        this['cond:operation:charge'] = condOperationCharge;
    }
    public get condOperationCharge(): string | undefined {
        return this['cond:operation:charge'];
    }
    public withCondOperationChargeStop(condOperationChargeStop: string): FlavorExtraSpec {
        this['cond:operation:charge:stop'] = condOperationChargeStop;
        return this;
    }
    public set condOperationChargeStop(condOperationChargeStop: string  | undefined) {
        this['cond:operation:charge:stop'] = condOperationChargeStop;
    }
    public get condOperationChargeStop(): string | undefined {
        return this['cond:operation:charge:stop'];
    }
    public withCondSpotOperationAz(condSpotOperationAz: string): FlavorExtraSpec {
        this['cond:spot:operation:az'] = condSpotOperationAz;
        return this;
    }
    public set condSpotOperationAz(condSpotOperationAz: string  | undefined) {
        this['cond:spot:operation:az'] = condSpotOperationAz;
    }
    public get condSpotOperationAz(): string | undefined {
        return this['cond:spot:operation:az'];
    }
    public withCondOperationRoles(condOperationRoles: string): FlavorExtraSpec {
        this['cond:operation:roles'] = condOperationRoles;
        return this;
    }
    public set condOperationRoles(condOperationRoles: string  | undefined) {
        this['cond:operation:roles'] = condOperationRoles;
    }
    public get condOperationRoles(): string | undefined {
        return this['cond:operation:roles'];
    }
    public withCondSpotOperationStatus(condSpotOperationStatus: string): FlavorExtraSpec {
        this['cond:spot:operation:status'] = condSpotOperationStatus;
        return this;
    }
    public set condSpotOperationStatus(condSpotOperationStatus: string  | undefined) {
        this['cond:spot:operation:status'] = condSpotOperationStatus;
    }
    public get condSpotOperationStatus(): string | undefined {
        return this['cond:spot:operation:status'];
    }
    public withCondNetwork(condNetwork: string): FlavorExtraSpec {
        this['cond:network'] = condNetwork;
        return this;
    }
    public set condNetwork(condNetwork: string  | undefined) {
        this['cond:network'] = condNetwork;
    }
    public get condNetwork(): string | undefined {
        return this['cond:network'];
    }
    public withCondStorage(condStorage: string): FlavorExtraSpec {
        this['cond:storage'] = condStorage;
        return this;
    }
    public set condStorage(condStorage: string  | undefined) {
        this['cond:storage'] = condStorage;
    }
    public get condStorage(): string | undefined {
        return this['cond:storage'];
    }
    public withCondStorageType(condStorageType: string): FlavorExtraSpec {
        this['cond:storage:type'] = condStorageType;
        return this;
    }
    public set condStorageType(condStorageType: string  | undefined) {
        this['cond:storage:type'] = condStorageType;
    }
    public get condStorageType(): string | undefined {
        return this['cond:storage:type'];
    }
    public withCondComputeLiveResizable(condComputeLiveResizable: string): FlavorExtraSpec {
        this['cond:compute:live_resizable'] = condComputeLiveResizable;
        return this;
    }
    public set condComputeLiveResizable(condComputeLiveResizable: string  | undefined) {
        this['cond:compute:live_resizable'] = condComputeLiveResizable;
    }
    public get condComputeLiveResizable(): string | undefined {
        return this['cond:compute:live_resizable'];
    }
    public withCondCompute(condCompute: string): FlavorExtraSpec {
        this['cond:compute'] = condCompute;
        return this;
    }
    public set condCompute(condCompute: string  | undefined) {
        this['cond:compute'] = condCompute;
    }
    public get condCompute(): string | undefined {
        return this['cond:compute'];
    }
    public withInfoGpuName(infoGpuName: string): FlavorExtraSpec {
        this['info:gpu:name'] = infoGpuName;
        return this;
    }
    public set infoGpuName(infoGpuName: string  | undefined) {
        this['info:gpu:name'] = infoGpuName;
    }
    public get infoGpuName(): string | undefined {
        return this['info:gpu:name'];
    }
    public withInfoCpuName(infoCpuName: string): FlavorExtraSpec {
        this['info:cpu:name'] = infoCpuName;
        return this;
    }
    public set infoCpuName(infoCpuName: string  | undefined) {
        this['info:cpu:name'] = infoCpuName;
    }
    public get infoCpuName(): string | undefined {
        return this['info:cpu:name'];
    }
    public withQuotaGpu(quotaGpu: string): FlavorExtraSpec {
        this['quota:gpu'] = quotaGpu;
        return this;
    }
    public set quotaGpu(quotaGpu: string  | undefined) {
        this['quota:gpu'] = quotaGpu;
    }
    public get quotaGpu(): string | undefined {
        return this['quota:gpu'];
    }
    public withQuotaVifMaxNum(quotaVifMaxNum: string): FlavorExtraSpec {
        this['quota:vif_max_num'] = quotaVifMaxNum;
        return this;
    }
    public set quotaVifMaxNum(quotaVifMaxNum: string  | undefined) {
        this['quota:vif_max_num'] = quotaVifMaxNum;
    }
    public get quotaVifMaxNum(): string | undefined {
        return this['quota:vif_max_num'];
    }
    public withQuotaSubNetworkInterfaceMaxNum(quotaSubNetworkInterfaceMaxNum: string): FlavorExtraSpec {
        this['quota:sub_network_interface_max_num'] = quotaSubNetworkInterfaceMaxNum;
        return this;
    }
    public set quotaSubNetworkInterfaceMaxNum(quotaSubNetworkInterfaceMaxNum: string  | undefined) {
        this['quota:sub_network_interface_max_num'] = quotaSubNetworkInterfaceMaxNum;
    }
    public get quotaSubNetworkInterfaceMaxNum(): string | undefined {
        return this['quota:sub_network_interface_max_num'];
    }
    public withEcsInstanceArchitecture(ecsInstanceArchitecture: string): FlavorExtraSpec {
        this['ecs:instance_architecture'] = ecsInstanceArchitecture;
        return this;
    }
    public set ecsInstanceArchitecture(ecsInstanceArchitecture: string  | undefined) {
        this['ecs:instance_architecture'] = ecsInstanceArchitecture;
    }
    public get ecsInstanceArchitecture(): string | undefined {
        return this['ecs:instance_architecture'];
    }
}