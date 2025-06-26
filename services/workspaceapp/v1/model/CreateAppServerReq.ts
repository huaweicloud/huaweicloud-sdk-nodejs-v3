import { CreateServerExtendParam } from './CreateServerExtendParam';
import { Nic } from './Nic';
import { Volume } from './Volume';
import { WdhParam } from './WdhParam';


export class CreateAppServerReq {
    public type?: string;
    private 'server_group_id'?: string;
    private 'availability_zone'?: string;
    private 'subscription_num'?: number;
    public nics?: Array<Nic>;
    private 'ou_name'?: string;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'os_type'?: string;
    private 'root_volume'?: Volume;
    private 'scheduler_hints'?: WdhParam;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'update_access_agent'?: boolean;
    private 'create_server_extend_param'?: CreateServerExtendParam;
    public constructor(type?: string, serverGroupId?: string, subscriptionNum?: number, productId?: string, rootVolume?: Volume, subnetId?: string, vpcId?: string) { 
        this['type'] = type;
        this['server_group_id'] = serverGroupId;
        this['subscription_num'] = subscriptionNum;
        this['product_id'] = productId;
        this['root_volume'] = rootVolume;
        this['subnet_id'] = subnetId;
        this['vpc_id'] = vpcId;
    }
    public withType(type: string): CreateAppServerReq {
        this['type'] = type;
        return this;
    }
    public withServerGroupId(serverGroupId: string): CreateAppServerReq {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateAppServerReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSubscriptionNum(subscriptionNum: number): CreateAppServerReq {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
    public withNics(nics: Array<Nic>): CreateAppServerReq {
        this['nics'] = nics;
        return this;
    }
    public withOuName(ouName: string): CreateAppServerReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withProductId(productId: string): CreateAppServerReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateAppServerReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withOsType(osType: string): CreateAppServerReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRootVolume(rootVolume: Volume): CreateAppServerReq {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): Volume | undefined {
        return this['root_volume'];
    }
    public withSchedulerHints(schedulerHints: WdhParam): CreateAppServerReq {
        this['scheduler_hints'] = schedulerHints;
        return this;
    }
    public set schedulerHints(schedulerHints: WdhParam  | undefined) {
        this['scheduler_hints'] = schedulerHints;
    }
    public get schedulerHints(): WdhParam | undefined {
        return this['scheduler_hints'];
    }
    public withSubnetId(subnetId: string): CreateAppServerReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): CreateAppServerReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withUpdateAccessAgent(updateAccessAgent: boolean): CreateAppServerReq {
        this['update_access_agent'] = updateAccessAgent;
        return this;
    }
    public set updateAccessAgent(updateAccessAgent: boolean  | undefined) {
        this['update_access_agent'] = updateAccessAgent;
    }
    public get updateAccessAgent(): boolean | undefined {
        return this['update_access_agent'];
    }
    public withCreateServerExtendParam(createServerExtendParam: CreateServerExtendParam): CreateAppServerReq {
        this['create_server_extend_param'] = createServerExtendParam;
        return this;
    }
    public set createServerExtendParam(createServerExtendParam: CreateServerExtendParam  | undefined) {
        this['create_server_extend_param'] = createServerExtendParam;
    }
    public get createServerExtendParam(): CreateServerExtendParam | undefined {
        return this['create_server_extend_param'];
    }
}