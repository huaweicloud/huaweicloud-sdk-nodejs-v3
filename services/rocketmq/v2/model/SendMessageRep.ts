import { SendMessageProperties } from './SendMessageProperties';


export class SendMessageRep {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<SendMessageProperties>;
    public constructor() { 
    }
    public withTopic(topic: string): SendMessageRep {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendMessageRep {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<SendMessageProperties>): SendMessageRep {
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