import { DomainSetInfoDto } from './DomainSetInfoDto';


export class AddDomainSetInfoDto {
    private 'fw_instance_id'?: string;
    private 'object_id'?: string;
    public name?: string;
    public description?: string;
    private 'domain_names'?: Array<DomainSetInfoDto>;
    private 'domain_set_type'?: number;
    public constructor(fwInstanceId?: string, objectId?: string, name?: string, domainNames?: Array<DomainSetInfoDto>) { 
        this['fw_instance_id'] = fwInstanceId;
        this['object_id'] = objectId;
        this['name'] = name;
        this['domain_names'] = domainNames;
    }
    public withFwInstanceId(fwInstanceId: string): AddDomainSetInfoDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withObjectId(objectId: string): AddDomainSetInfoDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withName(name: string): AddDomainSetInfoDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddDomainSetInfoDto {
        this['description'] = description;
        return this;
    }
    public withDomainNames(domainNames: Array<DomainSetInfoDto>): AddDomainSetInfoDto {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: Array<DomainSetInfoDto>  | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames(): Array<DomainSetInfoDto> | undefined {
        return this['domain_names'];
    }
    public withDomainSetType(domainSetType: number): AddDomainSetInfoDto {
        this['domain_set_type'] = domainSetType;
        return this;
    }
    public set domainSetType(domainSetType: number  | undefined) {
        this['domain_set_type'] = domainSetType;
    }
    public get domainSetType(): number | undefined {
        return this['domain_set_type'];
    }
}