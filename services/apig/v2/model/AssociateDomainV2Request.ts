import { UrlDomainCreate } from './UrlDomainCreate';


export class AssociateDomainV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public body?: UrlDomainCreate;
    public constructor(instanceId?: string, groupId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): AssociateDomainV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): AssociateDomainV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UrlDomainCreate): AssociateDomainV2Request {
        this['body'] = body;
        return this;
    }
}