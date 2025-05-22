import { ProductResource } from './ProductResource';
import { Resource } from './Resource';


export class AddResourcesReq {
    public resources?: Array<Resource>;
    private 'product_resources'?: Array<ProductResource>;
    public constructor() { 
    }
    public withResources(resources: Array<Resource>): AddResourcesReq {
        this['resources'] = resources;
        return this;
    }
    public withProductResources(productResources: Array<ProductResource>): AddResourcesReq {
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