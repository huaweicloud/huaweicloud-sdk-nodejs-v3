

export class ShowKafkaInstanceExtendProductInfoRequest {
    private 'instance_id'?: string;
    public type?: ShowKafkaInstanceExtendProductInfoRequestTypeEnum | string;
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): ShowKafkaInstanceExtendProductInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: ShowKafkaInstanceExtendProductInfoRequestTypeEnum | string): ShowKafkaInstanceExtendProductInfoRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowKafkaInstanceExtendProductInfoRequestTypeEnum {
    ADVANCED = 'advanced'
}
