
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessDomainResponse extends SdkResponse {
    public exist?: boolean;
    public namespace?: string;
    public repository?: string;
    private 'access_domain'?: string;
    public permit?: string;
    public deadline?: string;
    public description?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    public created?: string;
    public updated?: string;
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withExist(exist: boolean): ShowAccessDomainResponse {
        this['exist'] = exist;
        return this;
    }
    public withNamespace(namespace: string): ShowAccessDomainResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): ShowAccessDomainResponse {
        this['repository'] = repository;
        return this;
    }
    public withAccessDomain(accessDomain: string): ShowAccessDomainResponse {
        this['access_domain'] = accessDomain;
        return this;
    }
    public set accessDomain(accessDomain: string  | undefined) {
        this['access_domain'] = accessDomain;
    }
    public get accessDomain(): string | undefined {
        return this['access_domain'];
    }
    public withPermit(permit: string): ShowAccessDomainResponse {
        this['permit'] = permit;
        return this;
    }
    public withDeadline(deadline: string): ShowAccessDomainResponse {
        this['deadline'] = deadline;
        return this;
    }
    public withDescription(description: string): ShowAccessDomainResponse {
        this['description'] = description;
        return this;
    }
    public withCreatorId(creatorId: string): ShowAccessDomainResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowAccessDomainResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreated(created: string): ShowAccessDomainResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowAccessDomainResponse {
        this['updated'] = updated;
        return this;
    }
    public withStatus(status: boolean): ShowAccessDomainResponse {
        this['status'] = status;
        return this;
    }
}