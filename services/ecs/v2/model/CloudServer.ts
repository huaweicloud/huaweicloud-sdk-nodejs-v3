import { CpuOptions } from './CpuOptions';
import { Fault } from './Fault';
import { FlavorQuasar } from './FlavorQuasar';
import { Image } from './Image';
import { MarketModel } from './MarketModel';
import { NetworkAddresses } from './NetworkAddresses';
import { SecurityGroup } from './SecurityGroup';
import { VolumeAttach } from './VolumeAttach';


export class CloudServer {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'tenant_id'?: string;
    private 'user_id'?: string;
    private 'market_info'?: MarketModel;
    private 'availability_zone'?: string;
    private 'vm_state'?: string;
    private 'task_state'?: string;
    private 'power_state'?: number;
    public created?: string;
    private 'in_recycle_bin'?: boolean;
    private 'spod_id'?: string;
    public updated?: string;
    public launched?: string;
    public description?: string;
    private 'key_name'?: string;
    public locked?: boolean;
    private 'root_device_name'?: string;
    public tenancy?: string;
    private 'dedicated_host_id'?: string;
    private 'enterprise_project_id'?: string;
    public metadata?: { [key: string]: string; };
    public tags?: Array<string>;
    public addresses?: { [key: string]: Array<NetworkAddresses>; };
    private 'security_groups'?: Array<SecurityGroup>;
    private 'volumes_attached'?: Array<VolumeAttach>;
    public image?: Image;
    public flavor?: FlavorQuasar;
    public fault?: Fault;
    private 'cpu_options'?: CpuOptions;
    public constructor(id?: string, name?: string, status?: string, tenantId?: string, userId?: string, availabilityZone?: string, vmState?: string, taskState?: string, created?: string, inRecycleBin?: boolean, spodId?: string, updated?: string, flavor?: FlavorQuasar, fault?: Fault) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['user_id'] = userId;
        this['availability_zone'] = availabilityZone;
        this['vm_state'] = vmState;
        this['task_state'] = taskState;
        this['created'] = created;
        this['in_recycle_bin'] = inRecycleBin;
        this['spod_id'] = spodId;
        this['updated'] = updated;
        this['flavor'] = flavor;
        this['fault'] = fault;
    }
    public withId(id: string): CloudServer {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CloudServer {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CloudServer {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): CloudServer {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withUserId(userId: string): CloudServer {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withMarketInfo(marketInfo: MarketModel): CloudServer {
        this['market_info'] = marketInfo;
        return this;
    }
    public set marketInfo(marketInfo: MarketModel  | undefined) {
        this['market_info'] = marketInfo;
    }
    public get marketInfo(): MarketModel | undefined {
        return this['market_info'];
    }
    public withAvailabilityZone(availabilityZone: string): CloudServer {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVmState(vmState: string): CloudServer {
        this['vm_state'] = vmState;
        return this;
    }
    public set vmState(vmState: string  | undefined) {
        this['vm_state'] = vmState;
    }
    public get vmState(): string | undefined {
        return this['vm_state'];
    }
    public withTaskState(taskState: string): CloudServer {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: string  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): string | undefined {
        return this['task_state'];
    }
    public withPowerState(powerState: number): CloudServer {
        this['power_state'] = powerState;
        return this;
    }
    public set powerState(powerState: number  | undefined) {
        this['power_state'] = powerState;
    }
    public get powerState(): number | undefined {
        return this['power_state'];
    }
    public withCreated(created: string): CloudServer {
        this['created'] = created;
        return this;
    }
    public withInRecycleBin(inRecycleBin: boolean): CloudServer {
        this['in_recycle_bin'] = inRecycleBin;
        return this;
    }
    public set inRecycleBin(inRecycleBin: boolean  | undefined) {
        this['in_recycle_bin'] = inRecycleBin;
    }
    public get inRecycleBin(): boolean | undefined {
        return this['in_recycle_bin'];
    }
    public withSpodId(spodId: string): CloudServer {
        this['spod_id'] = spodId;
        return this;
    }
    public set spodId(spodId: string  | undefined) {
        this['spod_id'] = spodId;
    }
    public get spodId(): string | undefined {
        return this['spod_id'];
    }
    public withUpdated(updated: string): CloudServer {
        this['updated'] = updated;
        return this;
    }
    public withLaunched(launched: string): CloudServer {
        this['launched'] = launched;
        return this;
    }
    public withDescription(description: string): CloudServer {
        this['description'] = description;
        return this;
    }
    public withKeyName(keyName: string): CloudServer {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withLocked(locked: boolean): CloudServer {
        this['locked'] = locked;
        return this;
    }
    public withRootDeviceName(rootDeviceName: string): CloudServer {
        this['root_device_name'] = rootDeviceName;
        return this;
    }
    public set rootDeviceName(rootDeviceName: string  | undefined) {
        this['root_device_name'] = rootDeviceName;
    }
    public get rootDeviceName(): string | undefined {
        return this['root_device_name'];
    }
    public withTenancy(tenancy: string): CloudServer {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): CloudServer {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CloudServer {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMetadata(metadata: { [key: string]: string; }): CloudServer {
        this['metadata'] = metadata;
        return this;
    }
    public withTags(tags: Array<string>): CloudServer {
        this['tags'] = tags;
        return this;
    }
    public withAddresses(addresses: { [key: string]: Array<NetworkAddresses>; }): CloudServer {
        this['addresses'] = addresses;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): CloudServer {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withVolumesAttached(volumesAttached: Array<VolumeAttach>): CloudServer {
        this['volumes_attached'] = volumesAttached;
        return this;
    }
    public set volumesAttached(volumesAttached: Array<VolumeAttach>  | undefined) {
        this['volumes_attached'] = volumesAttached;
    }
    public get volumesAttached(): Array<VolumeAttach> | undefined {
        return this['volumes_attached'];
    }
    public withImage(image: Image): CloudServer {
        this['image'] = image;
        return this;
    }
    public withFlavor(flavor: FlavorQuasar): CloudServer {
        this['flavor'] = flavor;
        return this;
    }
    public withFault(fault: Fault): CloudServer {
        this['fault'] = fault;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): CloudServer {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
}