import { AddSnapshotCrossRegionPolicyRequestBody } from './AddSnapshotCrossRegionPolicyRequestBody';


export class AddSnapshotCrossRegionPolicyRequest {
    public body?: AddSnapshotCrossRegionPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: AddSnapshotCrossRegionPolicyRequestBody): AddSnapshotCrossRegionPolicyRequest {
        this['body'] = body;
        return this;
    }
}