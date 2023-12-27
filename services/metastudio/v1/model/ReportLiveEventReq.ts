import { LiveEvent } from './LiveEvent';
import { ReviewConfig } from './ReviewConfig';


export class ReportLiveEventReq {
    public total?: number;
    public events?: Array<LiveEvent>;
    private 'review_config'?: ReviewConfig;
    public constructor(total?: number) { 
        this['total'] = total;
    }
    public withTotal(total: number): ReportLiveEventReq {
        this['total'] = total;
        return this;
    }
    public withEvents(events: Array<LiveEvent>): ReportLiveEventReq {
        this['events'] = events;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): ReportLiveEventReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
}