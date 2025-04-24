import { ConnectionInfoFlavor } from './ConnectionInfoFlavor';
import { ConnectionType } from './ConnectionType';
import { ErrorInfo } from './ErrorInfo';
import { KafkaConnectionDetail } from './KafkaConnectionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: CreateConnectionResponseStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public agency?: string;
    public flavor?: ConnectionInfoFlavor;
    public type?: ConnectionType;
    private 'kafka_detail'?: KafkaConnectionDetail;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateConnectionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConnectionResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: CreateConnectionResponseStatusEnum | string): CreateConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): CreateConnectionResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withVpcId(vpcId: string): CreateConnectionResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateConnectionResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAgency(agency: string): CreateConnectionResponse {
        this['agency'] = agency;
        return this;
    }
    public withFlavor(flavor: ConnectionInfoFlavor): CreateConnectionResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withType(type: ConnectionType): CreateConnectionResponse {
        this['type'] = type;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaConnectionDetail): CreateConnectionResponse {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaConnectionDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaConnectionDetail | undefined {
        return this['kafka_detail'];
    }
    public withCreatedTime(createdTime: string): CreateConnectionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateConnectionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): CreateConnectionResponse {
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
export enum CreateConnectionResponseStatusEnum {
    CREATING = 'CREATING',
    CREATED = 'CREATED',
    CREATE_FAILED = 'CREATE_FAILED'
}
