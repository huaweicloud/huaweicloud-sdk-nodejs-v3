import { CreateSnapshotPolicyRequestBody } from './CreateSnapshotPolicyRequestBody';


export class CreateAutoSnapshotPolicyRequest {
    public body?: CreateSnapshotPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSnapshotPolicyRequestBody): CreateAutoSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}