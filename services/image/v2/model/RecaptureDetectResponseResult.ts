import { RecaptureDetectResponseResultDetail } from './RecaptureDetectResponseResultDetail';


export class RecaptureDetectResponseResult {
    public suggestion?: string;
    public category?: string;
    public score?: string;
    public detail?: Array<RecaptureDetectResponseResultDetail>;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): RecaptureDetectResponseResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategory(category: string): RecaptureDetectResponseResult {
        this['category'] = category;
        return this;
    }
    public withScore(score: string): RecaptureDetectResponseResult {
        this['score'] = score;
        return this;
    }
    public withDetail(detail: Array<RecaptureDetectResponseResultDetail>): RecaptureDetectResponseResult {
        this['detail'] = detail;
        return this;
    }
}