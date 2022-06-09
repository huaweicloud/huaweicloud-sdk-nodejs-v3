
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public id?: string;
    public status?: ListApiVersionsResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withId(id: string): ListApiVersionsResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListApiVersionsResponseStatusEnum): ListApiVersionsResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApiVersionsResponseStatusEnum {
    CURRENT = 'CURRENT',
    STABLE = 'STABLE',
    DEPRECATED = 'DEPRECATED'
}
