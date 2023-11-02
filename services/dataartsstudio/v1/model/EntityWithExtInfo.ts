import { AtlasAssetEntity } from './AtlasAssetEntity';


export class EntityWithExtInfo {
    public entity?: AtlasAssetEntity;
    private 'referred_entities'?: object;
    public constructor(entity?: AtlasAssetEntity) { 
        this['entity'] = entity;
    }
    public withEntity(entity: AtlasAssetEntity): EntityWithExtInfo {
        this['entity'] = entity;
        return this;
    }
    public withReferredEntities(referredEntities: object): EntityWithExtInfo {
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