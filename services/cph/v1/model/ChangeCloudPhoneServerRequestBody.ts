import { ChangeCloudPhoneServerRequestBodyBandWidth } from './ChangeCloudPhoneServerRequestBodyBandWidth';
import { ChangeCloudPhoneServerRequestBodyExtendParam } from './ChangeCloudPhoneServerRequestBodyExtendParam';
import { ChangeCloudPhoneServerRequestBodyPhoneDataVolume } from './ChangeCloudPhoneServerRequestBodyPhoneDataVolume';
import { ChangeCloudPhoneServerRequestBodyPublicIp } from './ChangeCloudPhoneServerRequestBodyPublicIp';
import { ChangeCloudPhoneServerRequestBodyServerShareDataVolume } from './ChangeCloudPhoneServerRequestBodyServerShareDataVolume';
import { Nic } from './Nic';
import { Port } from './Port';


export class ChangeCloudPhoneServerRequestBody {
    private 'phone_model_name'?: string;
    private 'image_id'?: string;
    private 'keypair_name'?: string;
    private 'availability_zone'?: string;
    public ports?: Array<Port>;
    private 'extend_param'?: ChangeCloudPhoneServerRequestBodyExtendParam;
    private 'tenant_vpc_id'?: string;
    public nics?: Array<Nic>;
    private 'public_ip'?: ChangeCloudPhoneServerRequestBodyPublicIp;
    private 'phone_count_per_ip'?: number;
    private 'phone_data_volume'?: ChangeCloudPhoneServerRequestBodyPhoneDataVolume;
    private 'server_share_data_volume'?: ChangeCloudPhoneServerRequestBodyServerShareDataVolume;
    private 'band_width'?: ChangeCloudPhoneServerRequestBodyBandWidth;
    public property?: string;
    public constructor(phoneModelName?: string, imageId?: string, tenantVpcId?: string, nics?: Array<Nic>, publicIp?: ChangeCloudPhoneServerRequestBodyPublicIp, bandWidth?: ChangeCloudPhoneServerRequestBodyBandWidth) { 
        this['phone_model_name'] = phoneModelName;
        this['image_id'] = imageId;
        this['tenant_vpc_id'] = tenantVpcId;
        this['nics'] = nics;
        this['public_ip'] = publicIp;
        this['band_width'] = bandWidth;
    }
    public withPhoneModelName(phoneModelName: string): ChangeCloudPhoneServerRequestBody {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withImageId(imageId: string): ChangeCloudPhoneServerRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withKeypairName(keypairName: string): ChangeCloudPhoneServerRequestBody {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withAvailabilityZone(availabilityZone: string): ChangeCloudPhoneServerRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withPorts(ports: Array<Port>): ChangeCloudPhoneServerRequestBody {
        this['ports'] = ports;
        return this;
    }
    public withExtendParam(extendParam: ChangeCloudPhoneServerRequestBodyExtendParam): ChangeCloudPhoneServerRequestBody {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: ChangeCloudPhoneServerRequestBodyExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): ChangeCloudPhoneServerRequestBodyExtendParam | undefined {
        return this['extend_param'];
    }
    public withTenantVpcId(tenantVpcId: string): ChangeCloudPhoneServerRequestBody {
        this['tenant_vpc_id'] = tenantVpcId;
        return this;
    }
    public set tenantVpcId(tenantVpcId: string  | undefined) {
        this['tenant_vpc_id'] = tenantVpcId;
    }
    public get tenantVpcId(): string | undefined {
        return this['tenant_vpc_id'];
    }
    public withNics(nics: Array<Nic>): ChangeCloudPhoneServerRequestBody {
        this['nics'] = nics;
        return this;
    }
    public withPublicIp(publicIp: ChangeCloudPhoneServerRequestBodyPublicIp): ChangeCloudPhoneServerRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: ChangeCloudPhoneServerRequestBodyPublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): ChangeCloudPhoneServerRequestBodyPublicIp | undefined {
        return this['public_ip'];
    }
    public withPhoneCountPerIp(phoneCountPerIp: number): ChangeCloudPhoneServerRequestBody {
        this['phone_count_per_ip'] = phoneCountPerIp;
        return this;
    }
    public set phoneCountPerIp(phoneCountPerIp: number  | undefined) {
        this['phone_count_per_ip'] = phoneCountPerIp;
    }
    public get phoneCountPerIp(): number | undefined {
        return this['phone_count_per_ip'];
    }
    public withPhoneDataVolume(phoneDataVolume: ChangeCloudPhoneServerRequestBodyPhoneDataVolume): ChangeCloudPhoneServerRequestBody {
        this['phone_data_volume'] = phoneDataVolume;
        return this;
    }
    public set phoneDataVolume(phoneDataVolume: ChangeCloudPhoneServerRequestBodyPhoneDataVolume  | undefined) {
        this['phone_data_volume'] = phoneDataVolume;
    }
    public get phoneDataVolume(): ChangeCloudPhoneServerRequestBodyPhoneDataVolume | undefined {
        return this['phone_data_volume'];
    }
    public withServerShareDataVolume(serverShareDataVolume: ChangeCloudPhoneServerRequestBodyServerShareDataVolume): ChangeCloudPhoneServerRequestBody {
        this['server_share_data_volume'] = serverShareDataVolume;
        return this;
    }
    public set serverShareDataVolume(serverShareDataVolume: ChangeCloudPhoneServerRequestBodyServerShareDataVolume  | undefined) {
        this['server_share_data_volume'] = serverShareDataVolume;
    }
    public get serverShareDataVolume(): ChangeCloudPhoneServerRequestBodyServerShareDataVolume | undefined {
        return this['server_share_data_volume'];
    }
    public withBandWidth(bandWidth: ChangeCloudPhoneServerRequestBodyBandWidth): ChangeCloudPhoneServerRequestBody {
        this['band_width'] = bandWidth;
        return this;
    }
    public set bandWidth(bandWidth: ChangeCloudPhoneServerRequestBodyBandWidth  | undefined) {
        this['band_width'] = bandWidth;
    }
    public get bandWidth(): ChangeCloudPhoneServerRequestBodyBandWidth | undefined {
        return this['band_width'];
    }
    public withProperty(property: string): ChangeCloudPhoneServerRequestBody {
        this['property'] = property;
        return this;
    }
}