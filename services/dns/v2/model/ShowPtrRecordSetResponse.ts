import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPtrRecordSetResponse extends SdkResponse {
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
    public withId(id: string): ShowPtrRecordSetResponse {
        this['id'] = id;
        return this;
    }
    public withPtrdname(ptrdname: string): ShowPtrRecordSetResponse {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): ShowPtrRecordSetResponse {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): ShowPtrRecordSetResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withAddress(address: string): ShowPtrRecordSetResponse {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): ShowPtrRecordSetResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): ShowPtrRecordSetResponse {
        this['action'] = action;
        return this;
    }
    public withLinks(links: PageLink): ShowPtrRecordSetResponse {
        this['links'] = links;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowPtrRecordSetResponse {
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