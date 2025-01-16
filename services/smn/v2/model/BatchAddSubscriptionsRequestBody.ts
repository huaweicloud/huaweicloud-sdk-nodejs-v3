import { SubscriptionExtension } from './SubscriptionExtension';


export class BatchAddSubscriptionsRequestBody {
    public protocol?: string;
    public endpoint?: string;
    public remark?: string;
    public extension?: SubscriptionExtension;
    public constructor(protocol?: string, endpoint?: string) { 
        this['protocol'] = protocol;
        this['endpoint'] = endpoint;
    }
    public withProtocol(protocol: string): BatchAddSubscriptionsRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withEndpoint(endpoint: string): BatchAddSubscriptionsRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRemark(remark: string): BatchAddSubscriptionsRequestBody {
        this['remark'] = remark;
        return this;
    }
    public withExtension(extension: SubscriptionExtension): BatchAddSubscriptionsRequestBody {
        this['extension'] = extension;
        return this;
    }
}