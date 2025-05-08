import { PlainSslEnableRequest } from './PlainSslEnableRequest';


export class UpdateKafkaPortProtocolRequest {
    public engine?: UpdateKafkaPortProtocolRequestEngineEnum | string;
    private 'instance_id'?: string;
    public body?: PlainSslEnableRequest;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: UpdateKafkaPortProtocolRequestEngineEnum | string): UpdateKafkaPortProtocolRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateKafkaPortProtocolRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: PlainSslEnableRequest): UpdateKafkaPortProtocolRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateKafkaPortProtocolRequestEngineEnum {
    KAFKA = 'kafka'
}
