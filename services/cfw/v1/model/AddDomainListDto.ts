import { DomainSetInfoDto } from './DomainSetInfoDto';


export class AddDomainListDto {
    private 'fw_instance_id'?: string;
    private 'object_id'?: string;
    private 'domain_names'?: Array<DomainSetInfoDto>;
    public constructor(fwInstanceId?: string, objectId?: string, domainNames?: Array<DomainSetInfoDto>) { 
        this['fw_instance_id'] = fwInstanceId;
        this['object_id'] = objectId;
        this['domain_names'] = domainNames;
    }
    public withFwInstanceId(fwInstanceId: string): AddDomainListDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withObjectId(objectId: string): AddDomainListDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withDomainNames(domainNames: Array<DomainSetInfoDto>): AddDomainListDto {
        this['domain_names'] = domainNames;
        return this;
    }
    public set domainNames(domainNames: Array<DomainSetInfoDto>  | undefined) {
        this['domain_names'] = domainNames;
    }
    public get domainNames(): Array<DomainSetInfoDto> | undefined {
        return this['domain_names'];
    }
}