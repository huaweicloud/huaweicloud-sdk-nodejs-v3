import { PostPaidServerDataVolume } from './PostPaidServerDataVolume';
import { PostPaidServerExtendParam } from './PostPaidServerExtendParam';
import { PostPaidServerNic } from './PostPaidServerNic';
import { PostPaidServerPublicip } from './PostPaidServerPublicip';
import { PostPaidServerRootVolume } from './PostPaidServerRootVolume';
import { PostPaidServerSchedulerHints } from './PostPaidServerSchedulerHints';
import { PostPaidServerSecurityGroup } from './PostPaidServerSecurityGroup';
import { PostPaidServerTag } from './PostPaidServerTag';


export class PostPaidServer {
    private 'auto_terminate_time'?: string | undefined;
    public adminPass?: string;
    private 'availability_zone'?: string | undefined;
    private 'batch_create_in_multi_az'?: boolean | undefined;
    public count?: number;
    private 'data_volumes'?: Array<PostPaidServerDataVolume> | undefined;
    public extendparam?: PostPaidServerExtendParam;
    public flavorRef: string;
    public imageRef: string;
    public isAutoRename?: boolean;
    private 'key_name'?: string | undefined;
    public metadata?: { [key: string]: string; };
    public name: string;
    public nics: Array<PostPaidServerNic>;
    private 'os:scheduler_hints'?: PostPaidServerSchedulerHints | undefined;
    public publicip?: PostPaidServerPublicip;
    private 'root_volume': PostPaidServerRootVolume | undefined;
    private 'security_groups'?: Array<PostPaidServerSecurityGroup> | undefined;
    private 'server_tags'?: Array<PostPaidServerTag> | undefined;
    public tags?: Array<string>;
    private 'user_data'?: string | undefined;
    public vpcid: string;
    public description?: string;
    public constructor(flavorRef?: any, imageRef?: any, name?: any, nics?: any, rootVolume?: any, vpcid?: any) { 
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
    public set autoTerminateTime(autoTerminateTime: string | undefined) {
        this['auto_terminate_time'] = autoTerminateTime;
    }
    public get autoTerminateTime() {
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
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withBatchCreateInMultiAz(batchCreateInMultiAz: boolean): PostPaidServer {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
        return this;
    }
    public set batchCreateInMultiAz(batchCreateInMultiAz: boolean | undefined) {
        this['batch_create_in_multi_az'] = batchCreateInMultiAz;
    }
    public get batchCreateInMultiAz() {
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
    public set dataVolumes(dataVolumes: Array<PostPaidServerDataVolume> | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes() {
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
    public set keyName(keyName: string | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName() {
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
    public set osSchedulerHints(osSchedulerHints: PostPaidServerSchedulerHints | undefined) {
        this['os:scheduler_hints'] = osSchedulerHints;
    }
    public get osSchedulerHints() {
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
    public set rootVolume(rootVolume: PostPaidServerRootVolume | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume() {
        return this['root_volume'];
    }
    public withSecurityGroups(securityGroups: Array<PostPaidServerSecurityGroup>): PostPaidServer {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<PostPaidServerSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withServerTags(serverTags: Array<PostPaidServerTag>): PostPaidServer {
        this['server_tags'] = serverTags;
        return this;
    }
    public set serverTags(serverTags: Array<PostPaidServerTag> | undefined) {
        this['server_tags'] = serverTags;
    }
    public get serverTags() {
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
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
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
}