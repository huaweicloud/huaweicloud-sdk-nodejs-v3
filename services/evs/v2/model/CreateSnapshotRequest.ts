import { CreateSnapshotRequestBody } from './CreateSnapshotRequestBody';


export class CreateSnapshotRequest {
    public body?: CreateSnapshotRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSnapshotRequestBody): CreateSnapshotRequest {
        this['body'] = body;
        return this;
    }
}