import { EndpointConnection } from './EndpointConnection';
import { ErrorInfo } from './ErrorInfo';


export class EndpointInfo {
    public id?: string;
    public name?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public domain?: string;
    public description?: string;
    public status?: EndpointInfoStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    public type?: EndpointInfoTypeEnum | string;
    public scalable?: boolean;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public endpoints?: Array<EndpointConnection>;
    public constructor() { 
    }
    public withId(id: string): EndpointInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EndpointInfo {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): EndpointInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): EndpointInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDomain(domain: string): EndpointInfo {
        this['domain'] = domain;
        return this;
    }
    public withDescription(description: string): EndpointInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: EndpointInfoStatusEnum | string): EndpointInfo {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): EndpointInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withType(type: EndpointInfoTypeEnum | string): EndpointInfo {
        this['type'] = type;
        return this;
    }
    public withScalable(scalable: boolean): EndpointInfo {
        this['scalable'] = scalable;
        return this;
    }
    public withCreatedTime(createdTime: string): EndpointInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): EndpointInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withEndpoints(endpoints: Array<EndpointConnection>): EndpointInfo {
        this['endpoints'] = endpoints;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointInfoStatusEnum {
    CREATED = 'CREATED',
    CREATING = 'CREATING',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum EndpointInfoTypeEnum {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}
