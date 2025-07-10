
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGroupResponse extends SdkResponse {
    public description?: string;
    private 'full_name'?: object;
    public id?: number;
    public name?: string;
    public visibility?: CreateGroupResponseVisibilityEnum | string;
    public constructor() { 
        super();
    }
    public withDescription(description: string): CreateGroupResponse {
        this['description'] = description;
        return this;
    }
    public withFullName(fullName: object): CreateGroupResponse {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: object  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): object | undefined {
        return this['full_name'];
    }
    public withId(id: number): CreateGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateGroupResponse {
        this['name'] = name;
        return this;
    }
    public withVisibility(visibility: CreateGroupResponseVisibilityEnum | string): CreateGroupResponse {
        this['visibility'] = visibility;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGroupResponseVisibilityEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
