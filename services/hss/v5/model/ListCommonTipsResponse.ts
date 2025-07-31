import { CommonList } from './CommonList';
import { HostTagInfoList } from './HostTagInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommonTipsResponse extends SdkResponse {
    private 'host_name'?: CommonList;
    private 'host_id'?: CommonList;
    private 'public_ip'?: CommonList;
    private 'private_ip'?: CommonList;
    private 'vpc_id'?: CommonList;
    private 'cluster_id'?: CommonList;
    private 'host_tags'?: HostTagInfoList;
    public constructor() { 
        super();
    }
    public withHostName(hostName: CommonList): ListCommonTipsResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: CommonList  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): CommonList | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: CommonList): ListCommonTipsResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: CommonList  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): CommonList | undefined {
        return this['host_id'];
    }
    public withPublicIp(publicIp: CommonList): ListCommonTipsResponse {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: CommonList  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): CommonList | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: CommonList): ListCommonTipsResponse {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: CommonList  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): CommonList | undefined {
        return this['private_ip'];
    }
    public withVpcId(vpcId: CommonList): ListCommonTipsResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: CommonList  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): CommonList | undefined {
        return this['vpc_id'];
    }
    public withClusterId(clusterId: CommonList): ListCommonTipsResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: CommonList  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): CommonList | undefined {
        return this['cluster_id'];
    }
    public withHostTags(hostTags: HostTagInfoList): ListCommonTipsResponse {
        this['host_tags'] = hostTags;
        return this;
    }
    public set hostTags(hostTags: HostTagInfoList  | undefined) {
        this['host_tags'] = hostTags;
    }
    public get hostTags(): HostTagInfoList | undefined {
        return this['host_tags'];
    }
}