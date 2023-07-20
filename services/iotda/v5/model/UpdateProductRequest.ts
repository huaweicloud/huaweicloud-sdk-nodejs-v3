import { UpdateProduct } from './UpdateProduct';


export class UpdateProductRequest {
    private 'Instance-Id'?: string;
    private 'product_id'?: string;
    public body?: UpdateProduct;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withInstanceId(instanceId: string): UpdateProductRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProductId(productId: string): UpdateProductRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withBody(body: UpdateProduct): UpdateProductRequest {
        this['body'] = body;
        return this;
    }
}