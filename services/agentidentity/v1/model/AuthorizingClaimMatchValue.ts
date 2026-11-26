import { ClaimMatchValue } from './ClaimMatchValue';


export class AuthorizingClaimMatchValue {
    private 'claim_match_operator'?: AuthorizingClaimMatchValueClaimMatchOperatorEnum | string;
    private 'claim_match_value'?: ClaimMatchValue;
    public constructor(claimMatchOperator?: string, claimMatchValue?: ClaimMatchValue) { 
        this['claim_match_operator'] = claimMatchOperator;
        this['claim_match_value'] = claimMatchValue;
    }
    public withClaimMatchOperator(claimMatchOperator: AuthorizingClaimMatchValueClaimMatchOperatorEnum | string): AuthorizingClaimMatchValue {
        this['claim_match_operator'] = claimMatchOperator;
        return this;
    }
    public set claimMatchOperator(claimMatchOperator: AuthorizingClaimMatchValueClaimMatchOperatorEnum | string  | undefined) {
        this['claim_match_operator'] = claimMatchOperator;
    }
    public get claimMatchOperator(): AuthorizingClaimMatchValueClaimMatchOperatorEnum | string | undefined {
        return this['claim_match_operator'];
    }
    public withClaimMatchValue(claimMatchValue: ClaimMatchValue): AuthorizingClaimMatchValue {
        this['claim_match_value'] = claimMatchValue;
        return this;
    }
    public set claimMatchValue(claimMatchValue: ClaimMatchValue  | undefined) {
        this['claim_match_value'] = claimMatchValue;
    }
    public get claimMatchValue(): ClaimMatchValue | undefined {
        return this['claim_match_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizingClaimMatchValueClaimMatchOperatorEnum {
    EQUALS = 'EQUALS',
    CONTAINS = 'CONTAINS',
    CONTAINS_ANY = 'CONTAINS_ANY'
}
