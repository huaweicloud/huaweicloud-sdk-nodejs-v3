import { PageLink } from './PageLink';
import { PublicIpRes } from './PublicIpRes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePtrResponse extends SdkResponse {
    public publicip?: PublicIpRes;
    public ptrdnames?: Array<string>;
    public id?: string;
    public description?: string;
    public ttl?: number;
    public status?: string;
    public links?: PageLink;
    private 'enterprise_project_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicip(publicip: PublicIpRes): UpdatePtrResponse {
        this['publicip'] = publicip;
        return this;
    }
    public withPtrdnames(ptrdnames: Array<string>): UpdatePtrResponse {
        this['ptrdnames'] = ptrdnames;
        return this;
    }
    public withId(id: string): UpdatePtrResponse {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): UpdatePtrResponse {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): UpdatePtrResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withStatus(status: string): UpdatePtrResponse {
        this['status'] = status;
        return this;
    }
    public withLinks(links: PageLink): UpdatePtrResponse {
        this['links'] = links;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePtrResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}