import { Entity } from './Entity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEntityDetailsResponse extends SdkResponse {
    public entities?: Array<Entity>;
    private 'referred_entities'?: object;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<Entity>): ListEntityDetailsResponse {
        this['entities'] = entities;
        return this;
    }
    public withReferredEntities(referredEntities: object): ListEntityDetailsResponse {
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