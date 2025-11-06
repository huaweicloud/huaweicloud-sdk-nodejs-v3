import { ResizeFlavorRspVersionBody } from './ResizeFlavorRspVersionBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResizeFlavorsResponse extends SdkResponse {
    public id?: string;
    public dbname?: string;
    public versions?: Array<ResizeFlavorRspVersionBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowResizeFlavorsResponse {
        this['id'] = id;
        return this;
    }
    public withDbname(dbname: string): ShowResizeFlavorsResponse {
        this['dbname'] = dbname;
        return this;
    }
    public withVersions(versions: Array<ResizeFlavorRspVersionBody>): ShowResizeFlavorsResponse {
        this['versions'] = versions;
        return this;
    }
}