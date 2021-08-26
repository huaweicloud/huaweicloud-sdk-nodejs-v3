

export class FlavorExtraSpec {
    private 'ecs:performancetype'?: string | undefined;
    private 'hw:numa_nodes'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'hpet_support'?: string | undefined;
    private 'instance_vnic:type'?: string | undefined;
    private 'instance_vnic:instance_bandwidth'?: string | undefined;
    private 'instance_vnic:max_count'?: string | undefined;
    private 'quota:local_disk'?: string | undefined;
    private 'quota:nvme_ssd'?: string | undefined;
    private 'extra_spec:io:persistent_grant'?: string | undefined;
    private 'ecs:generation'?: string | undefined;
    private 'ecs:virtualization_env_types'?: string | undefined;
    private 'pci_passthrough:enable_gpu'?: string | undefined;
    private 'pci_passthrough:gpu_specs'?: string | undefined;
    private 'pci_passthrough:alias'?: string | undefined;
    private 'cond:operation:status'?: string | undefined;
    private 'cond:operation:az'?: string | undefined;
    private 'quota:max_rate'?: string | undefined;
    private 'quota:min_rate'?: string | undefined;
    private 'quota:max_pps'?: string | undefined;
    private 'cond:operation:charge'?: string | undefined;
    private 'cond:operation:charge:stop'?: string | undefined;
    private 'cond:spot:operation:az'?: string | undefined;
    private 'cond:operation:roles'?: string | undefined;
    private 'cond:spot:operation:status'?: string | undefined;
    private 'cond:network'?: string | undefined;
    private 'cond:storage'?: string | undefined;
    private 'cond:compute:live_resizable'?: string | undefined;
    private 'cond:compute'?: string | undefined;
    private 'info:gpu:name'?: string | undefined;
    private 'info:cpu:name'?: string | undefined;
    private 'quota:gpu'?: string | undefined;
    private 'ecs:instance_architecture'?: string | undefined;
    public constructor() { 
    }
    public withEcsPerformancetype(ecsPerformancetype: string): FlavorExtraSpec {
        this['ecs:performancetype'] = ecsPerformancetype;
        return this;
    }
    public set ecsPerformancetype(ecsPerformancetype: string | undefined) {
        this['ecs:performancetype'] = ecsPerformancetype;
    }
    public get ecsPerformancetype() {
        return this['ecs:performancetype'];
    }
    public withHwNumaNodes(hwNumaNodes: string): FlavorExtraSpec {
        this['hw:numa_nodes'] = hwNumaNodes;
        return this;
    }
    public set hwNumaNodes(hwNumaNodes: string | undefined) {
        this['hw:numa_nodes'] = hwNumaNodes;
    }
    public get hwNumaNodes() {
        return this['hw:numa_nodes'];
    }
    public withResourceType(resourceType: string): FlavorExtraSpec {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withHpetSupport(hpetSupport: string): FlavorExtraSpec {
        this['hpet_support'] = hpetSupport;
        return this;
    }
    public set hpetSupport(hpetSupport: string | undefined) {
        this['hpet_support'] = hpetSupport;
    }
    public get hpetSupport() {
        return this['hpet_support'];
    }
    public withInstanceVnicType(instanceVnicType: string): FlavorExtraSpec {
        this['instance_vnic:type'] = instanceVnicType;
        return this;
    }
    public set instanceVnicType(instanceVnicType: string | undefined) {
        this['instance_vnic:type'] = instanceVnicType;
    }
    public get instanceVnicType() {
        return this['instance_vnic:type'];
    }
    public withInstanceVnicInstanceBandwidth(instanceVnicInstanceBandwidth: string): FlavorExtraSpec {
        this['instance_vnic:instance_bandwidth'] = instanceVnicInstanceBandwidth;
        return this;
    }
    public set instanceVnicInstanceBandwidth(instanceVnicInstanceBandwidth: string | undefined) {
        this['instance_vnic:instance_bandwidth'] = instanceVnicInstanceBandwidth;
    }
    public get instanceVnicInstanceBandwidth() {
        return this['instance_vnic:instance_bandwidth'];
    }
    public withInstanceVnicMaxCount(instanceVnicMaxCount: string): FlavorExtraSpec {
        this['instance_vnic:max_count'] = instanceVnicMaxCount;
        return this;
    }
    public set instanceVnicMaxCount(instanceVnicMaxCount: string | undefined) {
        this['instance_vnic:max_count'] = instanceVnicMaxCount;
    }
    public get instanceVnicMaxCount() {
        return this['instance_vnic:max_count'];
    }
    public withQuotaLocalDisk(quotaLocalDisk: string): FlavorExtraSpec {
        this['quota:local_disk'] = quotaLocalDisk;
        return this;
    }
    public set quotaLocalDisk(quotaLocalDisk: string | undefined) {
        this['quota:local_disk'] = quotaLocalDisk;
    }
    public get quotaLocalDisk() {
        return this['quota:local_disk'];
    }
    public withQuotaNvmeSsd(quotaNvmeSsd: string): FlavorExtraSpec {
        this['quota:nvme_ssd'] = quotaNvmeSsd;
        return this;
    }
    public set quotaNvmeSsd(quotaNvmeSsd: string | undefined) {
        this['quota:nvme_ssd'] = quotaNvmeSsd;
    }
    public get quotaNvmeSsd() {
        return this['quota:nvme_ssd'];
    }
    public withExtraSpecIoPersistentGrant(extraSpecIoPersistentGrant: string): FlavorExtraSpec {
        this['extra_spec:io:persistent_grant'] = extraSpecIoPersistentGrant;
        return this;
    }
    public set extraSpecIoPersistentGrant(extraSpecIoPersistentGrant: string | undefined) {
        this['extra_spec:io:persistent_grant'] = extraSpecIoPersistentGrant;
    }
    public get extraSpecIoPersistentGrant() {
        return this['extra_spec:io:persistent_grant'];
    }
    public withEcsGeneration(ecsGeneration: string): FlavorExtraSpec {
        this['ecs:generation'] = ecsGeneration;
        return this;
    }
    public set ecsGeneration(ecsGeneration: string | undefined) {
        this['ecs:generation'] = ecsGeneration;
    }
    public get ecsGeneration() {
        return this['ecs:generation'];
    }
    public withEcsVirtualizationEnvTypes(ecsVirtualizationEnvTypes: string): FlavorExtraSpec {
        this['ecs:virtualization_env_types'] = ecsVirtualizationEnvTypes;
        return this;
    }
    public set ecsVirtualizationEnvTypes(ecsVirtualizationEnvTypes: string | undefined) {
        this['ecs:virtualization_env_types'] = ecsVirtualizationEnvTypes;
    }
    public get ecsVirtualizationEnvTypes() {
        return this['ecs:virtualization_env_types'];
    }
    public withPciPassthroughEnableGpu(pciPassthroughEnableGpu: string): FlavorExtraSpec {
        this['pci_passthrough:enable_gpu'] = pciPassthroughEnableGpu;
        return this;
    }
    public set pciPassthroughEnableGpu(pciPassthroughEnableGpu: string | undefined) {
        this['pci_passthrough:enable_gpu'] = pciPassthroughEnableGpu;
    }
    public get pciPassthroughEnableGpu() {
        return this['pci_passthrough:enable_gpu'];
    }
    public withPciPassthroughGpuSpecs(pciPassthroughGpuSpecs: string): FlavorExtraSpec {
        this['pci_passthrough:gpu_specs'] = pciPassthroughGpuSpecs;
        return this;
    }
    public set pciPassthroughGpuSpecs(pciPassthroughGpuSpecs: string | undefined) {
        this['pci_passthrough:gpu_specs'] = pciPassthroughGpuSpecs;
    }
    public get pciPassthroughGpuSpecs() {
        return this['pci_passthrough:gpu_specs'];
    }
    public withPciPassthroughAlias(pciPassthroughAlias: string): FlavorExtraSpec {
        this['pci_passthrough:alias'] = pciPassthroughAlias;
        return this;
    }
    public set pciPassthroughAlias(pciPassthroughAlias: string | undefined) {
        this['pci_passthrough:alias'] = pciPassthroughAlias;
    }
    public get pciPassthroughAlias() {
        return this['pci_passthrough:alias'];
    }
    public withCondOperationStatus(condOperationStatus: string): FlavorExtraSpec {
        this['cond:operation:status'] = condOperationStatus;
        return this;
    }
    public set condOperationStatus(condOperationStatus: string | undefined) {
        this['cond:operation:status'] = condOperationStatus;
    }
    public get condOperationStatus() {
        return this['cond:operation:status'];
    }
    public withCondOperationAz(condOperationAz: string): FlavorExtraSpec {
        this['cond:operation:az'] = condOperationAz;
        return this;
    }
    public set condOperationAz(condOperationAz: string | undefined) {
        this['cond:operation:az'] = condOperationAz;
    }
    public get condOperationAz() {
        return this['cond:operation:az'];
    }
    public withQuotaMaxRate(quotaMaxRate: string): FlavorExtraSpec {
        this['quota:max_rate'] = quotaMaxRate;
        return this;
    }
    public set quotaMaxRate(quotaMaxRate: string | undefined) {
        this['quota:max_rate'] = quotaMaxRate;
    }
    public get quotaMaxRate() {
        return this['quota:max_rate'];
    }
    public withQuotaMinRate(quotaMinRate: string): FlavorExtraSpec {
        this['quota:min_rate'] = quotaMinRate;
        return this;
    }
    public set quotaMinRate(quotaMinRate: string | undefined) {
        this['quota:min_rate'] = quotaMinRate;
    }
    public get quotaMinRate() {
        return this['quota:min_rate'];
    }
    public withQuotaMaxPps(quotaMaxPps: string): FlavorExtraSpec {
        this['quota:max_pps'] = quotaMaxPps;
        return this;
    }
    public set quotaMaxPps(quotaMaxPps: string | undefined) {
        this['quota:max_pps'] = quotaMaxPps;
    }
    public get quotaMaxPps() {
        return this['quota:max_pps'];
    }
    public withCondOperationCharge(condOperationCharge: string): FlavorExtraSpec {
        this['cond:operation:charge'] = condOperationCharge;
        return this;
    }
    public set condOperationCharge(condOperationCharge: string | undefined) {
        this['cond:operation:charge'] = condOperationCharge;
    }
    public get condOperationCharge() {
        return this['cond:operation:charge'];
    }
    public withCondOperationChargeStop(condOperationChargeStop: string): FlavorExtraSpec {
        this['cond:operation:charge:stop'] = condOperationChargeStop;
        return this;
    }
    public set condOperationChargeStop(condOperationChargeStop: string | undefined) {
        this['cond:operation:charge:stop'] = condOperationChargeStop;
    }
    public get condOperationChargeStop() {
        return this['cond:operation:charge:stop'];
    }
    public withCondSpotOperationAz(condSpotOperationAz: string): FlavorExtraSpec {
        this['cond:spot:operation:az'] = condSpotOperationAz;
        return this;
    }
    public set condSpotOperationAz(condSpotOperationAz: string | undefined) {
        this['cond:spot:operation:az'] = condSpotOperationAz;
    }
    public get condSpotOperationAz() {
        return this['cond:spot:operation:az'];
    }
    public withCondOperationRoles(condOperationRoles: string): FlavorExtraSpec {
        this['cond:operation:roles'] = condOperationRoles;
        return this;
    }
    public set condOperationRoles(condOperationRoles: string | undefined) {
        this['cond:operation:roles'] = condOperationRoles;
    }
    public get condOperationRoles() {
        return this['cond:operation:roles'];
    }
    public withCondSpotOperationStatus(condSpotOperationStatus: string): FlavorExtraSpec {
        this['cond:spot:operation:status'] = condSpotOperationStatus;
        return this;
    }
    public set condSpotOperationStatus(condSpotOperationStatus: string | undefined) {
        this['cond:spot:operation:status'] = condSpotOperationStatus;
    }
    public get condSpotOperationStatus() {
        return this['cond:spot:operation:status'];
    }
    public withCondNetwork(condNetwork: string): FlavorExtraSpec {
        this['cond:network'] = condNetwork;
        return this;
    }
    public set condNetwork(condNetwork: string | undefined) {
        this['cond:network'] = condNetwork;
    }
    public get condNetwork() {
        return this['cond:network'];
    }
    public withCondStorage(condStorage: string): FlavorExtraSpec {
        this['cond:storage'] = condStorage;
        return this;
    }
    public set condStorage(condStorage: string | undefined) {
        this['cond:storage'] = condStorage;
    }
    public get condStorage() {
        return this['cond:storage'];
    }
    public withCondComputeLiveResizable(condComputeLiveResizable: string): FlavorExtraSpec {
        this['cond:compute:live_resizable'] = condComputeLiveResizable;
        return this;
    }
    public set condComputeLiveResizable(condComputeLiveResizable: string | undefined) {
        this['cond:compute:live_resizable'] = condComputeLiveResizable;
    }
    public get condComputeLiveResizable() {
        return this['cond:compute:live_resizable'];
    }
    public withCondCompute(condCompute: string): FlavorExtraSpec {
        this['cond:compute'] = condCompute;
        return this;
    }
    public set condCompute(condCompute: string | undefined) {
        this['cond:compute'] = condCompute;
    }
    public get condCompute() {
        return this['cond:compute'];
    }
    public withInfoGpuName(infoGpuName: string): FlavorExtraSpec {
        this['info:gpu:name'] = infoGpuName;
        return this;
    }
    public set infoGpuName(infoGpuName: string | undefined) {
        this['info:gpu:name'] = infoGpuName;
    }
    public get infoGpuName() {
        return this['info:gpu:name'];
    }
    public withInfoCpuName(infoCpuName: string): FlavorExtraSpec {
        this['info:cpu:name'] = infoCpuName;
        return this;
    }
    public set infoCpuName(infoCpuName: string | undefined) {
        this['info:cpu:name'] = infoCpuName;
    }
    public get infoCpuName() {
        return this['info:cpu:name'];
    }
    public withQuotaGpu(quotaGpu: string): FlavorExtraSpec {
        this['quota:gpu'] = quotaGpu;
        return this;
    }
    public set quotaGpu(quotaGpu: string | undefined) {
        this['quota:gpu'] = quotaGpu;
    }
    public get quotaGpu() {
        return this['quota:gpu'];
    }
    public withEcsInstanceArchitecture(ecsInstanceArchitecture: string): FlavorExtraSpec {
        this['ecs:instance_architecture'] = ecsInstanceArchitecture;
        return this;
    }
    public set ecsInstanceArchitecture(ecsInstanceArchitecture: string | undefined) {
        this['ecs:instance_architecture'] = ecsInstanceArchitecture;
    }
    public get ecsInstanceArchitecture() {
        return this['ecs:instance_architecture'];
    }
}