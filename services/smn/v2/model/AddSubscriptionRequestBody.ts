import { BatchAddSubscriptionsRequestBody } from './BatchAddSubscriptionsRequestBody';
import { SubscriptionExtension } from './SubscriptionExtension';


export class AddSubscriptionRequestBody {
    public protocol?: string;
    public endpoint?: string;
    public remark?: string;
    public extension?: SubscriptionExtension;
    public subscriptions?: Array<BatchAddSubscriptionsRequestBody>;
    public constructor(protocol?: string, endpoint?: string) { 
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
    public withExtension(extension: SubscriptionExtension): AddSubscriptionRequestBody {
        this['extension'] = extension;
        return this;
    }
    public withSubscriptions(subscriptions: Array<BatchAddSubscriptionsRequestBody>): AddSubscriptionRequestBody {
        this['subscriptions'] = subscriptions;
        return this;
    }
}