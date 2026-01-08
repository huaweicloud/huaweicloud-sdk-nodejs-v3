import { CreateResourcePackageOrderReq } from './CreateResourcePackageOrderReq';


export class CreateResourcePackagesOrderRequest {
    public body?: CreateResourcePackageOrderReq;
    public constructor() { 
    }
    public withBody(body: CreateResourcePackageOrderReq): CreateResourcePackagesOrderRequest {
        this['body'] = body;
        return this;
    }
}