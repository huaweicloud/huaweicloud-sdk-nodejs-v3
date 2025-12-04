import { CreateNet2CloudPhoneServerRequestBodyBandWidth } from './CreateNet2CloudPhoneServerRequestBodyBandWidth';
import { CreateNet2CloudPhoneServerRequestBodyExtendParam } from './CreateNet2CloudPhoneServerRequestBodyExtendParam';
import { CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume } from './CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume';
import { CreateNet2CloudPhoneServerRequestBodyPublicIp } from './CreateNet2CloudPhoneServerRequestBodyPublicIp';
import { CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume } from './CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume';
import { Nic } from './Nic';
import { Port } from './Port';


export class CreateNet2CloudPhoneServerRequestBody {
    private 'server_name'?: string;
    private 'server_model_name'?: string;
    private 'phone_model_name'?: string;
    private 'image_id'?: string;
    public count?: number;
    private 'keypair_name'?: string;
    public ports?: Array<Port>;
    private 'extend_param'?: CreateNet2CloudPhoneServerRequestBodyExtendParam;
    private 'tenant_vpc_id'?: string;
    public nics?: Array<Nic>;
    private 'public_ip'?: CreateNet2CloudPhoneServerRequestBodyPublicIp;
    private 'phone_count_per_ip'?: number;
    private 'phone_data_volume'?: CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume;
    private 'server_share_data_volume'?: CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume;
    private 'band_width'?: CreateNet2CloudPhoneServerRequestBodyBandWidth;
    private 'availability_zone'?: string;
    public property?: string;
    public constructor(serverName?: string, serverModelName?: string, phoneModelName?: string, imageId?: string, count?: number, extendParam?: CreateNet2CloudPhoneServerRequestBodyExtendParam, tenantVpcId?: string, nics?: Array<Nic>, publicIp?: CreateNet2CloudPhoneServerRequestBodyPublicIp, bandWidth?: CreateNet2CloudPhoneServerRequestBodyBandWidth) { 
        this['server_name'] = serverName;
        this['server_model_name'] = serverModelName;
        this['phone_model_name'] = phoneModelName;
        this['image_id'] = imageId;
        this['count'] = count;
        this['extend_param'] = extendParam;
        this['tenant_vpc_id'] = tenantVpcId;
        this['nics'] = nics;
        this['public_ip'] = publicIp;
        this['band_width'] = bandWidth;
    }
    public withServerName(serverName: string): CreateNet2CloudPhoneServerRequestBody {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerModelName(serverModelName: string): CreateNet2CloudPhoneServerRequestBody {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withPhoneModelName(phoneModelName: string): CreateNet2CloudPhoneServerRequestBody {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withImageId(imageId: string): CreateNet2CloudPhoneServerRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withCount(count: number): CreateNet2CloudPhoneServerRequestBody {
        this['count'] = count;
        return this;
    }
    public withKeypairName(keypairName: string): CreateNet2CloudPhoneServerRequestBody {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withPorts(ports: Array<Port>): CreateNet2CloudPhoneServerRequestBody {
        this['ports'] = ports;
        return this;
    }
    public withExtendParam(extendParam: CreateNet2CloudPhoneServerRequestBodyExtendParam): CreateNet2CloudPhoneServerRequestBody {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: CreateNet2CloudPhoneServerRequestBodyExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): CreateNet2CloudPhoneServerRequestBodyExtendParam | undefined {
        return this['extend_param'];
    }
    public withTenantVpcId(tenantVpcId: string): CreateNet2CloudPhoneServerRequestBody {
        this['tenant_vpc_id'] = tenantVpcId;
        return this;
    }
    public set tenantVpcId(tenantVpcId: string  | undefined) {
        this['tenant_vpc_id'] = tenantVpcId;
    }
    public get tenantVpcId(): string | undefined {
        return this['tenant_vpc_id'];
    }
    public withNics(nics: Array<Nic>): CreateNet2CloudPhoneServerRequestBody {
        this['nics'] = nics;
        return this;
    }
    public withPublicIp(publicIp: CreateNet2CloudPhoneServerRequestBodyPublicIp): CreateNet2CloudPhoneServerRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: CreateNet2CloudPhoneServerRequestBodyPublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): CreateNet2CloudPhoneServerRequestBodyPublicIp | undefined {
        return this['public_ip'];
    }
    public withPhoneCountPerIp(phoneCountPerIp: number): CreateNet2CloudPhoneServerRequestBody {
        this['phone_count_per_ip'] = phoneCountPerIp;
        return this;
    }
    public set phoneCountPerIp(phoneCountPerIp: number  | undefined) {
        this['phone_count_per_ip'] = phoneCountPerIp;
    }
    public get phoneCountPerIp(): number | undefined {
        return this['phone_count_per_ip'];
    }
    public withPhoneDataVolume(phoneDataVolume: CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume): CreateNet2CloudPhoneServerRequestBody {
        this['phone_data_volume'] = phoneDataVolume;
        return this;
    }
    public set phoneDataVolume(phoneDataVolume: CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume  | undefined) {
        this['phone_data_volume'] = phoneDataVolume;
    }
    public get phoneDataVolume(): CreateNet2CloudPhoneServerRequestBodyPhoneDataVolume | undefined {
        return this['phone_data_volume'];
    }
    public withServerShareDataVolume(serverShareDataVolume: CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume): CreateNet2CloudPhoneServerRequestBody {
        this['server_share_data_volume'] = serverShareDataVolume;
        return this;
    }
    public set serverShareDataVolume(serverShareDataVolume: CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume  | undefined) {
        this['server_share_data_volume'] = serverShareDataVolume;
    }
    public get serverShareDataVolume(): CreateNet2CloudPhoneServerRequestBodyServerShareDataVolume | undefined {
        return this['server_share_data_volume'];
    }
    public withBandWidth(bandWidth: CreateNet2CloudPhoneServerRequestBodyBandWidth): CreateNet2CloudPhoneServerRequestBody {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: CreateNet2CloudPhoneServerRequestBodyBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): CreateNet2CloudPhoneServerRequestBodyBandWidth | undefined {
        return this['band_width'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateNet2CloudPhoneServerRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProperty(property: string): CreateNet2CloudPhoneServerRequestBody {
        this['property'] = property;
        return this;
    }
}