import { Entity } from './Entity';


export class DataEntityWithExtInfo {
    public entity?: Entity;
    private 'referred_entities'?: object;
    public constructor() { 
    }
    public withEntity(entity: Entity): DataEntityWithExtInfo {
        this['entity'] = entity;
        return this;
    }
    public withReferredEntities(referredEntities: object): DataEntityWithExtInfo {
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