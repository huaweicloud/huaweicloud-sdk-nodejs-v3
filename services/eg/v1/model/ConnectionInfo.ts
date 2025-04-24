import { ConnectionInfoFlavor } from './ConnectionInfoFlavor';
import { ConnectionType } from './ConnectionType';
import { ErrorInfo } from './ErrorInfo';
import { KafkaConnectionDetail } from './KafkaConnectionDetail';


export class ConnectionInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: ConnectionInfoStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public agency?: string;
    public flavor?: ConnectionInfoFlavor;
    public type?: ConnectionType;
    private 'kafka_detail'?: KafkaConnectionDetail;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ConnectionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ConnectionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConnectionInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ConnectionInfoStatusEnum | string): ConnectionInfo {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): ConnectionInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withVpcId(vpcId: string): ConnectionInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ConnectionInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAgency(agency: string): ConnectionInfo {
        this['agency'] = agency;
        return this;
    }
    public withFlavor(flavor: ConnectionInfoFlavor): ConnectionInfo {
        this['flavor'] = flavor;
        return this;
    }
    public withType(type: ConnectionType): ConnectionInfo {
        this['type'] = type;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaConnectionDetail): ConnectionInfo {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaConnectionDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaConnectionDetail | undefined {
        return this['kafka_detail'];
    }
    public withCreatedTime(createdTime: string): ConnectionInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ConnectionInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionInfoStatusEnum {
    CREATING = 'CREATING',
    CREATED = 'CREATED',
    CREATE_FAILED = 'CREATE_FAILED'
}
