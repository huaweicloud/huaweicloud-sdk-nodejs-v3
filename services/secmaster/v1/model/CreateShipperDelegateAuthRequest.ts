import { CreateShipperDelegateAuthRequestBody } from './CreateShipperDelegateAuthRequestBody';


export class CreateShipperDelegateAuthRequest {
    private 'workspace_id'?: string;
    private 'domain_id'?: string;
    public body?: CreateShipperDelegateAuthRequestBody;
    public constructor(workspaceId?: string, domainId?: string) { 
        this['workspace_id'] = workspaceId;
        this['domain_id'] = domainId;
    }
    public withWorkspaceId(workspaceId: string): CreateShipperDelegateAuthRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDomainId(domainId: string): CreateShipperDelegateAuthRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CreateShipperDelegateAuthRequestBody): CreateShipperDelegateAuthRequest {
        this['body'] = body;
        return this;
    }
}