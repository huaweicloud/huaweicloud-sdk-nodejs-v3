import { CreateProcessInstanceReq } from './CreateProcessInstanceReq';


export class CreateIpdProcessInstanceRequest {
    private 'project_id'?: string;
    private 'operate_type'?: string;
    private 'domain_id'?: string;
    public body?: CreateProcessInstanceReq;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateIpdProcessInstanceRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOperateType(operateType: string): CreateIpdProcessInstanceRequest {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withDomainId(domainId: string): CreateIpdProcessInstanceRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CreateProcessInstanceReq): CreateIpdProcessInstanceRequest {
        this['body'] = body;
        return this;
    }
}