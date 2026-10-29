import { ReviewDataInfoRequestParam } from './ReviewDataInfoRequestParam';


export class UpdateCodeGateRequestBody {
    public reviewData?: Array<ReviewDataInfoRequestParam>;
    public id?: string;
    public constructor(reviewData?: Array<ReviewDataInfoRequestParam>, id?: string) { 
        this['reviewData'] = reviewData;
        this['id'] = id;
    }
    public withReviewData(reviewData: Array<ReviewDataInfoRequestParam>): UpdateCodeGateRequestBody {
        this['reviewData'] = reviewData;
        return this;
    }
    public withId(id: string): UpdateCodeGateRequestBody {
        this['id'] = id;
        return this;
    }
}