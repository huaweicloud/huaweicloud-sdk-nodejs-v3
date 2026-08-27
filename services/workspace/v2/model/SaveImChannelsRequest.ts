import { SaveImChannelsReq } from './SaveImChannelsReq';


export class SaveImChannelsRequest {
    public body?: SaveImChannelsReq;
    public constructor() { 
    }
    public withBody(body: SaveImChannelsReq): SaveImChannelsRequest {
        this['body'] = body;
        return this;
    }
}