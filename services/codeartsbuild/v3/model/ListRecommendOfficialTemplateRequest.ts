import { ListRecommendOfficialTemplateRequestBody } from './ListRecommendOfficialTemplateRequestBody';


export class ListRecommendOfficialTemplateRequest {
    public body?: ListRecommendOfficialTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: ListRecommendOfficialTemplateRequestBody): ListRecommendOfficialTemplateRequest {
        this['body'] = body;
        return this;
    }
}