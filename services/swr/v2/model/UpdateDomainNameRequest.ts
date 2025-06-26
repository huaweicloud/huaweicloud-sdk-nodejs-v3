import { UpdateDomainNameRequestBody } from './UpdateDomainNameRequestBody';


export class UpdateDomainNameRequest {
    private 'instance_id'?: string;
    private 'domainname_id'?: string;
    public body?: UpdateDomainNameRequestBody;
    public constructor(instanceId?: string, domainnameId?: string) { 
        this['instance_id'] = instanceId;
        this['domainname_id'] = domainnameId;
    }
    public withInstanceId(instanceId: string): UpdateDomainNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDomainnameId(domainnameId: string): UpdateDomainNameRequest {
        this['domainname_id'] = domainnameId;
        return this;
    }
    public set domainnameId(domainnameId: string  | undefined) {
        this['domainname_id'] = domainnameId;
    }
    public get domainnameId(): string | undefined {
        return this['domainname_id'];
    }
    public withBody(body: UpdateDomainNameRequestBody): UpdateDomainNameRequest {
        this['body'] = body;
        return this;
    }
}