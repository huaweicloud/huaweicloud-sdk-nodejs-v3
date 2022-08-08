import { PostCustomTTSReq } from './PostCustomTTSReq';


export class RunTtsRequest {
    public body?: PostCustomTTSReq;
    public constructor() { 
    }
    public withBody(body: PostCustomTTSReq): RunTtsRequest {
        this['body'] = body;
        return this;
    }
}