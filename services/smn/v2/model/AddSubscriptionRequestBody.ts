

export class AddSubscriptionRequestBody {
    public protocol: string;
    public endpoint: string;
    public remark?: string;
    public constructor(protocol?: any, endpoint?: any) { 
        this['protocol'] = protocol;
        this['endpoint'] = endpoint;
    }
    public withProtocol(protocol: string): AddSubscriptionRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): AddSubscriptionRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRemark(remark: string): AddSubscriptionRequestBody {
        this['remark'] = remark;
        return this;
    }
}