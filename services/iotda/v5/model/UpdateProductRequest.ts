import { UpdateProduct } from './UpdateProduct';


export class UpdateProductRequest {
    private 'Instance-Id'?: string | undefined;
    private 'product_id': string | undefined;
    public body?: UpdateProduct;
    public constructor(productId: any) { 
        this['product_id'] = productId;
    }
    public withInstanceId(instanceId: string): UpdateProductRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withProductId(productId: string): UpdateProductRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withBody(body: UpdateProduct): UpdateProductRequest {
        this['body'] = body;
        return this;
    }
}