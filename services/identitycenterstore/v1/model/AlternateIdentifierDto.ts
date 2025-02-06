import { ExternalIdDto } from './ExternalIdDto';
import { UniqueAttributeDto } from './UniqueAttributeDto';


export class AlternateIdentifierDto {
    private 'external_id'?: ExternalIdDto;
    private 'unique_attribute'?: UniqueAttributeDto;
    public constructor() { 
    }
    public withExternalId(externalId: ExternalIdDto): AlternateIdentifierDto {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: ExternalIdDto  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): ExternalIdDto | undefined {
        return this['external_id'];
    }
    public withUniqueAttribute(uniqueAttribute: UniqueAttributeDto): AlternateIdentifierDto {
        this['unique_attribute'] = uniqueAttribute;
        return this;
    }
    public set uniqueAttribute(uniqueAttribute: UniqueAttributeDto  | undefined) {
        this['unique_attribute'] = uniqueAttribute;
    }
    public get uniqueAttribute(): UniqueAttributeDto | undefined {
        return this['unique_attribute'];
    }
}