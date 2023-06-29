import { CreateResetTracksReq } from './CreateResetTracksReq';


export class CreateResetTracksTaskRequest {
    public body?: CreateResetTracksReq;
    public constructor() { 
    }
    public withBody(body: CreateResetTracksReq): CreateResetTracksTaskRequest {
        this['body'] = body;
        return this;
    }
}