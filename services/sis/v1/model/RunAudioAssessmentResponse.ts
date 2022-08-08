import { Fluency } from './Fluency';
import { Pronunciation } from './Pronunciation';
import { Word } from './Word';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunAudioAssessmentResponse extends SdkResponse {
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
    public withScore(score: number): RunAudioAssessmentResponse {
        this['score'] = score;
        return this;
    }
    public withCompleteness(completeness: number): RunAudioAssessmentResponse {
        this['completeness'] = completeness;
        return this;
    }
    public withDuration(duration: number): RunAudioAssessmentResponse {
        this['duration'] = duration;
        return this;
    }
    public withPronunciation(pronunciation: Pronunciation): RunAudioAssessmentResponse {
        this['pronunciation'] = pronunciation;
        return this;
    }
    public withFluency(fluency: Fluency): RunAudioAssessmentResponse {
        this['fluency'] = fluency;
        return this;
    }
    public withWords(words: Array<Word>): RunAudioAssessmentResponse {
        this['words'] = words;
        return this;
    }
    public withTraceId(traceId: string): RunAudioAssessmentResponse {
        this['traceId'] = traceId;
        return this;
    }
}