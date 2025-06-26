import { Nic } from './Nic';
import { SecurityGroup } from './SecurityGroup';
import { Volume } from './Volume';


export class CreateServices {
    private 'availability_zone'?: string;
    private 'data_volumes'?: Array<Volume>;
    public nics?: Array<Nic>;
    private 'ou_name'?: string;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'os_type'?: string;
    private 'root_volume'?: Volume;
    private 'server_group_id'?: string;
    private 'service_type'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'update_access_agent'?: boolean;
    public constructor(productId?: string, rootVolume?: Volume, serverGroupId?: string, subnetId?: string, vpcId?: string) { 
        this['product_id'] = productId;
        this['root_volume'] = rootVolume;
        this['server_group_id'] = serverGroupId;
        this['subnet_id'] = subnetId;
        this['vpc_id'] = vpcId;
    }
    public withAvailabilityZone(availabilityZone: string): CreateServices {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDataVolumes(dataVolumes: Array<Volume>): CreateServices {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<Volume>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<Volume> | undefined {
        return this['data_volumes'];
    }
    public withNics(nics: Array<Nic>): CreateServices {
        this['nics'] = nics;
        return this;
    }
    public withOuName(ouName: string): CreateServices {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withProductId(productId: string): CreateServices {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateServices {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withOsType(osType: string): CreateServices {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRootVolume(rootVolume: Volume): CreateServices {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): Volume | undefined {
        return this['root_volume'];
    }
    public withServerGroupId(serverGroupId: string): CreateServices {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withServiceType(serviceType: string): CreateServices {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withSubnetId(subnetId: string): CreateServices {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): CreateServices {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): CreateServices {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withUpdateAccessAgent(updateAccessAgent: boolean): CreateServices {
        this['update_access_agent'] = updateAccessAgent;
        return this;
    }
    public set updateAccessAgent(updateAccessAgent: boolean  | undefined) {
        this['update_access_agent'] = updateAccessAgent;
    }
    public get updateAccessAgent(): boolean | undefined {
        return this['update_access_agent'];
    }
}