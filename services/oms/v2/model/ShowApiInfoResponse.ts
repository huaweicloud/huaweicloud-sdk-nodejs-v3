import { Link } from './Link';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiInfoResponse extends SdkResponse {
    public id?: string;
    public links?: Array<Link>;
    public status?: ShowApiInfoResponseStatusEnum;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowApiInfoResponse {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): ShowApiInfoResponse {
        this['links'] = links;
        return this;
    }
    public withStatus(status: ShowApiInfoResponseStatusEnum): ShowApiInfoResponse {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ShowApiInfoResponse {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApiInfoResponseStatusEnum {
    CURRENT = 'CURRENT',
    DEPRECATED = 'DEPRECATED',
    SUPPORTED = 'SUPPORTED'
}
