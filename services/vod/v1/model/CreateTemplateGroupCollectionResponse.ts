
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateGroupCollectionResponse extends SdkResponse {
    private 'group_collection_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGroupCollectionId(groupCollectionId: string): CreateTemplateGroupCollectionResponse {
        this['group_collection_id'] = groupCollectionId;
        return this;
    }
    public set groupCollectionId(groupCollectionId: string | undefined) {
        this['group_collection_id'] = groupCollectionId;
    }
    public get groupCollectionId() {
        return this['group_collection_id'];
    }
}