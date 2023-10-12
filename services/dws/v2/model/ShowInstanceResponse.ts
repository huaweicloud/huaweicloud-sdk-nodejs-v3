import { ClusterFlavorResp } from './ClusterFlavorResp';
import { CompatibleConfigurationResp } from './CompatibleConfigurationResp';
import { CompatibleDataStoreResp } from './CompatibleDataStoreResp';
import { CompatibleFaultResp } from './CompatibleFaultResp';
import { CompatibleInstanceVolumeResp } from './CompatibleInstanceVolumeResp';
import { CompatibleReplicasResp } from './CompatibleReplicasResp';
import { LinkResp } from './LinkResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    private 'configuration_status'?: string;
    private 'params_group_id'?: string;
    public type?: string;
    private 'subnet_id'?: string;
    public role?: string;
    private 'internal_subnet_id'?: string;
    public group?: string;
    private 'secure_group'?: string;
    public vpc?: string;
    public azcode?: string;
    public region?: string;
    private 'cluster_id'?: string;
    public created?: string;
    public updated?: string;
    public status?: string;
    public name?: string;
    public links?: Array<LinkResp>;
    public id?: string;
    public flavor?: ClusterFlavorResp;
    public volume?: CompatibleInstanceVolumeResp;
    public datastore?: CompatibleDataStoreResp;
    public fault?: CompatibleFaultResp;
    public configuration?: CompatibleConfigurationResp;
    public locality?: string;
    public replicas?: Array<CompatibleReplicasResp>;
    private 'db_user'?: string;
    private 'storage_engine'?: string;
    private 'pay_model'?: number;
    private 'public_ip'?: string;
    private 'traffic_ip'?: string;
    public constructor() { 
        super();
    }
    public withConfigurationStatus(configurationStatus: string): ShowInstanceResponse {
        this['configuration_status'] = configurationStatus;
        return this;
    }
    public set configurationStatus(configurationStatus: string  | undefined) {
        this['configuration_status'] = configurationStatus;
    }
    public get configurationStatus(): string | undefined {
        return this['configuration_status'];
    }
    public withParamsGroupId(paramsGroupId: string): ShowInstanceResponse {
        this['params_group_id'] = paramsGroupId;
        return this;
    }
    public set paramsGroupId(paramsGroupId: string  | undefined) {
        this['params_group_id'] = paramsGroupId;
    }
    public get paramsGroupId(): string | undefined {
        return this['params_group_id'];
    }
    public withType(type: string): ShowInstanceResponse {
        this['type'] = type;
        return this;
    }
    public withSubnetId(subnetId: string): ShowInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withRole(role: string): ShowInstanceResponse {
        this['role'] = role;
        return this;
    }
    public withInternalSubnetId(internalSubnetId: string): ShowInstanceResponse {
        this['internal_subnet_id'] = internalSubnetId;
        return this;
    }
    public set internalSubnetId(internalSubnetId: string  | undefined) {
        this['internal_subnet_id'] = internalSubnetId;
    }
    public get internalSubnetId(): string | undefined {
        return this['internal_subnet_id'];
    }
    public withGroup(group: string): ShowInstanceResponse {
        this['group'] = group;
        return this;
    }
    public withSecureGroup(secureGroup: string): ShowInstanceResponse {
        this['secure_group'] = secureGroup;
        return this;
    }
    public set secureGroup(secureGroup: string  | undefined) {
        this['secure_group'] = secureGroup;
    }
    public get secureGroup(): string | undefined {
        return this['secure_group'];
    }
    public withVpc(vpc: string): ShowInstanceResponse {
        this['vpc'] = vpc;
        return this;
    }
    public withAzcode(azcode: string): ShowInstanceResponse {
        this['azcode'] = azcode;
        return this;
    }
    public withRegion(region: string): ShowInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withClusterId(clusterId: string): ShowInstanceResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCreated(created: string): ShowInstanceResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowInstanceResponse {
        this['updated'] = updated;
        return this;
    }
    public withStatus(status: string): ShowInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withLinks(links: Array<LinkResp>): ShowInstanceResponse {
        this['links'] = links;
        return this;
    }
    public withId(id: string): ShowInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withFlavor(flavor: ClusterFlavorResp): ShowInstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withVolume(volume: CompatibleInstanceVolumeResp): ShowInstanceResponse {
        this['volume'] = volume;
        return this;
    }
    public withDatastore(datastore: CompatibleDataStoreResp): ShowInstanceResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withFault(fault: CompatibleFaultResp): ShowInstanceResponse {
        this['fault'] = fault;
        return this;
    }
    public withConfiguration(configuration: CompatibleConfigurationResp): ShowInstanceResponse {
        this['configuration'] = configuration;
        return this;
    }
    public withLocality(locality: string): ShowInstanceResponse {
        this['locality'] = locality;
        return this;
    }
    public withReplicas(replicas: Array<CompatibleReplicasResp>): ShowInstanceResponse {
        this['replicas'] = replicas;
        return this;
    }
    public withDbUser(dbUser: string): ShowInstanceResponse {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withStorageEngine(storageEngine: string): ShowInstanceResponse {
        this['storage_engine'] = storageEngine;
        return this;
    }
    public set storageEngine(storageEngine: string  | undefined) {
        this['storage_engine'] = storageEngine;
    }
    public get storageEngine(): string | undefined {
        return this['storage_engine'];
    }
    public withPayModel(payModel: number): ShowInstanceResponse {
        this['pay_model'] = payModel;
        return this;
    }
    public set payModel(payModel: number  | undefined) {
        this['pay_model'] = payModel;
    }
    public get payModel(): number | undefined {
        return this['pay_model'];
    }
    public withPublicIp(publicIp: string): ShowInstanceResponse {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withTrafficIp(trafficIp: string): ShowInstanceResponse {
        this['traffic_ip'] = trafficIp;
        return this;
    }
    public set trafficIp(trafficIp: string  | undefined) {
        this['traffic_ip'] = trafficIp;
    }
    public get trafficIp(): string | undefined {
        return this['traffic_ip'];
    }
}