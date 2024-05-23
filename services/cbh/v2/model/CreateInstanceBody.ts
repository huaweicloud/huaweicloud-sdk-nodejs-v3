import { NetworkInfoCreate } from './NetworkInfoCreate';
import { ResourceTag } from './ResourceTag';


export class CreateInstanceBody {
    public specification?: string;
    private 'instance_name'?: string;
    public password?: string;
    public region?: string;
    private 'availability_zone'?: string;
    private 'slave_availability_zone'?: string;
    private 'charging_mode'?: number;
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'is_auto_pay'?: number;
    public network?: NetworkInfoCreate;
    private 'ipv6_enable'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'attach_disk_size'?: number;
    public tags?: Array<ResourceTag>;
    public constructor(specification?: string, instanceName?: string, password?: string, region?: string, availabilityZone?: string, chargingMode?: number, network?: NetworkInfoCreate) { 
        this['specification'] = specification;
        this['instance_name'] = instanceName;
        this['password'] = password;
        this['region'] = region;
        this['availability_zone'] = availabilityZone;
        this['charging_mode'] = chargingMode;
        this['network'] = network;
    }
    public withSpecification(specification: string): CreateInstanceBody {
        this['specification'] = specification;
        return this;
    }
    public withInstanceName(instanceName: string): CreateInstanceBody {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withPassword(password: string): CreateInstanceBody {
        this['password'] = password;
        return this;
    }
    public withRegion(region: string): CreateInstanceBody {
        this['region'] = region;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateInstanceBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSlaveAvailabilityZone(slaveAvailabilityZone: string): CreateInstanceBody {
        this['slave_availability_zone'] = slaveAvailabilityZone;
        return this;
    }
    public set slaveAvailabilityZone(slaveAvailabilityZone: string  | undefined) {
        this['slave_availability_zone'] = slaveAvailabilityZone;
    }
    public get slaveAvailabilityZone(): string | undefined {
        return this['slave_availability_zone'];
    }
    public withChargingMode(chargingMode: number): CreateInstanceBody {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: number  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): number | undefined {
        return this['charging_mode'];
    }
    public withPeriodType(periodType: number): CreateInstanceBody {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): CreateInstanceBody {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): CreateInstanceBody {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: number): CreateInstanceBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withNetwork(network: NetworkInfoCreate): CreateInstanceBody {
        this['network'] = network;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateInstanceBody {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAttachDiskSize(attachDiskSize: number): CreateInstanceBody {
        this['attach_disk_size'] = attachDiskSize;
        return this;
    }
    public set attachDiskSize(attachDiskSize: number  | undefined) {
        this['attach_disk_size'] = attachDiskSize;
    }
    public get attachDiskSize(): number | undefined {
        return this['attach_disk_size'];
    }
    public withTags(tags: Array<ResourceTag>): CreateInstanceBody {
        this['tags'] = tags;
        return this;
    }
}