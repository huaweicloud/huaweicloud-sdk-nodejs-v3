import { FlavorRespVersionBody } from './FlavorRespVersionBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataStoreFlavorDetailResponse extends SdkResponse {
    public id?: string;
    public dbname?: string;
    public versions?: Array<FlavorRespVersionBody>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDataStoreFlavorDetailResponse {
        this['id'] = id;
        return this;
    }
    public withDbname(dbname: string): ShowDataStoreFlavorDetailResponse {
        this['dbname'] = dbname;
        return this;
    }
    public withVersions(versions: Array<FlavorRespVersionBody>): ShowDataStoreFlavorDetailResponse {
        this['versions'] = versions;
        return this;
    }
}