import { CreateP2cRequestEip } from './CreateP2cRequestEip';
import { VpnResourceTag } from './VpnResourceTag';


export class CreateP2cVgwRequestBodyContent {
    public name?: string;
    private 'vpc_id'?: string;
    private 'connect_subnet'?: string;
    public flavor?: CreateP2cVgwRequestBodyContentFlavorEnum | string;
    private 'availability_zone_ids'?: Array<string>;
    public eip?: CreateP2cRequestEip;
    private 'max_connection_number'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<VpnResourceTag>;
    public constructor(vpcId?: string, connectSubnet?: string, eip?: CreateP2cRequestEip) { 
        this['vpc_id'] = vpcId;
        this['connect_subnet'] = connectSubnet;
        this['eip'] = eip;
    }
    public withName(name: string): CreateP2cVgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): CreateP2cVgwRequestBodyContent {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withConnectSubnet(connectSubnet: string): CreateP2cVgwRequestBodyContent {
        this['connect_subnet'] = connectSubnet;
        return this;
    }
    public set connectSubnet(connectSubnet: string  | undefined) {
        this['connect_subnet'] = connectSubnet;
    }
    public get connectSubnet(): string | undefined {
        return this['connect_subnet'];
    }
    public withFlavor(flavor: CreateP2cVgwRequestBodyContentFlavorEnum | string): CreateP2cVgwRequestBodyContent {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): CreateP2cVgwRequestBodyContent {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withEip(eip: CreateP2cRequestEip): CreateP2cVgwRequestBodyContent {
        this['eip'] = eip;
        return this;
    }
    public withMaxConnectionNumber(maxConnectionNumber: number): CreateP2cVgwRequestBodyContent {
        this['max_connection_number'] = maxConnectionNumber;
        return this;
    }
    public set maxConnectionNumber(maxConnectionNumber: number  | undefined) {
        this['max_connection_number'] = maxConnectionNumber;
    }
    public get maxConnectionNumber(): number | undefined {
        return this['max_connection_number'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateP2cVgwRequestBodyContent {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<VpnResourceTag>): CreateP2cVgwRequestBodyContent {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateP2cVgwRequestBodyContentFlavorEnum {
    PROFESSIONAL1 = 'Professional1'
}
