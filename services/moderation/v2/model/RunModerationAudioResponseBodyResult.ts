import { RunModerationAudioResponseBodyResultDetail } from './RunModerationAudioResponseBodyResultDetail';


export class RunModerationAudioResponseBodyResult {
    public detail?: RunModerationAudioResponseBodyResultDetail;
    public suggestion?: string;
    public constructor() { 
    }
    public withDetail(detail: RunModerationAudioResponseBodyResultDetail): RunModerationAudioResponseBodyResult {
        this['detail'] = detail;
        return this;
    }
    public withSuggestion(suggestion: string): RunModerationAudioResponseBodyResult {
        this['suggestion'] = suggestion;
        return this;
    }
}