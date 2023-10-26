import { ClusterDetailInstanceFlavor } from './ClusterDetailInstanceFlavor';
import { ClusterDetailInstanceVolume } from './ClusterDetailInstanceVolume';
import { ClusterLinks } from './ClusterLinks';
import { Resource } from './Resource';


export class ClusterDetailInstance {
    public flavor?: ClusterDetailInstanceFlavor;
    public volume?: ClusterDetailInstanceVolume;
    public status?: string;
    public actions?: Array<string>;
    public type?: string;
    public id?: string;
    public name?: string;
    public isFrozen?: string;
    public components?: string;
    private 'config_status'?: string;
    public role?: string;
    public group?: string;
    public links?: Array<ClusterLinks>;
    public paramsGroupId?: string;
    public publicIp?: string;
    public manageIp?: string;
    public trafficIp?: string;
    private 'shard_id'?: string;
    private 'manage_fix_ip'?: string;
    private 'private_ip'?: string;
    private 'internal_ip'?: string;
    public resource?: Array<Resource>;
    public constructor(flavor?: ClusterDetailInstanceFlavor, volume?: ClusterDetailInstanceVolume, status?: string, type?: string, id?: string, name?: string, isFrozen?: string) { 
        this['flavor'] = flavor;
        this['volume'] = volume;
        this['status'] = status;
        this['type'] = type;
        this['id'] = id;
        this['name'] = name;
        this['isFrozen'] = isFrozen;
    }
    public withFlavor(flavor: ClusterDetailInstanceFlavor): ClusterDetailInstance {
        this['flavor'] = flavor;
        return this;
    }
    public withVolume(volume: ClusterDetailInstanceVolume): ClusterDetailInstance {
        this['volume'] = volume;
        return this;
    }
    public withStatus(status: string): ClusterDetailInstance {
        this['status'] = status;
        return this;
    }
    public withActions(actions: Array<string>): ClusterDetailInstance {
        this['actions'] = actions;
        return this;
    }
    public withType(type: string): ClusterDetailInstance {
        this['type'] = type;
        return this;
    }
    public withId(id: string): ClusterDetailInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterDetailInstance {
        this['name'] = name;
        return this;
    }
    public withIsFrozen(isFrozen: string): ClusterDetailInstance {
        this['isFrozen'] = isFrozen;
        return this;
    }
    public withComponents(components: string): ClusterDetailInstance {
        this['components'] = components;
        return this;
    }
    public withConfigStatus(configStatus: string): ClusterDetailInstance {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
    public withRole(role: string): ClusterDetailInstance {
        this['role'] = role;
        return this;
    }
    public withGroup(group: string): ClusterDetailInstance {
        this['group'] = group;
        return this;
    }
    public withLinks(links: Array<ClusterLinks>): ClusterDetailInstance {
        this['links'] = links;
        return this;
    }
    public withParamsGroupId(paramsGroupId: string): ClusterDetailInstance {
        this['paramsGroupId'] = paramsGroupId;
        return this;
    }
    public withPublicIp(publicIp: string): ClusterDetailInstance {
        this['publicIp'] = publicIp;
        return this;
    }
    public withManageIp(manageIp: string): ClusterDetailInstance {
        this['manageIp'] = manageIp;
        return this;
    }
    public withTrafficIp(trafficIp: string): ClusterDetailInstance {
        this['trafficIp'] = trafficIp;
        return this;
    }
    public withShardId(shardId: string): ClusterDetailInstance {
        this['shard_id'] = shardId;
        return this;
    }
    public set shardId(shardId: string  | undefined) {
        this['shard_id'] = shardId;
    }
    public get shardId(): string | undefined {
        return this['shard_id'];
    }
    public withManageFixIp(manageFixIp: string): ClusterDetailInstance {
        this['manage_fix_ip'] = manageFixIp;
        return this;
    }
    public set manageFixIp(manageFixIp: string  | undefined) {
        this['manage_fix_ip'] = manageFixIp;
    }
    public get manageFixIp(): string | undefined {
        return this['manage_fix_ip'];
    }
    public withPrivateIp(privateIp: string): ClusterDetailInstance {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withInternalIp(internalIp: string): ClusterDetailInstance {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
    public withResource(resource: Array<Resource>): ClusterDetailInstance {
        this['resource'] = resource;
        return this;
    }
}