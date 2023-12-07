

export class RocketMQConfigReq {
    public name?: RocketMQConfigReqNameEnum | string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: RocketMQConfigReqNameEnum | string): RocketMQConfigReq {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): RocketMQConfigReq {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RocketMQConfigReqNameEnum {
    FILERESERVEDTIME = 'fileReservedTime'
}
