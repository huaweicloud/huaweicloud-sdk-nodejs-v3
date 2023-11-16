import { FullStagePluginsRelationVOFullStagePluginsItemList } from './FullStagePluginsRelationVOFullStagePluginsItemList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStagePluginsResponse extends SdkResponse {
    private 'full_stage_plugins_item_list'?: Array<FullStagePluginsRelationVOFullStagePluginsItemList>;
    public constructor() { 
        super();
    }
    public withFullStagePluginsItemList(fullStagePluginsItemList: Array<FullStagePluginsRelationVOFullStagePluginsItemList>): ListStagePluginsResponse {
        this['full_stage_plugins_item_list'] = fullStagePluginsItemList;
        return this;
    }
    public set fullStagePluginsItemList(fullStagePluginsItemList: Array<FullStagePluginsRelationVOFullStagePluginsItemList>  | undefined) {
        this['full_stage_plugins_item_list'] = fullStagePluginsItemList;
    }
    public get fullStagePluginsItemList(): Array<FullStagePluginsRelationVOFullStagePluginsItemList> | undefined {
        return this['full_stage_plugins_item_list'];
    }
}