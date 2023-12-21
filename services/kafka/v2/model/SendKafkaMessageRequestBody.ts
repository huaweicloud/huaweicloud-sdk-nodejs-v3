

export class SendKafkaMessageRequestBody {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<object>;
    public constructor(topic?: string, body?: string, propertyList?: Array<object>) { 
        this['topic'] = topic;
        this['body'] = body;
        this['property_list'] = propertyList;
    }
    public withTopic(topic: string): SendKafkaMessageRequestBody {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendKafkaMessageRequestBody {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<object>): SendKafkaMessageRequestBody {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<object>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<object> | undefined {
        return this['property_list'];
    }
}