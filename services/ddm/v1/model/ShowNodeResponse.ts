
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodeResponse extends SdkResponse {
    public status?: string;
    public name?: string;
    private 'node_id'?: string;
    private 'private_ip'?: string;
    private 'floating_ip'?: string;
    private 'server_id'?: string;
    private 'subnet_name'?: string;
    private 'datavolume_id'?: string;
    private 'res_subnet_ip'?: string;
    private 'systemvolume_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowNodeResponse {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ShowNodeResponse {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): ShowNodeResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPrivateIp(privateIp: string): ShowNodeResponse {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withFloatingIp(floatingIp: string): ShowNodeResponse {
        this['floating_ip'] = floatingIp;
        return this;
    }
    public set floatingIp(floatingIp: string  | undefined) {
        this['floating_ip'] = floatingIp;
    }
    public get floatingIp(): string | undefined {
        return this['floating_ip'];
    }
    public withServerId(serverId: string): ShowNodeResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withSubnetName(subnetName: string): ShowNodeResponse {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withDatavolumeId(datavolumeId: string): ShowNodeResponse {
        this['datavolume_id'] = datavolumeId;
        return this;
    }
    public set datavolumeId(datavolumeId: string  | undefined) {
        this['datavolume_id'] = datavolumeId;
    }
    public get datavolumeId(): string | undefined {
        return this['datavolume_id'];
    }
    public withResSubnetIp(resSubnetIp: string): ShowNodeResponse {
        this['res_subnet_ip'] = resSubnetIp;
        return this;
    }
    public set resSubnetIp(resSubnetIp: string  | undefined) {
        this['res_subnet_ip'] = resSubnetIp;
    }
    public get resSubnetIp(): string | undefined {
        return this['res_subnet_ip'];
    }
    public withSystemvolumeId(systemvolumeId: string): ShowNodeResponse {
        this['systemvolume_id'] = systemvolumeId;
        return this;
    }
    public set systemvolumeId(systemvolumeId: string  | undefined) {
        this['systemvolume_id'] = systemvolumeId;
    }
    public get systemvolumeId(): string | undefined {
        return this['systemvolume_id'];
    }
}