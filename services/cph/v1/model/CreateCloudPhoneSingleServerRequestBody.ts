import { CreateCloudPhoneSingleServerRequestBodyDataVolume } from './CreateCloudPhoneSingleServerRequestBodyDataVolume';
import { CreateCloudPhoneSingleServerRequestBodyOrderParam } from './CreateCloudPhoneSingleServerRequestBodyOrderParam';
import { CreateCloudPhoneSingleServerRequestBodyPublicIp } from './CreateCloudPhoneSingleServerRequestBodyPublicIp';
import { NicForSingleServer } from './NicForSingleServer';


export class CreateCloudPhoneSingleServerRequestBody {
    private 'server_name'?: string;
    private 'server_model_name'?: string;
    public count?: number;
    private 'order_param'?: CreateCloudPhoneSingleServerRequestBodyOrderParam;
    public nics?: Array<NicForSingleServer>;
    private 'public_ip'?: CreateCloudPhoneSingleServerRequestBodyPublicIp;
    private 'availability_zone'?: string;
    private 'data_volume'?: CreateCloudPhoneSingleServerRequestBodyDataVolume;
    private 'keypair_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'image_id'?: string;
    public constructor(serverName?: string, serverModelName?: string, count?: number, orderParam?: CreateCloudPhoneSingleServerRequestBodyOrderParam, nics?: Array<NicForSingleServer>, publicIp?: CreateCloudPhoneSingleServerRequestBodyPublicIp, keypairName?: string) { 
        this['server_name'] = serverName;
        this['server_model_name'] = serverModelName;
        this['count'] = count;
        this['order_param'] = orderParam;
        this['nics'] = nics;
        this['public_ip'] = publicIp;
        this['keypair_name'] = keypairName;
    }
    public withServerName(serverName: string): CreateCloudPhoneSingleServerRequestBody {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerModelName(serverModelName: string): CreateCloudPhoneSingleServerRequestBody {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withCount(count: number): CreateCloudPhoneSingleServerRequestBody {
        this['count'] = count;
        return this;
    }
    public withOrderParam(orderParam: CreateCloudPhoneSingleServerRequestBodyOrderParam): CreateCloudPhoneSingleServerRequestBody {
        this['order_param'] = orderParam;
        return this;
    }
    public set orderParam(orderParam: CreateCloudPhoneSingleServerRequestBodyOrderParam  | undefined) {
        this['order_param'] = orderParam;
    }
    public get orderParam(): CreateCloudPhoneSingleServerRequestBodyOrderParam | undefined {
        return this['order_param'];
    }
    public withNics(nics: Array<NicForSingleServer>): CreateCloudPhoneSingleServerRequestBody {
        this['nics'] = nics;
        return this;
    }
    public withPublicIp(publicIp: CreateCloudPhoneSingleServerRequestBodyPublicIp): CreateCloudPhoneSingleServerRequestBody {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: CreateCloudPhoneSingleServerRequestBodyPublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): CreateCloudPhoneSingleServerRequestBodyPublicIp | undefined {
        return this['public_ip'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateCloudPhoneSingleServerRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withDataVolume(dataVolume: CreateCloudPhoneSingleServerRequestBodyDataVolume): CreateCloudPhoneSingleServerRequestBody {
        this['data_volume'] = dataVolume;
        return this;
    }
    public set dataVolume(dataVolume: CreateCloudPhoneSingleServerRequestBodyDataVolume  | undefined) {
        this['data_volume'] = dataVolume;
    }
    public get dataVolume(): CreateCloudPhoneSingleServerRequestBodyDataVolume | undefined {
        return this['data_volume'];
    }
    public withKeypairName(keypairName: string): CreateCloudPhoneSingleServerRequestBody {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCloudPhoneSingleServerRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageId(imageId: string): CreateCloudPhoneSingleServerRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}