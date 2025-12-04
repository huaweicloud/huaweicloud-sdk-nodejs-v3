import { Address } from './Address';
import { Bandwidth } from './Bandwidth';
import { ShowCloudPhoneServerDetailResponseBodyMetadata } from './ShowCloudPhoneServerDetailResponseBodyMetadata';
import { ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo } from './ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo';
import { Volume } from './Volume';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCloudPhoneServerDetailResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'server_name'?: string;
    private 'availability_zone'?: string;
    private 'server_id'?: string;
    private 'server_model_name'?: string;
    private 'phone_model_name'?: string;
    private 'keypair_name'?: string;
    public status?: number;
    private 'vpc_id'?: string;
    public cidr?: string;
    private 'vpc_cidr'?: string;
    private 'subnet_id'?: string;
    private 'subnet_cidr'?: string;
    private 'resource_project_id'?: string;
    public metadata?: ShowCloudPhoneServerDetailResponseBodyMetadata;
    public addresses?: Array<Address>;
    private 'band_widths'?: Array<Bandwidth>;
    public volumes?: Array<Volume>;
    private 'share_volume_info'?: ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo;
    private 'network_version'?: string;
    private 'enterprise_project_id'?: string;
    private 'security_groups'?: Array<string>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowCloudPhoneServerDetailResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerName(serverName: string): ShowCloudPhoneServerDetailResponse {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowCloudPhoneServerDetailResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withServerId(serverId: string): ShowCloudPhoneServerDetailResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerModelName(serverModelName: string): ShowCloudPhoneServerDetailResponse {
        this['server_model_name'] = serverModelName;
        return this;
    }
    public set serverModelName(serverModelName: string  | undefined) {
        this['server_model_name'] = serverModelName;
    }
    public get serverModelName(): string | undefined {
        return this['server_model_name'];
    }
    public withPhoneModelName(phoneModelName: string): ShowCloudPhoneServerDetailResponse {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withKeypairName(keypairName: string): ShowCloudPhoneServerDetailResponse {
        this['keypair_name'] = keypairName;
        return this;
    }
    public set keypairName(keypairName: string  | undefined) {
        this['keypair_name'] = keypairName;
    }
    public get keypairName(): string | undefined {
        return this['keypair_name'];
    }
    public withStatus(status: number): ShowCloudPhoneServerDetailResponse {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): ShowCloudPhoneServerDetailResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCidr(cidr: string): ShowCloudPhoneServerDetailResponse {
        this['cidr'] = cidr;
        return this;
    }
    public withVpcCidr(vpcCidr: string): ShowCloudPhoneServerDetailResponse {
        this['vpc_cidr'] = vpcCidr;
        return this;
    }
    public set vpcCidr(vpcCidr: string  | undefined) {
        this['vpc_cidr'] = vpcCidr;
    }
    public get vpcCidr(): string | undefined {
        return this['vpc_cidr'];
    }
    public withSubnetId(subnetId: string): ShowCloudPhoneServerDetailResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetCidr(subnetCidr: string): ShowCloudPhoneServerDetailResponse {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withResourceProjectId(resourceProjectId: string): ShowCloudPhoneServerDetailResponse {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withMetadata(metadata: ShowCloudPhoneServerDetailResponseBodyMetadata): ShowCloudPhoneServerDetailResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withAddresses(addresses: Array<Address>): ShowCloudPhoneServerDetailResponse {
        this['addresses'] = addresses;
        return this;
    }
    public withBandWidths(bandWidths: Array<Bandwidth>): ShowCloudPhoneServerDetailResponse {
        this['band_widths'] = bandWidths;
        return this;
    }
    public set bandWidths(bandWidths: Array<Bandwidth>  | undefined) {
        this['band_widths'] = bandWidths;
    }
    public get bandWidths(): Array<Bandwidth> | undefined {
        return this['band_widths'];
    }
    public withVolumes(volumes: Array<Volume>): ShowCloudPhoneServerDetailResponse {
        this['volumes'] = volumes;
        return this;
    }
    public withShareVolumeInfo(shareVolumeInfo: ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo): ShowCloudPhoneServerDetailResponse {
        this['share_volume_info'] = shareVolumeInfo;
        return this;
    }
    public set shareVolumeInfo(shareVolumeInfo: ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo  | undefined) {
        this['share_volume_info'] = shareVolumeInfo;
    }
    public get shareVolumeInfo(): ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo | undefined {
        return this['share_volume_info'];
    }
    public withNetworkVersion(networkVersion: string): ShowCloudPhoneServerDetailResponse {
        this['network_version'] = networkVersion;
        return this;
    }
    public set networkVersion(networkVersion: string  | undefined) {
        this['network_version'] = networkVersion;
    }
    public get networkVersion(): string | undefined {
        return this['network_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCloudPhoneServerDetailResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSecurityGroups(securityGroups: Array<string>): ShowCloudPhoneServerDetailResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withCreateTime(createTime: string): ShowCloudPhoneServerDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowCloudPhoneServerDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}