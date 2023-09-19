import { ListResourceByFilterTagRequestBody } from './ListResourceByFilterTagRequestBody';


export class ListResourceByFilterTagRequest {
    private 'resource_type'?: ListResourceByFilterTagRequestResourceTypeEnum | string;
    public body?: ListResourceByFilterTagRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourceByFilterTagRequestResourceTypeEnum | string): ListResourceByFilterTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourceByFilterTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourceByFilterTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListResourceByFilterTagRequestBody): ListResourceByFilterTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceByFilterTagRequestResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud-connection',
    BANDWIDTH_PACKAGE = 'bandwidth-package'
}
