import { CreateSchedulerHints } from './CreateSchedulerHints';
import { DataVolumes } from './DataVolumes';
import { ExtendParam } from './ExtendParam';
import { MetaDataInfo } from './MetaDataInfo';
import { Nics } from './Nics';
import { PublicIp } from './PublicIp';
import { RootVolume } from './RootVolume';
import { SecurityGroupsInfo } from './SecurityGroupsInfo';
import { SystemTags } from './SystemTags';
import { UpdateBaremetalServerMetadataOptionsRequestBody } from './UpdateBaremetalServerMetadataOptionsRequestBody';


export class CreateServers {
    public imageRef?: string;
    public flavorRef?: string;
    public name?: string;
    public metadata?: MetaDataInfo;
    private 'user_data'?: string;
    public adminPass?: string;
    private 'key_name'?: string;
    private 'security_groups'?: Array<SecurityGroupsInfo>;
    public nics?: Array<Nics>;
    private 'availability_zone'?: string;
    public vpcid?: string;
    public publicip?: PublicIp;
    public count?: number;
    private 'root_volume'?: RootVolume;
    private 'data_volumes'?: Array<DataVolumes>;
    public extendparam?: ExtendParam;
    public schedulerHints?: CreateSchedulerHints;
    private 'server_tags'?: Array<SystemTags>;
    private 'metadata_options'?: UpdateBaremetalServerMetadataOptionsRequestBody;
    public constructor(imageRef?: string, flavorRef?: string, name?: string, metadata?: MetaDataInfo, nics?: Array<Nics>, availabilityZone?: string, vpcid?: string, extendparam?: ExtendParam) { 
        this['imageRef'] = imageRef;
        this['flavorRef'] = flavorRef;
        this['name'] = name;
        this['metadata'] = metadata;
        this['nics'] = nics;
        this['availability_zone'] = availabilityZone;
        this['vpcid'] = vpcid;
        this['extendparam'] = extendparam;
    }
    public withImageRef(imageRef: string): CreateServers {
        this['imageRef'] = imageRef;
        return this;
    }
    public withFlavorRef(flavorRef: string): CreateServers {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withName(name: string): CreateServers {
        this['name'] = name;
        return this;
    }
    public withMetadata(metadata: MetaDataInfo): CreateServers {
        this['metadata'] = metadata;
        return this;
    }
    public withUserData(userData: string): CreateServers {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withAdminPass(adminPass: string): CreateServers {
        this['adminPass'] = adminPass;
        return this;
    }
    public withKeyName(keyName: string): CreateServers {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupsInfo>): CreateServers {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupsInfo>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupsInfo> | undefined {
        return this['security_groups'];
    }
    public withNics(nics: Array<Nics>): CreateServers {
        this['nics'] = nics;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateServers {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withVpcid(vpcid: string): CreateServers {
        this['vpcid'] = vpcid;
        return this;
    }
    public withPublicip(publicip: PublicIp): CreateServers {
        this['publicip'] = publicip;
        return this;
    }
    public withCount(count: number): CreateServers {
        this['count'] = count;
        return this;
    }
    public withRootVolume(rootVolume: RootVolume): CreateServers {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: RootVolume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): RootVolume | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<DataVolumes>): CreateServers {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<DataVolumes>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<DataVolumes> | undefined {
        return this['data_volumes'];
    }
    public withExtendparam(extendparam: ExtendParam): CreateServers {
        this['extendparam'] = extendparam;
        return this;
    }
    public withSchedulerHints(schedulerHints: CreateSchedulerHints): CreateServers {
        this['schedulerHints'] = schedulerHints;
        return this;
    }
    public withServerTags(serverTags: Array<SystemTags>): CreateServers {
        this['server_tags'] = serverTags;
        return this;
    }
    public set serverTags(serverTags: Array<SystemTags>  | undefined) {
        this['server_tags'] = serverTags;
    }
    public get serverTags(): Array<SystemTags> | undefined {
        return this['server_tags'];
    }
    public withMetadataOptions(metadataOptions: UpdateBaremetalServerMetadataOptionsRequestBody): CreateServers {
        this['metadata_options'] = metadataOptions;
        return this;
    }
    public set metadataOptions(metadataOptions: UpdateBaremetalServerMetadataOptionsRequestBody  | undefined) {
        this['metadata_options'] = metadataOptions;
    }
    public get metadataOptions(): UpdateBaremetalServerMetadataOptionsRequestBody | undefined {
        return this['metadata_options'];
    }
}