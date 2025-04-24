import { RocketMqDetail } from './RocketMqDetail';


export class CustomizeSourceCreateReq {
    public name?: string;
    public description?: string;
    private 'channel_id'?: string;
    public type?: CustomizeSourceCreateReqTypeEnum | string;
    public detail?: RocketMqDetail;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CustomizeSourceCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CustomizeSourceCreateReq {
        this['description'] = description;
        return this;
    }
    public withChannelId(channelId: string): CustomizeSourceCreateReq {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withType(type: CustomizeSourceCreateReqTypeEnum | string): CustomizeSourceCreateReq {
        this['type'] = type;
        return this;
    }
    public withDetail(detail: RocketMqDetail): CustomizeSourceCreateReq {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizeSourceCreateReqTypeEnum {
    APPLICATION = 'APPLICATION',
    RABBITMQ = 'RABBITMQ',
    ROCKETMQ = 'ROCKETMQ'
}
