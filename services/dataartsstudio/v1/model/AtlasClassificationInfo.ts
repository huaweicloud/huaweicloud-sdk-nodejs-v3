import { TimeBoundary } from './TimeBoundary';


export class AtlasClassificationInfo {
    private 'entity_guid'?: string;
    public propagate?: boolean;
    private 'validity_periods'?: Array<TimeBoundary>;
    private 'type_name'?: string;
    public attributes?: object;
    public constructor() { 
    }
    public withEntityGuid(entityGuid: string): AtlasClassificationInfo {
        this['entity_guid'] = entityGuid;
        return this;
    }
    public set entityGuid(entityGuid: string  | undefined) {
        this['entity_guid'] = entityGuid;
    }
    public get entityGuid(): string | undefined {
        return this['entity_guid'];
    }
    public withPropagate(propagate: boolean): AtlasClassificationInfo {
        this['propagate'] = propagate;
        return this;
    }
    public withValidityPeriods(validityPeriods: Array<TimeBoundary>): AtlasClassificationInfo {
        this['validity_periods'] = validityPeriods;
        return this;
    }
    public set validityPeriods(validityPeriods: Array<TimeBoundary>  | undefined) {
        this['validity_periods'] = validityPeriods;
    }
    public get validityPeriods(): Array<TimeBoundary> | undefined {
        return this['validity_periods'];
    }
    public withTypeName(typeName: string): AtlasClassificationInfo {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withAttributes(attributes: object): AtlasClassificationInfo {
        this['attributes'] = attributes;
        return this;
    }
}