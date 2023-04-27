import { Link } from './Link';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public id?: string;
    public links?: Array<Link>;
    public status?: string;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowApiVersionResponse {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): ShowApiVersionResponse {
        this['links'] = links;
        return this;
    }
    public withStatus(status: string): ShowApiVersionResponse {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ShowApiVersionResponse {
        this['updated'] = updated;
        return this;
    }
}