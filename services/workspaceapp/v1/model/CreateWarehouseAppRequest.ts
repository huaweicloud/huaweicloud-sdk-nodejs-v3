import { CreateWarehouseAppReq } from './CreateWarehouseAppReq';


export class CreateWarehouseAppRequest {
    public body?: CreateWarehouseAppReq;
    public constructor() { 
    }
    public withBody(body: CreateWarehouseAppReq): CreateWarehouseAppRequest {
        this['body'] = body;
        return this;
    }
}