import { RocketMqDetail } from './RocketMqDetail';


export class CustomizeSourceUpdateReq {
    public description?: string;
    public detail?: RocketMqDetail;
    public constructor() { 
    }
    public withDescription(description: string): CustomizeSourceUpdateReq {
        this['description'] = description;
        return this;
    }
    public withDetail(detail: RocketMqDetail): CustomizeSourceUpdateReq {
        this['detail'] = detail;
        return this;
    }
}