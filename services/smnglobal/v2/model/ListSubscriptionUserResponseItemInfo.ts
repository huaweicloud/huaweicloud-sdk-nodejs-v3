import { ListSubscriptionUserResponseEmailEndpointInfo } from './ListSubscriptionUserResponseEmailEndpointInfo';
import { ListSubscriptionUserResponseHttpEndpointInfo } from './ListSubscriptionUserResponseHttpEndpointInfo';
import { ListSubscriptionUserResponseHttpsEndpointInfo } from './ListSubscriptionUserResponseHttpsEndpointInfo';
import { ListSubscriptionUserResponseSmsEndpointInfo } from './ListSubscriptionUserResponseSmsEndpointInfo';


export class ListSubscriptionUserResponseItemInfo {
    public id?: string;
    private 'domain_id'?: string;
    public name?: string;
    public status?: string;
    public group?: Array<string>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public http?: ListSubscriptionUserResponseHttpEndpointInfo;
    public https?: ListSubscriptionUserResponseHttpsEndpointInfo;
    public sms?: ListSubscriptionUserResponseSmsEndpointInfo;
    public email?: ListSubscriptionUserResponseEmailEndpointInfo;
    public constructor(id?: string, domainId?: string, name?: string, status?: string, group?: Array<string>, createTime?: string, updateTime?: string) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['name'] = name;
        this['status'] = status;
        this['group'] = group;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withId(id: string): ListSubscriptionUserResponseItemInfo {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): ListSubscriptionUserResponseItemInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): ListSubscriptionUserResponseItemInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListSubscriptionUserResponseItemInfo {
        this['status'] = status;
        return this;
    }
    public withGroup(group: Array<string>): ListSubscriptionUserResponseItemInfo {
        this['group'] = group;
        return this;
    }
    public withCreateTime(createTime: string): ListSubscriptionUserResponseItemInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListSubscriptionUserResponseItemInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withHttp(http: ListSubscriptionUserResponseHttpEndpointInfo): ListSubscriptionUserResponseItemInfo {
        this['http'] = http;
        return this;
    }
    public withHttps(https: ListSubscriptionUserResponseHttpsEndpointInfo): ListSubscriptionUserResponseItemInfo {
        this['https'] = https;
        return this;
    }
    public withSms(sms: ListSubscriptionUserResponseSmsEndpointInfo): ListSubscriptionUserResponseItemInfo {
        this['sms'] = sms;
        return this;
    }
    public withEmail(email: ListSubscriptionUserResponseEmailEndpointInfo): ListSubscriptionUserResponseItemInfo {
        this['email'] = email;
        return this;
    }
}