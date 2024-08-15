import { CreateWarRoomRequestBody } from './CreateWarRoomRequestBody';


export class CreateWarRoomRequest {
    public body?: CreateWarRoomRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWarRoomRequestBody): CreateWarRoomRequest {
        this['body'] = body;
        return this;
    }
}