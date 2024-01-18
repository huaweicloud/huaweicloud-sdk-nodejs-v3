import { Entity } from './Entity';
import { Lineage } from './Lineage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatamapLineageResponse extends SdkResponse {
    public total?: number;
    public relationships?: Array<Lineage>;
    private 'relationship_types'?: object;
    public entities?: Array<Entity>;
    private 'entity_types'?: object;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowDatamapLineageResponse {
        this['total'] = total;
        return this;
    }
    public withRelationships(relationships: Array<Lineage>): ShowDatamapLineageResponse {
        this['relationships'] = relationships;
        return this;
    }
    public withRelationshipTypes(relationshipTypes: object): ShowDatamapLineageResponse {
        this['relationship_types'] = relationshipTypes;
        return this;
    }
    public set relationshipTypes(relationshipTypes: object  | undefined) {
        this['relationship_types'] = relationshipTypes;
    }
    public get relationshipTypes(): object | undefined {
        return this['relationship_types'];
    }
    public withEntities(entities: Array<Entity>): ShowDatamapLineageResponse {
        this['entities'] = entities;
        return this;
    }
    public withEntityTypes(entityTypes: object): ShowDatamapLineageResponse {
        this['entity_types'] = entityTypes;
        return this;
    }
    public set entityTypes(entityTypes: object  | undefined) {
        this['entity_types'] = entityTypes;
    }
    public get entityTypes(): object | undefined {
        return this['entity_types'];
    }
}