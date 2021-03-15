import { AddProduct } from './AddProduct';


export class CreateProductRequest {
    private 'Instance-Id'?: string | undefined;
    public body?: AddProduct;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateProductRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withBody(body: AddProduct): CreateProductRequest {
        this['body'] = body;
        return this;
    }
}