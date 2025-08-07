import { AssociatedResourceListResponse } from './AssociatedResourceListResponse';
import { ResourceErrorListResponse } from './ResourceErrorListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssociatedResourcesResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: ShowAssociatedResourcesResponseTypeEnum | string;
    private 'associated_resources'?: Array<AssociatedResourceListResponse>;
    public errors?: Array<ResourceErrorListResponse>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAssociatedResourcesResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAssociatedResourcesResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowAssociatedResourcesResponseTypeEnum | string): ShowAssociatedResourcesResponse {
        this['type'] = type;
        return this;
    }
    public withAssociatedResources(associatedResources: Array<AssociatedResourceListResponse>): ShowAssociatedResourcesResponse {
        this['associated_resources'] = associatedResources;
        return this;
    }
    public set associatedResources(associatedResources: Array<AssociatedResourceListResponse>  | undefined) {
        this['associated_resources'] = associatedResources;
    }
    public get associatedResources(): Array<AssociatedResourceListResponse> | undefined {
        return this['associated_resources'];
    }
    public withErrors(errors: Array<ResourceErrorListResponse>): ShowAssociatedResourcesResponse {
        this['errors'] = errors;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssociatedResourcesResponseTypeEnum {
    ECS = 'ecs',
    EIP = 'eip'
}
