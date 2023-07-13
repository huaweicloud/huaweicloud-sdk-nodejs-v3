import { ValuesItem } from './ValuesItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public versions?: ValuesItem;
    public constructor() { 
        super();
    }
    public withVersions(versions: ValuesItem): ListApiVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}