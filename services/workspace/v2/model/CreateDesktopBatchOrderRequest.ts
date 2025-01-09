import { CreateBatchChangeOrderRequestBody } from './CreateBatchChangeOrderRequestBody';


export class CreateDesktopBatchOrderRequest {
    public body?: CreateBatchChangeOrderRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateBatchChangeOrderRequestBody): CreateDesktopBatchOrderRequest {
        this['body'] = body;
        return this;
    }
}