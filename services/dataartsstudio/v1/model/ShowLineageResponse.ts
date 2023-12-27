import { LineageRelation } from './LineageRelation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLineageResponse extends SdkResponse {
    private 'base_entity_guid'?: string;
    private 'guid_entity_map'?: object;
    public relations?: Array<LineageRelation>;
    private 'referred_entities'?: object;
    public constructor() { 
        super();
    }
    public withBaseEntityGuid(baseEntityGuid: string): ShowLineageResponse {
        this['base_entity_guid'] = baseEntityGuid;
        return this;
    }
    public set baseEntityGuid(baseEntityGuid: string  | undefined) {
        this['base_entity_guid'] = baseEntityGuid;
    }
    public get baseEntityGuid(): string | undefined {
        return this['base_entity_guid'];
    }
    public withGuidEntityMap(guidEntityMap: object): ShowLineageResponse {
        this['guid_entity_map'] = guidEntityMap;
        return this;
    }
    public set guidEntityMap(guidEntityMap: object  | undefined) {
        this['guid_entity_map'] = guidEntityMap;
    }
    public get guidEntityMap(): object | undefined {
        return this['guid_entity_map'];
    }
    public withRelations(relations: Array<LineageRelation>): ShowLineageResponse {
        this['relations'] = relations;
        return this;
    }
    public withReferredEntities(referredEntities: object): ShowLineageResponse {
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