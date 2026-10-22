import { CreateStandardSnapshotRequestBody } from './CreateStandardSnapshotRequestBody';


export class CreateStandardSnapshotRequest {
    public body?: CreateStandardSnapshotRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateStandardSnapshotRequestBody): CreateStandardSnapshotRequest {
        this['body'] = body;
        return this;
    }
}