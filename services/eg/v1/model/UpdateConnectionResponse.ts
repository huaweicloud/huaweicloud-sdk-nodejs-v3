import { ConnectionInfoFlavor } from './ConnectionInfoFlavor';
import { ConnectionType } from './ConnectionType';
import { ErrorInfo } from './ErrorInfo';
import { KafkaConnectionDetail } from './KafkaConnectionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConnectionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: UpdateConnectionResponseStatusEnum | string;
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
    public withId(id: string): UpdateConnectionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateConnectionResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: UpdateConnectionResponseStatusEnum | string): UpdateConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): UpdateConnectionResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withVpcId(vpcId: string): UpdateConnectionResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdateConnectionResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAgency(agency: string): UpdateConnectionResponse {
        this['agency'] = agency;
        return this;
    }
    public withFlavor(flavor: ConnectionInfoFlavor): UpdateConnectionResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withType(type: ConnectionType): UpdateConnectionResponse {
        this['type'] = type;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaConnectionDetail): UpdateConnectionResponse {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaConnectionDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaConnectionDetail | undefined {
        return this['kafka_detail'];
    }
    public withCreatedTime(createdTime: string): UpdateConnectionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateConnectionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): UpdateConnectionResponse {
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
export enum UpdateConnectionResponseStatusEnum {
    CREATING = 'CREATING',
    CREATED = 'CREATED',
    CREATE_FAILED = 'CREATE_FAILED'
}
