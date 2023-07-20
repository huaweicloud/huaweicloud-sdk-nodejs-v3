import { MysqlFlavorsInfo } from './MysqlFlavorsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlFlavorsResponse extends SdkResponse {
    public flavors?: Array<MysqlFlavorsInfo>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<MysqlFlavorsInfo>): ShowGaussMySqlFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}