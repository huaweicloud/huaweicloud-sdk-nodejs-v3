import { AccessControlAttributeValueDto } from './AccessControlAttributeValueDto';


export class AccessControlAttributeDto {
    public key?: string;
    public value?: AccessControlAttributeValueDto;
    public constructor(key?: string, value?: AccessControlAttributeValueDto) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): AccessControlAttributeDto {
        this['key'] = key;
        return this;
    }
    public withValue(value: AccessControlAttributeValueDto): AccessControlAttributeDto {
        this['value'] = value;
        return this;
    }
}