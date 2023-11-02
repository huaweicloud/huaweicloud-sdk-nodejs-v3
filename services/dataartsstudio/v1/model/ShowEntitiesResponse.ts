import { OpenEntityHeader } from './OpenEntityHeader';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEntitiesResponse extends SdkResponse {
    public count?: number;
    public entities?: Array<OpenEntityHeader>;
    private 'scroll_id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowEntitiesResponse {
        this['count'] = count;
        return this;
    }
    public withEntities(entities: Array<OpenEntityHeader>): ShowEntitiesResponse {
        this['entities'] = entities;
        return this;
    }
    public withScrollId(scrollId: string): ShowEntitiesResponse {
        this['scroll_id'] = scrollId;
        return this;
    }
    public set scrollId(scrollId: string  | undefined) {
        this['scroll_id'] = scrollId;
    }
    public get scrollId(): string | undefined {
        return this['scroll_id'];
    }
}