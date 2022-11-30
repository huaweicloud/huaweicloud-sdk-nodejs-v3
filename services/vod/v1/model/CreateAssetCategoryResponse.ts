
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetCategoryResponse extends SdkResponse {
    public name?: string;
    private 'parent_id'?: number | undefined;
    public id?: number;
    public level?: number;
    public projectId?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateAssetCategoryResponse {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: number): CreateAssetCategoryResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: number | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withId(id: number): CreateAssetCategoryResponse {
        this['id'] = id;
        return this;
    }
    public withLevel(level: number): CreateAssetCategoryResponse {
        this['level'] = level;
        return this;
    }
    public withProjectId(projectId: string): CreateAssetCategoryResponse {
        this['projectId'] = projectId;
        return this;
    }
}