import { TagPlain } from './TagPlain';


export class HostModel {
    public id?: string;
    public name?: string;
    public ip?: string;
    private 'availability_zone_id'?: string;
    public tags?: Array<TagPlain>;
    public status?: string;
    private 'resource_id'?: string;
    public flavor?: string;
    public type?: string;
    public mem?: string;
    public cpu?: string;
    private 'root_volume_size'?: string;
    private 'data_volume_type'?: string;
    private 'data_volume_size'?: number;
    private 'data_volume_count'?: number;
    private 'node_group_name'?: string;
    public constructor() { 
    }
    public withId(id: string): HostModel {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HostModel {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): HostModel {
        this['ip'] = ip;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): HostModel {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withTags(tags: Array<TagPlain>): HostModel {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): HostModel {
        this['status'] = status;
        return this;
    }
    public withResourceId(resourceId: string): HostModel {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withFlavor(flavor: string): HostModel {
        this['flavor'] = flavor;
        return this;
    }
    public withType(type: string): HostModel {
        this['type'] = type;
        return this;
    }
    public withMem(mem: string): HostModel {
        this['mem'] = mem;
        return this;
    }
    public withCpu(cpu: string): HostModel {
        this['cpu'] = cpu;
        return this;
    }
    public withRootVolumeSize(rootVolumeSize: string): HostModel {
        this['root_volume_size'] = rootVolumeSize;
        return this;
    }
    public set rootVolumeSize(rootVolumeSize: string  | undefined) {
        this['root_volume_size'] = rootVolumeSize;
    }
    public get rootVolumeSize(): string | undefined {
        return this['root_volume_size'];
    }
    public withDataVolumeType(dataVolumeType: string): HostModel {
        this['data_volume_type'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: string  | undefined) {
        this['data_volume_type'] = dataVolumeType;
    }
    public get dataVolumeType(): string | undefined {
        return this['data_volume_type'];
    }
    public withDataVolumeSize(dataVolumeSize: number): HostModel {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): number | undefined {
        return this['data_volume_size'];
    }
    public withDataVolumeCount(dataVolumeCount: number): HostModel {
        this['data_volume_count'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number  | undefined) {
        this['data_volume_count'] = dataVolumeCount;
    }
    public get dataVolumeCount(): number | undefined {
        return this['data_volume_count'];
    }
    public withNodeGroupName(nodeGroupName: string): HostModel {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
}