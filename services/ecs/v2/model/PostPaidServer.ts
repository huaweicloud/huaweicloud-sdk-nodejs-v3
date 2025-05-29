import { CpuOptions } from './CpuOptions';
import { PostPaidServerDataVolume } from './PostPaidServerDataVolume';
import { PostPaidServerExtendParam } from './PostPaidServerExtendParam';
import { PostPaidServerNic } from './PostPaidServerNic';
import { PostPaidServerPublicip } from './PostPaidServerPublicip';
import { PostPaidServerRootVolume } from './PostPaidServerRootVolume';
import { PostPaidServerSchedulerHints } from './PostPaidServerSchedulerHints';
import { PostPaidServerSecurityGroup } from './PostPaidServerSecurityGroup';
import { PostPaidServerTag } from './PostPaidServerTag';
import { SerialConsoleOptions } from './SerialConsoleOptions';


export class PostPaidServer {
    private 'auto_terminate_time'?: string;
    public adminPass?: string;
    private 'availability_zone'?: string;
    private 'batch_create_in_multi_az'?: boolean;
    public count?: number;
    private 'data_volumes'?: Array<PostPaidServerDataVolume>;
    public extendparam?: PostPaidServerExtendParam;
    public flavorRef?: string;
    public imageRef?: string;
    public isAutoRename?: boolean;
    private 'key_name'?: string;
    public metadata?: { [key: string]: string; };
    public name?: string;
    public nics?: Array<PostPaidServerNic>;
    private 'os:scheduler_hints'?: PostPaidServerSchedulerHints;
    public publicip?: PostPaidServerPublicip;
    private 'root_volume'?: PostPaidServerRootVolume;
    private 'security_groups'?: Array<PostPaidServerSecurityGroup>;
    private 'server_tags'?: Array<PostPaidServerTag>;
    public tags?: Array<string>;
    private 'user_data'?: string;
    public vpcid?: string;
    public description?: string;
    private 'cpu_options'?: CpuOptions;
    private 'serial_console_options'?: SerialConsoleOptions;
    public constructor(flavorRef?: string, imageRef?: string, name?: string, nics?: Array<PostPaidServerNic>, rootVolume?: PostPaidServerRootVolume, vpcid?: string) { 
        this['flavorRef'] = flavorRef;
        this['imageRef'] = imageRef;
        this['name'] = name;
        this['nics'] = nics;
        this['root_volume'] = rootVolume;
        this['vpcid'] = vpcid;
    }
    public withAutoTerminateTime(autoTerminateTime: string): PostPaidServer {
        this['auto_terminate_time'] = autoTerminateTime;
        return this;
    }
    public set autoTerminateTime(autoTerminateTime: string  | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime(): string | undefined {
        return this['auto_terminate_time'];
    }
    public withAdminPass(adminPass: string): PostPaidServer {
        this['adminPass'] = adminPass;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): PostPaidServer {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withBatchCreateInMultiAz(batchCreateInMultiAz: boolean): PostPaidServer {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
        return this;
    }
    public set batchCreateInMultiAz(batchCreateInMultiAz: boolean  | undefined) {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
    }
    public get batchCreateInMultiAz(): boolean | undefined {
        return this['batch_create_in_multi_az'];
    }
    public withCount(count: number): PostPaidServer {
        this['count'] = count;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<PostPaidServerDataVolume>): PostPaidServer {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<PostPaidServerDataVolume>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<PostPaidServerDataVolume> | undefined {
        return this['data_volumes'];
    }
    public withExtendparam(extendparam: PostPaidServerExtendParam): PostPaidServer {
        this['extendparam'] = extendparam;
        return this;
    }
    public withFlavorRef(flavorRef: string): PostPaidServer {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withImageRef(imageRef: string): PostPaidServer {
        this['imageRef'] = imageRef;
        return this;
    }
    public withIsAutoRename(isAutoRename: boolean): PostPaidServer {
        this['isAutoRename'] = isAutoRename;
        return this;
    }
    public withKeyName(keyName: string): PostPaidServer {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withMetadata(metadata: { [key: string]: string; }): PostPaidServer {
        this['metadata'] = metadata;
        return this;
    }
    public withName(name: string): PostPaidServer {
        this['name'] = name;
        return this;
    }
    public withNics(nics: Array<PostPaidServerNic>): PostPaidServer {
        this['nics'] = nics;
        return this;
    }
    public withOsSchedulerHints(osSchedulerHints: PostPaidServerSchedulerHints): PostPaidServer {
        this['os:scheduler_hints'] = osSchedulerHints;
        return this;
    }
    public set osSchedulerHints(osSchedulerHints: PostPaidServerSchedulerHints  | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints(): PostPaidServerSchedulerHints | undefined {
        return this['os:scheduler_hints'];
    }
    public withPublicip(publicip: PostPaidServerPublicip): PostPaidServer {
        this['publicip'] = publicip;
        return this;
    }
    public withRootVolume(rootVolume: PostPaidServerRootVolume): PostPaidServer {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: PostPaidServerRootVolume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): PostPaidServerRootVolume | undefined {
        return this['root_volume'];
    }
    public withSecurityGroups(securityGroups: Array<PostPaidServerSecurityGroup>): PostPaidServer {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<PostPaidServerSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<PostPaidServerSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withServerTags(serverTags: Array<PostPaidServerTag>): PostPaidServer {
        this['server_tags'] = serverTags;
        return this;
    }
    public set serverTags(serverTags: Array<PostPaidServerTag>  | undefined) {
        this['server_tags'] = serverTags;
    }
    public get serverTags(): Array<PostPaidServerTag> | undefined {
        return this['server_tags'];
    }
    public withTags(tags: Array<string>): PostPaidServer {
        this['tags'] = tags;
        return this;
    }
    public withUserData(userData: string): PostPaidServer {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withVpcid(vpcid: string): PostPaidServer {
        this['vpcid'] = vpcid;
        return this;
    }
    public withDescription(description: string): PostPaidServer {
        this['description'] = description;
        return this;
    }
    public withCpuOptions(cpuOptions: CpuOptions): PostPaidServer {
        this['cpu_options'] = cpuOptions;
        return this;
    }
    public set cpuOptions(cpuOptions: CpuOptions  | undefined) {
        this['cpu_options'] = cpuOptions;
    }
    public get cpuOptions(): CpuOptions | undefined {
        return this['cpu_options'];
    }
    public withSerialConsoleOptions(serialConsoleOptions: SerialConsoleOptions): PostPaidServer {
        this['serial_console_options'] = serialConsoleOptions;
        return this;
    }
    public set serialConsoleOptions(serialConsoleOptions: SerialConsoleOptions  | undefined) {
        this['serial_console_options'] = serialConsoleOptions;
    }
    public get serialConsoleOptions(): SerialConsoleOptions | undefined {
        return this['serial_console_options'];
    }
}