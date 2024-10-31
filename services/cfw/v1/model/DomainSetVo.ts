import { UseRuleVO } from './UseRuleVO';


export class DomainSetVo {
    private 'set_id'?: string;
    public name?: string;
    public description?: string;
    private 'ref_count'?: number;
    private 'domain_set_type'?: number;
    private 'config_status'?: number;
    public rules?: Array<UseRuleVO>;
    public constructor() { 
    }
    public withSetId(setId: string): DomainSetVo {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withName(name: string): DomainSetVo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DomainSetVo {
        this['description'] = description;
        return this;
    }
    public withRefCount(refCount: number): DomainSetVo {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number  | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount(): number | undefined {
        return this['ref_count'];
    }
    public withDomainSetType(domainSetType: number): DomainSetVo {
        this['domain_set_type'] = domainSetType;
        return this;
    }
    public set domainSetType(domainSetType: number  | undefined) {
        this['domain_set_type'] = domainSetType;
    }
    public get domainSetType(): number | undefined {
        return this['domain_set_type'];
    }
    public withConfigStatus(configStatus: number): DomainSetVo {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: number  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): number | undefined {
        return this['config_status'];
    }
    public withRules(rules: Array<UseRuleVO>): DomainSetVo {
        this['rules'] = rules;
        return this;
    }
}