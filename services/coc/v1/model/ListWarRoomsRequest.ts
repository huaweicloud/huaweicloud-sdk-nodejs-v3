import { ListTenantWarRoomRequestBody } from './ListTenantWarRoomRequestBody';


export class ListWarRoomsRequest {
    public body?: ListTenantWarRoomRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTenantWarRoomRequestBody): ListWarRoomsRequest {
        this['body'] = body;
        return this;
    }
}