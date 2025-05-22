import { ProductResource } from './ProductResource';
import { Resource } from './Resource';


export class DelResourcesReq {
    public resources?: Array<Resource>;
    private 'product_resources'?: Array<ProductResource>;
    public constructor() { 
    }
    public withResources(resources: Array<Resource>): DelResourcesReq {
        this['resources'] = resources;
        return this;
    }
    public withProductResources(productResources: Array<ProductResource>): DelResourcesReq {
        this['product_resources'] = productResources;
        return this;
    }
    public set productResources(productResources: Array<ProductResource>  | undefined) {
        this['product_resources'] = productResources;
    }
    public get productResources(): Array<ProductResource> | undefined {
        return this['product_resources'];
    }
}