import { PostShortAudioAssessmentReq } from './PostShortAudioAssessmentReq';


export class RunAudioAssessmentRequest {
    public body?: PostShortAudioAssessmentReq;
    public constructor() { 
    }
    public withBody(body: PostShortAudioAssessmentReq): RunAudioAssessmentRequest {
        this['body'] = body;
        return this;
    }
}