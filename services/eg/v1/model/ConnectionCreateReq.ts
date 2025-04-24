import { ConnectionType } from './ConnectionType';
import { KafkaConnectionDetail } from './KafkaConnectionDetail';


export class ConnectionCreateReq {
    public name?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public type?: ConnectionType;
    private 'kafka_detail'?: KafkaConnectionDetail;
    public constructor(name?: string, vpcId?: string, subnetId?: string) { 
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withName(name: string): ConnectionCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConnectionCreateReq {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): ConnectionCreateReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ConnectionCreateReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withType(type: ConnectionType): ConnectionCreateReq {
        this['type'] = type;
        return this;
    }
    public withKafkaDetail(kafkaDetail: KafkaConnectionDetail): ConnectionCreateReq {
        this['kafka_detail'] = kafkaDetail;
        return this;
    }
    public set kafkaDetail(kafkaDetail: KafkaConnectionDetail  | undefined) {
        this['kafka_detail'] = kafkaDetail;
    }
    public get kafkaDetail(): KafkaConnectionDetail | undefined {
        return this['kafka_detail'];
    }
}