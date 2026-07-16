import { EventCategoriesResp } from './EventCategoriesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventCategoriesResponse extends SdkResponse {
    private 'event-categories'?: Array<EventCategoriesResp>;
    public constructor() { 
        super();
    }
    public withEventCategories(eventCategories: Array<EventCategoriesResp>): ListEventCategoriesResponse {
        this['event-categories'] = eventCategories;
        return this;
    }
    public set eventCategories(eventCategories: Array<EventCategoriesResp>  | undefined) {
        this['event-categories'] = eventCategories;
    }
    public get eventCategories(): Array<EventCategoriesResp> | undefined {
        return this['event-categories'];
    }
}