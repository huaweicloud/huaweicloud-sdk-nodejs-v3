import { Fluency } from './Fluency';
import { Pronunciation } from './Pronunciation';
import { Word } from './Word';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunMultiModalAssessmentResponse extends SdkResponse {
    public score?: number;
    public completeness?: number;
    public duration?: number;
    public pronunciation?: Pronunciation;
    public fluency?: Fluency;
    public words?: Array<Word>;
    public traceId?: string;
    public constructor() { 
        super();
    }
    public withScore(score: number): RunMultiModalAssessmentResponse {
        this['score'] = score;
        return this;
    }
    public withCompleteness(completeness: number): RunMultiModalAssessmentResponse {
        this['completeness'] = completeness;
        return this;
    }
    public withDuration(duration: number): RunMultiModalAssessmentResponse {
        this['duration'] = duration;
        return this;
    }
    public withPronunciation(pronunciation: Pronunciation): RunMultiModalAssessmentResponse {
        this['pronunciation'] = pronunciation;
        return this;
    }
    public withFluency(fluency: Fluency): RunMultiModalAssessmentResponse {
        this['fluency'] = fluency;
        return this;
    }
    public withWords(words: Array<Word>): RunMultiModalAssessmentResponse {
        this['words'] = words;
        return this;
    }
    public withTraceId(traceId: string): RunMultiModalAssessmentResponse {
        this['traceId'] = traceId;
        return this;
    }
}