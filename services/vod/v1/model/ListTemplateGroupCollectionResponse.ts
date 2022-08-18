import { TemplateGroupCollection } from './TemplateGroupCollection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateGroupCollectionResponse extends SdkResponse {
    private 'template_group_collection_list'?: Array<TemplateGroupCollection> | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTemplateGroupCollectionList(templateGroupCollectionList: Array<TemplateGroupCollection>): ListTemplateGroupCollectionResponse {
        this['template_group_collection_list'] = templateGroupCollectionList;
        return this;
    }
    public set templateGroupCollectionList(templateGroupCollectionList: Array<TemplateGroupCollection> | undefined) {
        this['template_group_collection_list'] = templateGroupCollectionList;
    }
    public get templateGroupCollectionList() {
        return this['template_group_collection_list'];
    }
    public withTotal(total: number): ListTemplateGroupCollectionResponse {
        this['total'] = total;
        return this;
    }
}