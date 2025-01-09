import { OfficialWebsiteRatingResult } from './OfficialWebsiteRatingResult';
import { OptionalDiscountRatingResult } from './OptionalDiscountRatingResult';


export class CloudServiceRatingResult {
    private 'order_request_id'?: string;
    private 'official_website_rating_result'?: OfficialWebsiteRatingResult;
    private 'optional_discount_rating_results'?: Array<OptionalDiscountRatingResult>;
    public constructor() { 
    }
    public withOrderRequestId(orderRequestId: string): CloudServiceRatingResult {
        this['order_request_id'] = orderRequestId;
        return this;
    }
    public set orderRequestId(orderRequestId: string  | undefined) {
        this['order_request_id'] = orderRequestId;
    }
    public get orderRequestId(): string | undefined {
        return this['order_request_id'];
    }
    public withOfficialWebsiteRatingResult(officialWebsiteRatingResult: OfficialWebsiteRatingResult): CloudServiceRatingResult {
        this['official_website_rating_result'] = officialWebsiteRatingResult;
        return this;
    }
    public set officialWebsiteRatingResult(officialWebsiteRatingResult: OfficialWebsiteRatingResult  | undefined) {
        this['official_website_rating_result'] = officialWebsiteRatingResult;
    }
    public get officialWebsiteRatingResult(): OfficialWebsiteRatingResult | undefined {
        return this['official_website_rating_result'];
    }
    public withOptionalDiscountRatingResults(optionalDiscountRatingResults: Array<OptionalDiscountRatingResult>): CloudServiceRatingResult {
        this['optional_discount_rating_results'] = optionalDiscountRatingResults;
        return this;
    }
    public set optionalDiscountRatingResults(optionalDiscountRatingResults: Array<OptionalDiscountRatingResult>  | undefined) {
        this['optional_discount_rating_results'] = optionalDiscountRatingResults;
    }
    public get optionalDiscountRatingResults(): Array<OptionalDiscountRatingResult> | undefined {
        return this['optional_discount_rating_results'];
    }
}