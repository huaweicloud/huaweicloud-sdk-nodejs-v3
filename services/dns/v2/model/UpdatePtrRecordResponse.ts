import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePtrRecordResponse extends SdkResponse {
    public id?: string;
    public ptrdname?: string;
    public description?: string;
    public ttl?: number;
    public address?: string;
    public status?: string;
    public action?: string;
    public links?: PageLink;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePtrRecordResponse {
        this['id'] = id;
        return this;
    }
    public withPtrdname(ptrdname: string): UpdatePtrRecordResponse {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): UpdatePtrRecordResponse {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): UpdatePtrRecordResponse {
        this['ttl'] = ttl;
        return this;
    }
    public withAddress(address: string): UpdatePtrRecordResponse {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): UpdatePtrRecordResponse {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): UpdatePtrRecordResponse {
        this['action'] = action;
        return this;
    }
    public withLinks(links: PageLink): UpdatePtrRecordResponse {
        this['links'] = links;
        return this;
    }
}