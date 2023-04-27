import { CreatefavoriteReqbody } from './CreatefavoriteReqbody';


export class CreatefavoriteRequest {
    public body?: CreatefavoriteReqbody;
    public constructor() { 
    }
    public withBody(body: CreatefavoriteReqbody): CreatefavoriteRequest {
        this['body'] = body;
        return this;
    }
}