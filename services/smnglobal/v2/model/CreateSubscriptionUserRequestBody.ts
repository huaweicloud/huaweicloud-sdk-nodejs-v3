import { CreateSubscriptionUserRequestEmailEndpointInfo } from './CreateSubscriptionUserRequestEmailEndpointInfo';
import { CreateSubscriptionUserRequestHttpEndpointInfo } from './CreateSubscriptionUserRequestHttpEndpointInfo';
import { CreateSubscriptionUserRequestHttpsEndpointInfo } from './CreateSubscriptionUserRequestHttpsEndpointInfo';
import { CreateSubscriptionUserRequestSmsEndpointInfo } from './CreateSubscriptionUserRequestSmsEndpointInfo';


export class CreateSubscriptionUserRequestBody {
    public name?: string;
    public group?: Array<string>;
    public http?: CreateSubscriptionUserRequestHttpEndpointInfo;
    public https?: CreateSubscriptionUserRequestHttpsEndpointInfo;
    public sms?: CreateSubscriptionUserRequestSmsEndpointInfo;
    public email?: CreateSubscriptionUserRequestEmailEndpointInfo;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSubscriptionUserRequestBody {
        this['name'] = name;
        return this;
    }
    public withGroup(group: Array<string>): CreateSubscriptionUserRequestBody {
        this['group'] = group;
        return this;
    }
    public withHttp(http: CreateSubscriptionUserRequestHttpEndpointInfo): CreateSubscriptionUserRequestBody {
        this['http'] = http;
        return this;
    }
    public withHttps(https: CreateSubscriptionUserRequestHttpsEndpointInfo): CreateSubscriptionUserRequestBody {
        this['https'] = https;
        return this;
    }
    public withSms(sms: CreateSubscriptionUserRequestSmsEndpointInfo): CreateSubscriptionUserRequestBody {
        this['sms'] = sms;
        return this;
    }
    public withEmail(email: CreateSubscriptionUserRequestEmailEndpointInfo): CreateSubscriptionUserRequestBody {
        this['email'] = email;
        return this;
    }
}