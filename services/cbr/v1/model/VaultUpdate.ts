import { BillingUpdate } from './BillingUpdate';
import { VaultBindRules } from './VaultBindRules';


export class VaultUpdate {
    public billing?: BillingUpdate;
    public name?: string;
    private 'auto_bind'?: boolean | undefined;
    private 'bind_rules'?: VaultBindRules | undefined;
    private 'auto_expand'?: boolean | undefined;
    private 'smn_notify'?: boolean | undefined;
    public threshold?: number;
    public constructor() { 
    }
    public withBilling(billing: BillingUpdate): VaultUpdate {
        this['billing'] = billing;
        return this;
    }
    public withName(name: string): VaultUpdate {
        this['name'] = name;
        return this;
    }
    public withAutoBind(autoBind: boolean): VaultUpdate {
        this['auto_bind'] = autoBind;
        return this;
    }
    public set autoBind(autoBind: boolean | undefined) {
        this['auto_bind'] = autoBind;
    }
    public get autoBind() {
        return this['auto_bind'];
    }
    public withBindRules(bindRules: VaultBindRules): VaultUpdate {
        this['bind_rules'] = bindRules;
        return this;
    }
    public set bindRules(bindRules: VaultBindRules | undefined) {
        this['bind_rules'] = bindRules;
    }
    public get bindRules() {
        return this['bind_rules'];
    }
    public withAutoExpand(autoExpand: boolean): VaultUpdate {
        this['auto_expand'] = autoExpand;
        return this;
    }
    public set autoExpand(autoExpand: boolean | undefined) {
        this['auto_expand'] = autoExpand;
    }
    public get autoExpand() {
        return this['auto_expand'];
    }
    public withSmnNotify(smnNotify: boolean): VaultUpdate {
        this['smn_notify'] = smnNotify;
        return this;
    }
    public set smnNotify(smnNotify: boolean | undefined) {
        this['smn_notify'] = smnNotify;
    }
    public get smnNotify() {
        return this['smn_notify'];
    }
    public withThreshold(threshold: number): VaultUpdate {
        this['threshold'] = threshold;
        return this;
    }
}