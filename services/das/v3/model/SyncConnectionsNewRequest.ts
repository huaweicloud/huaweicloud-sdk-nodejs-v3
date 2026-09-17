import { SyncConnectionsNewRequestBody } from './SyncConnectionsNewRequestBody';


export class SyncConnectionsNewRequest {
    public body?: SyncConnectionsNewRequestBody;
    public constructor() { 
    }
    public withBody(body: SyncConnectionsNewRequestBody): SyncConnectionsNewRequest {
        this['body'] = body;
        return this;
    }
}