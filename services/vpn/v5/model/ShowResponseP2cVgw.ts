import { ResponseEipInfo } from './ResponseEipInfo';
import { VpnResourceTag } from './VpnResourceTag';


export class ShowResponseP2cVgw {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'vpc_id'?: string;
    private 'connect_subnet'?: string;
    public flavor?: string;
    private 'availability_zone_ids'?: Array<string>;
    public eip?: ResponseEipInfo;
    private 'max_connection_number'?: number;
    private 'current_connection_number'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<VpnResourceTag>;
    private 'order_id'?: string;
    private 'admin_state_up'?: boolean;
    private 'frozen_effect'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): ShowResponseP2cVgw {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowResponseP2cVgw {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowResponseP2cVgw {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): ShowResponseP2cVgw {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withConnectSubnet(connectSubnet: string): ShowResponseP2cVgw {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withFlavor(flavor: string): ShowResponseP2cVgw {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): ShowResponseP2cVgw {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withEip(eip: ResponseEipInfo): ShowResponseP2cVgw {
        this['eip'] = eip;
        return this;
    }
    public withMaxConnectionNumber(maxConnectionNumber: number): ShowResponseP2cVgw {
        this['max_connection_number'] = maxConnectionNumber;
        return this;
    }
    public set maxConnectionNumber(maxConnectionNumber: number  | undefined) {
        this['max_connection_number'] = maxConnectionNumber;
    }
    public get maxConnectionNumber(): number | undefined {
        return this['max_connection_number'];
    }
    public withCurrentConnectionNumber(currentConnectionNumber: number): ShowResponseP2cVgw {
        this['current_connection_number'] = currentConnectionNumber;
        return this;
    }
    public set currentConnectionNumber(currentConnectionNumber: number  | undefined) {
        this['current_connection_number'] = currentConnectionNumber;
    }
    public get currentConnectionNumber(): number | undefined {
        return this['current_connection_number'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowResponseP2cVgw {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<VpnResourceTag>): ShowResponseP2cVgw {
        this['tags'] = tags;
        return this;
    }
    public withOrderId(orderId: string): ShowResponseP2cVgw {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): ShowResponseP2cVgw {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withFrozenEffect(frozenEffect: number): ShowResponseP2cVgw {
        this['frozen_effect'] = frozenEffect;
        return this;
    }
    public set frozenEffect(frozenEffect: number  | undefined) {
        this['frozen_effect'] = frozenEffect;
    }
    public get frozenEffect(): number | undefined {
        return this['frozen_effect'];
    }
    public withCreatedAt(createdAt: Date): ShowResponseP2cVgw {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ShowResponseP2cVgw {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}