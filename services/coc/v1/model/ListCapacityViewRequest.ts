import { CapacityWebListRequest } from './CapacityWebListRequest';


export class ListCapacityViewRequest {
    public body?: CapacityWebListRequest;
    public constructor() { 
    }
    public withBody(body: CapacityWebListRequest): ListCapacityViewRequest {
        this['body'] = body;
        return this;
    }
}