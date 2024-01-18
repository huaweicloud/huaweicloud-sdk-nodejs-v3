import { Entity } from './Entity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataDetailResponse extends SdkResponse {
    public entity?: Entity;
    private 'referred_entities'?: object;
    public constructor() { 
        super();
    }
    public withEntity(entity: Entity): ShowDataDetailResponse {
        this['entity'] = entity;
        return this;
    }
    public withReferredEntities(referredEntities: object): ShowDataDetailResponse {
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