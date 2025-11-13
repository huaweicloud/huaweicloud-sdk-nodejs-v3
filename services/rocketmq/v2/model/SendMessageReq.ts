import { SendMessageProperties } from './SendMessageProperties';


export class SendMessageReq {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<SendMessageProperties>;
    public constructor() { 
    }
    public withTopic(topic: string): SendMessageReq {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendMessageReq {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<SendMessageProperties>): SendMessageReq {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<SendMessageProperties>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<SendMessageProperties> | undefined {
        return this['property_list'];
    }
}