import { AttachOrDetachCertsReqBody } from './AttachOrDetachCertsReqBody';


export class BatchAssociateCertsV2Request {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'domain_id'?: string;
    public body?: AttachOrDetachCertsReqBody;
    public constructor(instanceId?: string, groupId?: string, domainId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
        this['domain_id'] = domainId;
    }
    public withInstanceId(instanceId: string): BatchAssociateCertsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): BatchAssociateCertsV2Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDomainId(domainId: string): BatchAssociateCertsV2Request {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: AttachOrDetachCertsReqBody): BatchAssociateCertsV2Request {
        this['body'] = body;
        return this;
    }
}