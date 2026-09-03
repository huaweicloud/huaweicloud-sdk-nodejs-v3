import { CreateSubscriptionUserRequestCallnotifyEndpointInfo } from './CreateSubscriptionUserRequestCallnotifyEndpointInfo';
import { CreateSubscriptionUserRequestDingTalkBotEndpointInfo } from './CreateSubscriptionUserRequestDingTalkBotEndpointInfo';
import { CreateSubscriptionUserRequestDingdingEndpointInfo } from './CreateSubscriptionUserRequestDingdingEndpointInfo';
import { CreateSubscriptionUserRequestEmailEndpointInfo } from './CreateSubscriptionUserRequestEmailEndpointInfo';
import { CreateSubscriptionUserRequestFeishuEndpointInfo } from './CreateSubscriptionUserRequestFeishuEndpointInfo';
import { CreateSubscriptionUserRequestHttpEndpointInfo } from './CreateSubscriptionUserRequestHttpEndpointInfo';
import { CreateSubscriptionUserRequestHttpsEndpointInfo } from './CreateSubscriptionUserRequestHttpsEndpointInfo';
import { CreateSubscriptionUserRequestSmsEndpointInfo } from './CreateSubscriptionUserRequestSmsEndpointInfo';
import { CreateSubscriptionUserRequestWechatEndpointInfo } from './CreateSubscriptionUserRequestWechatEndpointInfo';
import { CreateSubscriptionUserRequestWelinkEndpointInfo } from './CreateSubscriptionUserRequestWelinkEndpointInfo';


export class CreateSubscriptionUserRequestBody {
    public name?: string;
    public group?: Array<string>;
    public http?: CreateSubscriptionUserRequestHttpEndpointInfo;
    public https?: CreateSubscriptionUserRequestHttpsEndpointInfo;
    public sms?: CreateSubscriptionUserRequestSmsEndpointInfo;
    public email?: CreateSubscriptionUserRequestEmailEndpointInfo;
    public callnotify?: CreateSubscriptionUserRequestCallnotifyEndpointInfo;
    public wechat?: CreateSubscriptionUserRequestWechatEndpointInfo;
    public dingding?: CreateSubscriptionUserRequestDingdingEndpointInfo;
    public feishu?: CreateSubscriptionUserRequestFeishuEndpointInfo;
    public welink?: CreateSubscriptionUserRequestWelinkEndpointInfo;
    private 'ding_talk_bot'?: CreateSubscriptionUserRequestDingTalkBotEndpointInfo;
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
    public withCallnotify(callnotify: CreateSubscriptionUserRequestCallnotifyEndpointInfo): CreateSubscriptionUserRequestBody {
        this['callnotify'] = callnotify;
        return this;
    }
    public withWechat(wechat: CreateSubscriptionUserRequestWechatEndpointInfo): CreateSubscriptionUserRequestBody {
        this['wechat'] = wechat;
        return this;
    }
    public withDingding(dingding: CreateSubscriptionUserRequestDingdingEndpointInfo): CreateSubscriptionUserRequestBody {
        this['dingding'] = dingding;
        return this;
    }
    public withFeishu(feishu: CreateSubscriptionUserRequestFeishuEndpointInfo): CreateSubscriptionUserRequestBody {
        this['feishu'] = feishu;
        return this;
    }
    public withWelink(welink: CreateSubscriptionUserRequestWelinkEndpointInfo): CreateSubscriptionUserRequestBody {
        this['welink'] = welink;
        return this;
    }
    public withDingTalkBot(dingTalkBot: CreateSubscriptionUserRequestDingTalkBotEndpointInfo): CreateSubscriptionUserRequestBody {
        this['ding_talk_bot'] = dingTalkBot;
        return this;
    }
    public set dingTalkBot(dingTalkBot: CreateSubscriptionUserRequestDingTalkBotEndpointInfo  | undefined) {
        this['ding_talk_bot'] = dingTalkBot;
    }
    public get dingTalkBot(): CreateSubscriptionUserRequestDingTalkBotEndpointInfo | undefined {
        return this['ding_talk_bot'];
    }
}