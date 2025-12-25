import { CreateRetryPolicyRequestBodyDataObjectBlockAge } from './CreateRetryPolicyRequestBodyDataObjectBlockAge';
import { CreateRetryPolicyRequestBodyDataObjectDefensePolicyList } from './CreateRetryPolicyRequestBodyDataObjectDefensePolicyList';
import { CreateRetryPolicyRequestBodyDataObjectPolicyType } from './CreateRetryPolicyRequestBodyDataObjectPolicyType';


export class CreateRetryPolicyRequestBodyDataObject {
    private 'retry_list'?: Array<string>;
    private 'block_age'?: CreateRetryPolicyRequestBodyDataObjectBlockAge;
    private 'block_target'?: string;
    private 'defense_policy_list'?: Array<CreateRetryPolicyRequestBodyDataObjectDefensePolicyList>;
    public description?: string;
    public labels?: string;
    private 'policy_category'?: CreateRetryPolicyRequestBodyDataObjectPolicyCategoryEnum | string;
    private 'policy_type'?: CreateRetryPolicyRequestBodyDataObjectPolicyType;
    private 'region_id'?: string;
    private 'policy_direction'?: string;
    private 'account_scope'?: string;
    private 'eps_scope'?: string;
    private 'region_scope'?: string;
    public constructor(blockAge?: CreateRetryPolicyRequestBodyDataObjectBlockAge, blockTarget?: string, defensePolicyList?: Array<CreateRetryPolicyRequestBodyDataObjectDefensePolicyList>, policyCategory?: string, policyType?: CreateRetryPolicyRequestBodyDataObjectPolicyType, regionId?: string) { 
        this['block_age'] = blockAge;
        this['block_target'] = blockTarget;
        this['defense_policy_list'] = defensePolicyList;
        this['policy_category'] = policyCategory;
        this['policy_type'] = policyType;
        this['region_id'] = regionId;
    }
    public withRetryList(retryList: Array<string>): CreateRetryPolicyRequestBodyDataObject {
        this['retry_list'] = retryList;
        return this;
    }
    public set retryList(retryList: Array<string>  | undefined) {
        this['retry_list'] = retryList;
    }
    public get retryList(): Array<string> | undefined {
        return this['retry_list'];
    }
    public withBlockAge(blockAge: CreateRetryPolicyRequestBodyDataObjectBlockAge): CreateRetryPolicyRequestBodyDataObject {
        this['block_age'] = blockAge;
        return this;
    }
    public set blockAge(blockAge: CreateRetryPolicyRequestBodyDataObjectBlockAge  | undefined) {
        this['block_age'] = blockAge;
    }
    public get blockAge(): CreateRetryPolicyRequestBodyDataObjectBlockAge | undefined {
        return this['block_age'];
    }
    public withBlockTarget(blockTarget: string): CreateRetryPolicyRequestBodyDataObject {
        this['block_target'] = blockTarget;
        return this;
    }
    public set blockTarget(blockTarget: string  | undefined) {
        this['block_target'] = blockTarget;
    }
    public get blockTarget(): string | undefined {
        return this['block_target'];
    }
    public withDefensePolicyList(defensePolicyList: Array<CreateRetryPolicyRequestBodyDataObjectDefensePolicyList>): CreateRetryPolicyRequestBodyDataObject {
        this['defense_policy_list'] = defensePolicyList;
        return this;
    }
    public set defensePolicyList(defensePolicyList: Array<CreateRetryPolicyRequestBodyDataObjectDefensePolicyList>  | undefined) {
        this['defense_policy_list'] = defensePolicyList;
    }
    public get defensePolicyList(): Array<CreateRetryPolicyRequestBodyDataObjectDefensePolicyList> | undefined {
        return this['defense_policy_list'];
    }
    public withDescription(description: string): CreateRetryPolicyRequestBodyDataObject {
        this['description'] = description;
        return this;
    }
    public withLabels(labels: string): CreateRetryPolicyRequestBodyDataObject {
        this['labels'] = labels;
        return this;
    }
    public withPolicyCategory(policyCategory: CreateRetryPolicyRequestBodyDataObjectPolicyCategoryEnum | string): CreateRetryPolicyRequestBodyDataObject {
        this['policy_category'] = policyCategory;
        return this;
    }
    public set policyCategory(policyCategory: CreateRetryPolicyRequestBodyDataObjectPolicyCategoryEnum | string  | undefined) {
        this['policy_category'] = policyCategory;
    }
    public get policyCategory(): CreateRetryPolicyRequestBodyDataObjectPolicyCategoryEnum | string | undefined {
        return this['policy_category'];
    }
    public withPolicyType(policyType: CreateRetryPolicyRequestBodyDataObjectPolicyType): CreateRetryPolicyRequestBodyDataObject {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: CreateRetryPolicyRequestBodyDataObjectPolicyType  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): CreateRetryPolicyRequestBodyDataObjectPolicyType | undefined {
        return this['policy_type'];
    }
    public withRegionId(regionId: string): CreateRetryPolicyRequestBodyDataObject {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withPolicyDirection(policyDirection: string): CreateRetryPolicyRequestBodyDataObject {
        this['policy_direction'] = policyDirection;
        return this;
    }
    public set policyDirection(policyDirection: string  | undefined) {
        this['policy_direction'] = policyDirection;
    }
    public get policyDirection(): string | undefined {
        return this['policy_direction'];
    }
    public withAccountScope(accountScope: string): CreateRetryPolicyRequestBodyDataObject {
        this['account_scope'] = accountScope;
        return this;
    }
    public set accountScope(accountScope: string  | undefined) {
        this['account_scope'] = accountScope;
    }
    public get accountScope(): string | undefined {
        return this['account_scope'];
    }
    public withEpsScope(epsScope: string): CreateRetryPolicyRequestBodyDataObject {
        this['eps_scope'] = epsScope;
        return this;
    }
    public set epsScope(epsScope: string  | undefined) {
        this['eps_scope'] = epsScope;
    }
    public get epsScope(): string | undefined {
        return this['eps_scope'];
    }
    public withRegionScope(regionScope: string): CreateRetryPolicyRequestBodyDataObject {
        this['region_scope'] = regionScope;
        return this;
    }
    public set regionScope(regionScope: string  | undefined) {
        this['region_scope'] = regionScope;
    }
    public get regionScope(): string | undefined {
        return this['region_scope'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRetryPolicyRequestBodyDataObjectPolicyCategoryEnum {
    WHITE = 'WHITE',
    BLOCK = 'BLOCK'
}
