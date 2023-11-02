import { Entity } from './Entity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataSetsResponse extends SdkResponse {
    public count?: number;
    public entities?: Array<Entity>;
    public facets?: object;
    public metrics?: object;
    private 'referred_entities'?: object;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowDataSetsResponse {
        this['count'] = count;
        return this;
    }
    public withEntities(entities: Array<Entity>): ShowDataSetsResponse {
        this['entities'] = entities;
        return this;
    }
    public withFacets(facets: object): ShowDataSetsResponse {
        this['facets'] = facets;
        return this;
    }
    public withMetrics(metrics: object): ShowDataSetsResponse {
        this['metrics'] = metrics;
        return this;
    }
    public withReferredEntities(referredEntities: object): ShowDataSetsResponse {
        this['referred_entities'] = referredEntities;
        return this;
    }
    public set referredEntities(referredEntities: object  | undefined) {
        this['referred_entities'] = referredEntities;
    }
    public get referredEntities(): object | undefined {
        return this['referred_entities'];
    }
}