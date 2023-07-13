import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointWhiteResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: UpdateEndpointWhiteResponseServiceTypeEnum | undefined;
    public status?: UpdateEndpointWhiteResponseStatusEnum;
    public ip?: string;
    private 'active_status'?: Array<string> | undefined;
    private 'endpoint_service_name'?: string | undefined;
    private 'marker_id'?: number | undefined;
    private 'endpoint_service_id'?: string | undefined;
    private 'enable_dns'?: boolean | undefined;
    private 'dns_names'?: Array<string> | undefined;
    private 'subnet_id'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'project_id'?: string | undefined;
    public tags?: Array<TagList>;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEndpointWhiteResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: UpdateEndpointWhiteResponseServiceTypeEnum): UpdateEndpointWhiteResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: UpdateEndpointWhiteResponseServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withStatus(status: UpdateEndpointWhiteResponseStatusEnum): UpdateEndpointWhiteResponse {
        this['status'] = status;
        return this;
    }
    public withIp(ip: string): UpdateEndpointWhiteResponse {
        this['ip'] = ip;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): UpdateEndpointWhiteResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string> | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus() {
        return this['active_status'];
    }
    public withEndpointServiceName(endpointServiceName: string): UpdateEndpointWhiteResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): UpdateEndpointWhiteResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId() {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): UpdateEndpointWhiteResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId() {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): UpdateEndpointWhiteResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns() {
        return this['enable_dns'];
    }
    public withDnsNames(dnsNames: Array<string>): UpdateEndpointWhiteResponse {
        this['dns_names'] = dnsNames;
        return this;
    }
    public set dnsNames(dnsNames: Array<string> | undefined) {
        this['dns_names'] = dnsNames;
    }
    public get dnsNames() {
        return this['dns_names'];
    }
    public withSubnetId(subnetId: string): UpdateEndpointWhiteResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): UpdateEndpointWhiteResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withCreatedAt(createdAt: string): UpdateEndpointWhiteResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateEndpointWhiteResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): UpdateEndpointWhiteResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTags(tags: Array<TagList>): UpdateEndpointWhiteResponse {
        this['tags'] = tags;
        return this;
    }
    public withWhitelist(whitelist: Array<string>): UpdateEndpointWhiteResponse {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): UpdateEndpointWhiteResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointWhiteResponseServiceTypeEnum {
    INTERFACE = 'interface',
    GATEWAY = 'gateway'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointWhiteResponseStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
