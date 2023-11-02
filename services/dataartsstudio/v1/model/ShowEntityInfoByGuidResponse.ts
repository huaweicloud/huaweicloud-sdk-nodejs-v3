import { OpenEntityWithExtInfoEntity } from './OpenEntityWithExtInfoEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEntityInfoByGuidResponse extends SdkResponse {
    public entity?: OpenEntityWithExtInfoEntity;
    private 'referred_entities'?: object;
    public constructor() { 
        super();
    }
    public withEntity(entity: OpenEntityWithExtInfoEntity): ShowEntityInfoByGuidResponse {
        this['entity'] = entity;
        return this;
    }
    public withReferredEntities(referredEntities: object): ShowEntityInfoByGuidResponse {
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