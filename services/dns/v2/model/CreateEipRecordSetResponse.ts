import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEipRecordSetResponse extends SdkResponse {
    public id?: string;
    public ptrdname?: string;
    public description?: string;
    public ttl?: number;
    public address?: string;
    public status?: string;
    public action?: string;
    public links?: PageLink;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEipRecordSetResponse {
        this['id'] = id;
        return this;
    }
    public withPtrdname(ptrdname: string): CreateEipRecordSetResponse {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): CreateEipRecordSetResponse {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): CreateEipRecordSetResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withAddress(address: string): CreateEipRecordSetResponse {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): CreateEipRecordSetResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): CreateEipRecordSetResponse {
        this['action'] = action;
        return this;
    }
    public withLinks(links: PageLink): CreateEipRecordSetResponse {
        this['links'] = links;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateEipRecordSetResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}