import { ServiceGroupVO } from './ServiceGroupVO';
import { ServiceItem } from './ServiceItem';


export class RuleServiceDtoForResponse {
    public type?: number;
    public protocol?: number;
    public protocols?: Array<number>;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    private 'service_set_id'?: string;
    private 'service_set_name'?: string;
    private 'custom_service'?: Array<ServiceItem>;
    private 'service_group'?: Array<string>;
    private 'service_group_names'?: Array<ServiceGroupVO>;
    private 'service_set_type'?: number;
    public constructor(type?: number) { 
        this['type'] = type;
    }
    public withType(type: number): RuleServiceDtoForResponse {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: number): RuleServiceDtoForResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocols(protocols: Array<number>): RuleServiceDtoForResponse {
        this['protocols'] = protocols;
        return this;
    }
    public withSourcePort(sourcePort: string): RuleServiceDtoForResponse {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): RuleServiceDtoForResponse {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withServiceSetId(serviceSetId: string): RuleServiceDtoForResponse {
        this['service_set_id'] = serviceSetId;
        return this;
    }
    public set serviceSetId(serviceSetId: string  | undefined) {
        this['service_set_id'] = serviceSetId;
    }
    public get serviceSetId(): string | undefined {
        return this['service_set_id'];
    }
    public withServiceSetName(serviceSetName: string): RuleServiceDtoForResponse {
        this['service_set_name'] = serviceSetName;
        return this;
    }
    public set serviceSetName(serviceSetName: string  | undefined) {
        this['service_set_name'] = serviceSetName;
    }
    public get serviceSetName(): string | undefined {
        return this['service_set_name'];
    }
    public withCustomService(customService: Array<ServiceItem>): RuleServiceDtoForResponse {
        this['custom_service'] = customService;
        return this;
    }
    public set customService(customService: Array<ServiceItem>  | undefined) {
        this['custom_service'] = customService;
    }
    public get customService(): Array<ServiceItem> | undefined {
        return this['custom_service'];
    }
    public withServiceGroup(serviceGroup: Array<string>): RuleServiceDtoForResponse {
        this['service_group'] = serviceGroup;
        return this;
    }
    public set serviceGroup(serviceGroup: Array<string>  | undefined) {
        this['service_group'] = serviceGroup;
    }
    public get serviceGroup(): Array<string> | undefined {
        return this['service_group'];
    }
    public withServiceGroupNames(serviceGroupNames: Array<ServiceGroupVO>): RuleServiceDtoForResponse {
        this['service_group_names'] = serviceGroupNames;
        return this;
    }
    public set serviceGroupNames(serviceGroupNames: Array<ServiceGroupVO>  | undefined) {
        this['service_group_names'] = serviceGroupNames;
    }
    public get serviceGroupNames(): Array<ServiceGroupVO> | undefined {
        return this['service_group_names'];
    }
    public withServiceSetType(serviceSetType: number): RuleServiceDtoForResponse {
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