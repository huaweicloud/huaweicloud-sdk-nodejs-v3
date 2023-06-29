import { CreateMergeChannelsReq } from './CreateMergeChannelsReq';


export class CreateMergeChannelsTaskRequest {
    public body?: CreateMergeChannelsReq;
    public constructor() { 
    }
    public withBody(body: CreateMergeChannelsReq): CreateMergeChannelsTaskRequest {
        this['body'] = body;
        return this;
    }
}