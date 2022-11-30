
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAssetCategoryResponse extends SdkResponse {
    public name?: string;
    private 'parent_id'?: number | undefined;
    public id?: number;
    public level?: number;
    public projectId?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateAssetCategoryResponse {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: number): UpdateAssetCategoryResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withId(id: number): UpdateAssetCategoryResponse {
        this['id'] = id;
        return this;
    }
    public withLevel(level: number): UpdateAssetCategoryResponse {
        this['level'] = level;
        return this;
    }
    public withProjectId(projectId: string): UpdateAssetCategoryResponse {
        this['projectId'] = projectId;
        return this;
    }
}