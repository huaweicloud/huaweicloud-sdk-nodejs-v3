import { ServiceIdName } from './ServiceIdName';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInferApiKeyResponse extends SdkResponse {
    private 'key_id'?: string;
    public name?: string;
    public description?: string;
    private 'create_time'?: string;
    public scope?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public services?: Array<ServiceIdName>;
    private 'workspace_id'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): DeleteInferApiKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withName(name: string): DeleteInferApiKeyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DeleteInferApiKeyResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): DeleteInferApiKeyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withScope(scope: string): DeleteInferApiKeyResponse {
        this['scope'] = scope;
        return this;
    }
    public withDomainId(domainId: string): DeleteInferApiKeyResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): DeleteInferApiKeyResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServices(services: Array<ServiceIdName>): DeleteInferApiKeyResponse {
        this['services'] = services;
        return this;
    }
    public withWorkspaceId(workspaceId: string): DeleteInferApiKeyResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}