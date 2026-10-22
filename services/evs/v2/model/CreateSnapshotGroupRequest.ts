import { CreateSnapshotGroupRequestBody } from './CreateSnapshotGroupRequestBody';


export class CreateSnapshotGroupRequest {
    public body?: CreateSnapshotGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSnapshotGroupRequestBody): CreateSnapshotGroupRequest {
        this['body'] = body;
        return this;
    }
}