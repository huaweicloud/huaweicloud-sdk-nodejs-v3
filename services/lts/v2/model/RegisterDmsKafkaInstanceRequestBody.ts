import { RegisterDmsKafkaInstanceRequestBodyConnectInfo } from './RegisterDmsKafkaInstanceRequestBodyConnectInfo';


export class RegisterDmsKafkaInstanceRequestBody {
    private 'instance_id'?: string;
    private 'kafka_name'?: string;
    private 'connect_info'?: RegisterDmsKafkaInstanceRequestBodyConnectInfo;
    public constructor(instanceId?: string, kafkaName?: string, connectInfo?: RegisterDmsKafkaInstanceRequestBodyConnectInfo) { 
        this['instance_id'] = instanceId;
        this['kafka_name'] = kafkaName;
        this['connect_info'] = connectInfo;
    }
    public withInstanceId(instanceId: string): RegisterDmsKafkaInstanceRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withKafkaName(kafkaName: string): RegisterDmsKafkaInstanceRequestBody {
        this['kafka_name'] = kafkaName;
        return this;
    }
    public set kafkaName(kafkaName: string  | undefined) {
        this['kafka_name'] = kafkaName;
    }
    public get kafkaName(): string | undefined {
        return this['kafka_name'];
    }
    public withConnectInfo(connectInfo: RegisterDmsKafkaInstanceRequestBodyConnectInfo): RegisterDmsKafkaInstanceRequestBody {
        this['connect_info'] = connectInfo;
        return this;
    }
    public set connectInfo(connectInfo: RegisterDmsKafkaInstanceRequestBodyConnectInfo  | undefined) {
        this['connect_info'] = connectInfo;
    }
    public get connectInfo(): RegisterDmsKafkaInstanceRequestBodyConnectInfo | undefined {
        return this['connect_info'];
    }
}