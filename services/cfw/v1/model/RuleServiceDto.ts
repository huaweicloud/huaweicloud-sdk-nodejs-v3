import { AddressGroupVO } from './AddressGroupVO';
import { ServiceItem } from './ServiceItem';


export class RuleServiceDto {
    public type?: number;
    public protocol?: number;
    public protocols?: Array<number>;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    private 'service_set_id'?: string;
    private 'service_set_name'?: string;
    private 'custom_service'?: Array<ServiceItem>;
    private 'predefined_group'?: Array<string>;
    private 'service_group'?: Array<string>;
    private 'service_group_names'?: Array<AddressGroupVO>;
    private 'service_set_type'?: number;
    public constructor(type?: number) { 
        this['type'] = type;
    }
    public withType(type: number): RuleServiceDto {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: number): RuleServiceDto {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocols(protocols: Array<number>): RuleServiceDto {
        this['protocols'] = protocols;
        return this;
    }
    public withSourcePort(sourcePort: string): RuleServiceDto {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): RuleServiceDto {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withServiceSetId(serviceSetId: string): RuleServiceDto {
        this['service_set_id'] = serviceSetId;
        return this;
    }
    public set serviceSetId(serviceSetId: string  | undefined) {
        this['service_set_id'] = serviceSetId;
    }
    public get serviceSetId(): string | undefined {
        return this['service_set_id'];
    }
    public withServiceSetName(serviceSetName: string): RuleServiceDto {
        this['service_set_name'] = serviceSetName;
        return this;
    }
    public set serviceSetName(serviceSetName: string  | undefined) {
        this['service_set_name'] = serviceSetName;
    }
    public get serviceSetName(): string | undefined {
        return this['service_set_name'];
    }
    public withCustomService(customService: Array<ServiceItem>): RuleServiceDto {
        this['custom_service'] = customService;
        return this;
    }
    public set customService(customService: Array<ServiceItem>  | undefined) {
        this['custom_service'] = customService;
    }
    public get customService(): Array<ServiceItem> | undefined {
        return this['custom_service'];
    }
    public withPredefinedGroup(predefinedGroup: Array<string>): RuleServiceDto {
        this['predefined_group'] = predefinedGroup;
        return this;
    }
    public set predefinedGroup(predefinedGroup: Array<string>  | undefined) {
        this['predefined_group'] = predefinedGroup;
    }
    public get predefinedGroup(): Array<string> | undefined {
        return this['predefined_group'];
    }
    public withServiceGroup(serviceGroup: Array<string>): RuleServiceDto {
        this['service_group'] = serviceGroup;
        return this;
    }
    public set serviceGroup(serviceGroup: Array<string>  | undefined) {
        this['service_group'] = serviceGroup;
    }
    public get serviceGroup(): Array<string> | undefined {
        return this['service_group'];
    }
    public withServiceGroupNames(serviceGroupNames: Array<AddressGroupVO>): RuleServiceDto {
        this['service_group_names'] = serviceGroupNames;
        return this;
    }
    public set serviceGroupNames(serviceGroupNames: Array<AddressGroupVO>  | undefined) {
        this['service_group_names'] = serviceGroupNames;
    }
    public get serviceGroupNames(): Array<AddressGroupVO> | undefined {
        return this['service_group_names'];
    }
    public withServiceSetType(serviceSetType: number): RuleServiceDto {
        this['service_set_type'] = serviceSetType;
        return this;
    }
    public set serviceSetType(serviceSetType: number  | undefined) {
        this['service_set_type'] = serviceSetType;
    }
    public get serviceSetType(): number | undefined {
        return this['service_set_type'];
    }
}