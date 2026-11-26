import { AuthorizingClaimMatchValue } from './AuthorizingClaimMatchValue';


export class CustomClaimValidation {
    private 'authorizing_claim_match_value'?: AuthorizingClaimMatchValue;
    private 'inbound_token_claim_name'?: string;
    private 'inbound_token_claim_value_type'?: CustomClaimValidationInboundTokenClaimValueTypeEnum | string;
    public constructor(authorizingClaimMatchValue?: AuthorizingClaimMatchValue, inboundTokenClaimName?: string, inboundTokenClaimValueType?: string) { 
        this['authorizing_claim_match_value'] = authorizingClaimMatchValue;
        this['inbound_token_claim_name'] = inboundTokenClaimName;
        this['inbound_token_claim_value_type'] = inboundTokenClaimValueType;
    }
    public withAuthorizingClaimMatchValue(authorizingClaimMatchValue: AuthorizingClaimMatchValue): CustomClaimValidation {
        this['authorizing_claim_match_value'] = authorizingClaimMatchValue;
        return this;
    }
    public set authorizingClaimMatchValue(authorizingClaimMatchValue: AuthorizingClaimMatchValue  | undefined) {
        this['authorizing_claim_match_value'] = authorizingClaimMatchValue;
    }
    public get authorizingClaimMatchValue(): AuthorizingClaimMatchValue | undefined {
        return this['authorizing_claim_match_value'];
    }
    public withInboundTokenClaimName(inboundTokenClaimName: string): CustomClaimValidation {
        this['inbound_token_claim_name'] = inboundTokenClaimName;
        return this;
    }
    public set inboundTokenClaimName(inboundTokenClaimName: string  | undefined) {
        this['inbound_token_claim_name'] = inboundTokenClaimName;
    }
    public get inboundTokenClaimName(): string | undefined {
        return this['inbound_token_claim_name'];
    }
    public withInboundTokenClaimValueType(inboundTokenClaimValueType: CustomClaimValidationInboundTokenClaimValueTypeEnum | string): CustomClaimValidation {
        this['inbound_token_claim_value_type'] = inboundTokenClaimValueType;
        return this;
    }
    public set inboundTokenClaimValueType(inboundTokenClaimValueType: CustomClaimValidationInboundTokenClaimValueTypeEnum | string  | undefined) {
        this['inbound_token_claim_value_type'] = inboundTokenClaimValueType;
    }
    public get inboundTokenClaimValueType(): CustomClaimValidationInboundTokenClaimValueTypeEnum | string | undefined {
        return this['inbound_token_claim_value_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomClaimValidationInboundTokenClaimValueTypeEnum {
    STRING = 'STRING',
    STRING_ARRAY = 'STRING_ARRAY'
}
