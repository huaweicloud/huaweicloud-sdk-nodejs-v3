import { EndpointConnection } from './EndpointConnection';
import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public domain?: string;
    public description?: string;
    public status?: UpdateEndpointResponseStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    public type?: UpdateEndpointResponseTypeEnum | string;
    public scalable?: boolean;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public endpoints?: Array<EndpointConnection>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEndpointResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateEndpointResponse {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): UpdateEndpointResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdateEndpointResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDomain(domain: string): UpdateEndpointResponse {
        this['domain'] = domain;
        return this;
    }
    public withDescription(description: string): UpdateEndpointResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: UpdateEndpointResponseStatusEnum | string): UpdateEndpointResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): UpdateEndpointResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withType(type: UpdateEndpointResponseTypeEnum | string): UpdateEndpointResponse {
        this['type'] = type;
        return this;
    }
    public withScalable(scalable: boolean): UpdateEndpointResponse {
        this['scalable'] = scalable;
        return this;
    }
    public withCreatedTime(createdTime: string): UpdateEndpointResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateEndpointResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withEndpoints(endpoints: Array<EndpointConnection>): UpdateEndpointResponse {
        this['endpoints'] = endpoints;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointResponseStatusEnum {
    CREATED = 'CREATED',
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEndpointResponseTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
