import { OfficialWebsiteRatingResult } from './OfficialWebsiteRatingResult';
import { OptionalDiscountRatingResult } from './OptionalDiscountRatingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EstimateDesktopPoolExtendVolumeResponse extends SdkResponse {
    public currency?: string;
    private 'extend_params'?: string;
    private 'official_website_rating_result'?: OfficialWebsiteRatingResult;
    private 'optional_discount_rating_results'?: Array<OptionalDiscountRatingResult>;
    public constructor() { 
        super();
    }
    public withCurrency(currency: string): EstimateDesktopPoolExtendVolumeResponse {
        this['currency'] = currency;
        return this;
    }
    public withExtendParams(extendParams: string): EstimateDesktopPoolExtendVolumeResponse {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: string  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): string | undefined {
        return this['extend_params'];
    }
    public withOfficialWebsiteRatingResult(officialWebsiteRatingResult: OfficialWebsiteRatingResult): EstimateDesktopPoolExtendVolumeResponse {
        this['official_website_rating_result'] = officialWebsiteRatingResult;
        return this;
    }
    public set officialWebsiteRatingResult(officialWebsiteRatingResult: OfficialWebsiteRatingResult  | undefined) {
        this['official_website_rating_result'] = officialWebsiteRatingResult;
    }
    public get officialWebsiteRatingResult(): OfficialWebsiteRatingResult | undefined {
        return this['official_website_rating_result'];
    }
    public withOptionalDiscountRatingResults(optionalDiscountRatingResults: Array<OptionalDiscountRatingResult>): EstimateDesktopPoolExtendVolumeResponse {
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