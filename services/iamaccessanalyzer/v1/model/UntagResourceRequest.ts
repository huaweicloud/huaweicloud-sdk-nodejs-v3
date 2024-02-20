import { UntagResourceReqBody } from './UntagResourceReqBody';


export class UntagResourceRequest {
    private 'resource_type'?: UntagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: UntagResourceReqBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: UntagResourceRequestResourceTypeEnum | string): UntagResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: UntagResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): UntagResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): UntagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: UntagResourceReqBody): UntagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UntagResourceRequestResourceTypeEnum {
    ANALYZERS = 'analyzers'
}
