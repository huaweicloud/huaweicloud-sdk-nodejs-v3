import { ProductInstance } from './ProductInstance';


export class ProductResource {
    private 'product_name'?: string;
    public namespace?: string;
    private 'product_instances'?: Array<ProductInstance>;
    public constructor(productName?: string, namespace?: string, productInstances?: Array<ProductInstance>) { 
        this['product_name'] = productName;
        this['namespace'] = namespace;
        this['product_instances'] = productInstances;
    }
    public withProductName(productName: string): ProductResource {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withNamespace(namespace: string): ProductResource {
        this['namespace'] = namespace;
        return this;
    }
    public withProductInstances(productInstances: Array<ProductInstance>): ProductResource {
        this['product_instances'] = productInstances;
        return this;
    }
    public set productInstances(productInstances: Array<ProductInstance>  | undefined) {
        this['product_instances'] = productInstances;
    }
    public get productInstances(): Array<ProductInstance> | undefined {
        return this['product_instances'];
    }
}