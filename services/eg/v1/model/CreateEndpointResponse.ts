import { EndpointConnection } from './EndpointConnection';
import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public domain?: string;
    public description?: string;
    public status?: CreateEndpointResponseStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    public type?: CreateEndpointResponseTypeEnum | string;
    public scalable?: boolean;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public endpoints?: Array<EndpointConnection>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEndpointResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateEndpointResponse {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): CreateEndpointResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateEndpointResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDomain(domain: string): CreateEndpointResponse {
        this['domain'] = domain;
        return this;
    }
    public withDescription(description: string): CreateEndpointResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: CreateEndpointResponseStatusEnum | string): CreateEndpointResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): CreateEndpointResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withType(type: CreateEndpointResponseTypeEnum | string): CreateEndpointResponse {
        this['type'] = type;
        return this;
    }
    public withScalable(scalable: boolean): CreateEndpointResponse {
        this['scalable'] = scalable;
        return this;
    }
    public withCreatedTime(createdTime: string): CreateEndpointResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateEndpointResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withEndpoints(endpoints: Array<EndpointConnection>): CreateEndpointResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateEndpointResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointResponseStatusEnum {
    CREATED = 'CREATED',
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateEndpointResponseTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
