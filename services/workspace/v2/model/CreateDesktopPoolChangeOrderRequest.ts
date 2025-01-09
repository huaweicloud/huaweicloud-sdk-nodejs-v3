import { CreateBatchChangeOrderRequestBody } from './CreateBatchChangeOrderRequestBody';


export class CreateDesktopPoolChangeOrderRequest {
    public body?: CreateBatchChangeOrderRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateBatchChangeOrderRequestBody): CreateDesktopPoolChangeOrderRequest {
        this['body'] = body;
        return this;
    }
}