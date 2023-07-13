import { IndexPrimitiveTypeHolder } from './IndexPrimitiveTypeHolder';
import { ResourceNamePrimitiveTypeHolder } from './ResourceNamePrimitiveTypeHolder';
import { ResourcePriceResponse } from './ResourcePriceResponse';
import { ResourceTypePrimitiveTypeHolder } from './ResourceTypePrimitiveTypeHolder';


export class ItemsResponse {
    private 'resource_type'?: string | undefined;
    private 'resource_name'?: string | undefined;
    public index?: string;
    public supported?: boolean;
    private 'unsupported_message'?: string | undefined;
    private 'resource_price'?: Array<ResourcePriceResponse> | undefined;
    public constructor() { 
    }
    public withResourceType(resourceType: string): ItemsResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): ItemsResponse {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withIndex(index: string): ItemsResponse {
        this['index'] = index;
        return this;
    }
    public withSupported(supported: boolean): ItemsResponse {
        this['supported'] = supported;
        return this;
    }
    public withUnsupportedMessage(unsupportedMessage: string): ItemsResponse {
        this['unsupported_message'] = unsupportedMessage;
        return this;
    }
    public set unsupportedMessage(unsupportedMessage: string | undefined) {
        this['unsupported_message'] = unsupportedMessage;
    }
    public get unsupportedMessage() {
        return this['unsupported_message'];
    }
    public withResourcePrice(resourcePrice: Array<ResourcePriceResponse>): ItemsResponse {
        this['resource_price'] = resourcePrice;
        return this;
    }
    public set resourcePrice(resourcePrice: Array<ResourcePriceResponse> | undefined) {
        this['resource_price'] = resourcePrice;
    }
    public get resourcePrice() {
        return this['resource_price'];
    }
}