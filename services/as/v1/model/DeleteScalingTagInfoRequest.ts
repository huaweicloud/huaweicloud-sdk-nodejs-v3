import { DeleteTagsOption } from './DeleteTagsOption';


export class DeleteScalingTagInfoRequest {
    private 'resource_type'?: DeleteScalingTagInfoRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: DeleteTagsOption;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: DeleteScalingTagInfoRequestResourceTypeEnum | string): DeleteScalingTagInfoRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteScalingTagInfoRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteScalingTagInfoRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteScalingTagInfoRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: DeleteTagsOption): DeleteScalingTagInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteScalingTagInfoRequestResourceTypeEnum {
    SCALING_GROUP_TAG = 'scaling_group_tag'
}
