import { CatalogLevelVO } from './CatalogLevelVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubjectLevelsResponse extends SdkResponse {
    public levels?: Array<CatalogLevelVO>;
    public constructor() { 
        super();
    }
    public withLevels(levels: Array<CatalogLevelVO>): ListSubjectLevelsResponse {
        this['levels'] = levels;
        return this;
    }
}