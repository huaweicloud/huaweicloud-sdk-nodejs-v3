import { ModuleTemplateVo } from './ModuleTemplateVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorModuleTemplateResponse extends SdkResponse {
    public common?: Array<ModuleTemplateVo>;
    public list?: Array<ModuleTemplateVo>;
    public constructor() { 
        super();
    }
    public withCommon(common: Array<ModuleTemplateVo>): ListCollectorModuleTemplateResponse {
        this['common'] = common;
        return this;
    }
    public withList(list: Array<ModuleTemplateVo>): ListCollectorModuleTemplateResponse {
        this['list'] = list;
        return this;
    }
}