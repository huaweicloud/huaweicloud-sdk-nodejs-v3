import { PostMultiModalAssessmentReq } from './PostMultiModalAssessmentReq';


export class RunMultiModalAssessmentRequest {
    public body?: PostMultiModalAssessmentReq;
    public constructor() { 
    }
    public withBody(body: PostMultiModalAssessmentReq): RunMultiModalAssessmentRequest {
        this['body'] = body;
        return this;
    }
}