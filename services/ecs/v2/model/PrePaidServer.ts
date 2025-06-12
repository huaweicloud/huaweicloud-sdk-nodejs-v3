import { CpuOptions } from './CpuOptions';
import { PrePaidServerDataVolume } from './PrePaidServerDataVolume';
import { PrePaidServerExtendParam } from './PrePaidServerExtendParam';
import { PrePaidServerNic } from './PrePaidServerNic';
import { PrePaidServerPublicip } from './PrePaidServerPublicip';
import { PrePaidServerRootVolume } from './PrePaidServerRootVolume';
import { PrePaidServerSchedulerHints } from './PrePaidServerSchedulerHints';
import { PrePaidServerSecurityGroup } from './PrePaidServerSecurityGroup';
import { PrePaidServerTag } from './PrePaidServerTag';
import { SecurityOptions } from './SecurityOptions';
import { SerialConsoleOptions } from './SerialConsoleOptions';
import { UpdateServerMetadataOptionsRequestBody } from './UpdateServerMetadataOptionsRequestBody';


export class PrePaidServer {
    private 'auto_terminate_time'?: string;
    public imageRef?: string;
    public flavorRef?: string;
    public name?: string;
    private 'user_data'?: string;
    public adminPass?: string;
    private 'key_name'?: string;
    public vpcid?: string;
    public nics?: Array<PrePaidServerNic>;
    public publicip?: PrePaidServerPublicip;
    public count?: number;
    public isAutoRename?: boolean;
    private 'root_volume'?: PrePaidServerRootVolume;
    private 'data_volumes'?: Array<PrePaidServerDataVolume>;
    private 'security_groups'?: Array<PrePaidServerSecurityGroup>;
    private 'availability_zone'?: string;
    private 'batch_create_in_multi_az'?: boolean;
    public extendparam?: PrePaidServerExtendParam;
    public metadata?: { [key: string]: string; };
    private 'os:scheduler_hints'?: PrePaidServerSchedulerHints;
    public tags?: Array<string>;
    private 'server_tags'?: Array<PrePaidServerTag>;
    public description?: string;
    private 'cpu_options'?: CpuOptions;
    private 'security_options'?: SecurityOptions;
    private 'serial_console_options'?: SerialConsoleOptions;
    private 'metadata_options'?: UpdateServerMetadataOptionsRequestBody;
    public constructor(imageRef?: string, flavorRef?: string, name?: string, vpcid?: string, nics?: Array<PrePaidServerNic>, rootVolume?: PrePaidServerRootVolume) { 
        this['imageRef'] = imageRef;
        this['flavorRef'] = flavorRef;
        this['name'] = name;
        this['vpcid'] = vpcid;
        this['nics'] = nics;
        this['root_volume'] = rootVolume;
    }
    public withAutoTerminateTime(autoTerminateTime: string): PrePaidServer {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string  | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime(): string | undefined {
        return this['auto_terminate_time'];
    }
    public withImageRef(imageRef: string): PrePaidServer {
        this['imageRef'] = imageRef;
        return this;
    }
    public withFlavorRef(flavorRef: string): PrePaidServer {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withName(name: string): PrePaidServer {
        this['name'] = name;
        return this;
    }
    public withUserData(userData: string): PrePaidServer {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withAdminPass(adminPass: string): PrePaidServer {
        this['adminPass'] = adminPass;
        return this;
    }
    public withKeyName(keyName: string): PrePaidServer {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withVpcid(vpcid: string): PrePaidServer {
        this['vpcid'] = vpcid;
        return this;
    }
    public withNics(nics: Array<PrePaidServerNic>): PrePaidServer {
        this['nics'] = nics;
        return this;
    }
    public withPublicip(publicip: PrePaidServerPublicip): PrePaidServer {
        this['publicip'] = publicip;
        return this;
    }
    public withCount(count: number): PrePaidServer {
        this['count'] = count;
        return this;
    }
    public withIsAutoRename(isAutoRename: boolean): PrePaidServer {
        this['isAutoRename'] = isAutoRename;
        return this;
    }
    public withRootVolume(rootVolume: PrePaidServerRootVolume): PrePaidServer {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: PrePaidServerRootVolume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): PrePaidServerRootVolume | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<PrePaidServerDataVolume>): PrePaidServer {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<PrePaidServerDataVolume>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<PrePaidServerDataVolume> | undefined {
        return this['data_volumes'];
    }
    public withSecurityGroups(securityGroups: Array<PrePaidServerSecurityGroup>): PrePaidServer {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<PrePaidServerSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<PrePaidServerSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withAvailabilityZone(availabilityZone: string): PrePaidServer {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withBatchCreateInMultiAz(batchCreateInMultiAz: boolean): PrePaidServer {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
        return this;
    }
    public set batchCreateInMultiAz(batchCreateInMultiAz: boolean  | undefined) {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
    }
    public get batchCreateInMultiAz(): boolean | undefined {
        return this['batch_create_in_multi_az'];
    }
    public withExtendparam(extendparam: PrePaidServerExtendParam): PrePaidServer {
        this['extendparam'] = extendparam;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): PrePaidServer {
        this['metadata'] = metadata;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: PrePaidServerSchedulerHints): PrePaidServer {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: PrePaidServerSchedulerHints  | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints(): PrePaidServerSchedulerHints | undefined {
        return this['os:scheduler_hints'];
    }
    public withTags(tags: Array<string>): PrePaidServer {
        this['tags'] = tags;
        return this;
    }
    public withServerTags(serverTags: Array<PrePaidServerTag>): PrePaidServer {
        this['server_tags'] = serverTags;
        return this;
    }
    public set serverTags(serverTags: Array<PrePaidServerTag>  | undefined) {
        this['server_tags'] = serverTags;
    }
    public get serverTags(): Array<PrePaidServerTag> | undefined {
        return this['server_tags'];
    }
    public withDescription(description: string): PrePaidServer {
        this['description'] = description;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): PrePaidServer {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
    public withSecurityOptions(securityOptions: SecurityOptions): PrePaidServer {
        this['security_options'] = securityOptions;
        return this;
    }
    public set securityOptions(securityOptions: SecurityOptions  | undefined) {
        this['security_options'] = securityOptions;
    }
    public get securityOptions(): SecurityOptions | undefined {
        return this['security_options'];
    }
    public withSerialConsoleOptions(serialConsoleOptions: SerialConsoleOptions): PrePaidServer {
        this['serial_console_options'] = serialConsoleOptions;
        return this;
    }
    public set serialConsoleOptions(serialConsoleOptions: SerialConsoleOptions  | undefined) {
        this['serial_console_options'] = serialConsoleOptions;
    }
    public get serialConsoleOptions(): SerialConsoleOptions | undefined {
        return this['serial_console_options'];
    }
    public withMetadataOptions(metadataOptions: UpdateServerMetadataOptionsRequestBody): PrePaidServer {
        this['metadata_options'] = metadataOptions;
        return this;
    }
    public set metadataOptions(metadataOptions: UpdateServerMetadataOptionsRequestBody  | undefined) {
        this['metadata_options'] = metadataOptions;
    }
    public get metadataOptions(): UpdateServerMetadataOptionsRequestBody | undefined {
        return this['metadata_options'];
    }
}