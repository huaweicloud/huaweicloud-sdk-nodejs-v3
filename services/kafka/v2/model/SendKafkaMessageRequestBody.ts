import { SendKafkaMessageRequestBodyPropertyList } from './SendKafkaMessageRequestBodyPropertyList';


export class SendKafkaMessageRequestBody {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<SendKafkaMessageRequestBodyPropertyList>;
    public constructor(topic?: string, body?: string, propertyList?: Array<SendKafkaMessageRequestBodyPropertyList>) { 
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
    public withPropertyList(propertyList: Array<SendKafkaMessageRequestBodyPropertyList>): SendKafkaMessageRequestBody {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<SendKafkaMessageRequestBodyPropertyList>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<SendKafkaMessageRequestBodyPropertyList> | undefined {
        return this['property_list'];
    }
}