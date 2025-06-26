import { UpdateWarehouseAppReq } from './UpdateWarehouseAppReq';


export class UpdateWarehouseAppRequest {
    public id?: string;
    public body?: UpdateWarehouseAppReq;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateWarehouseAppRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateWarehouseAppReq): UpdateWarehouseAppRequest {
        this['body'] = body;
        return this;
    }
}