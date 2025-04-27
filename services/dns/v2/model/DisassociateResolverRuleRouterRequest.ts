import { AssociateOrDisassociateRouterWithRuleRequestBody } from './AssociateOrDisassociateRouterWithRuleRequestBody';


export class DisassociateResolverRuleRouterRequest {
    private 'resolverrule_id'?: string;
    public body?: AssociateOrDisassociateRouterWithRuleRequestBody;
    public constructor(resolverruleId?: string) { 
        this['resolverrule_id'] = resolverruleId;
    }
    public withResolverruleId(resolverruleId: string): DisassociateResolverRuleRouterRequest {
        this['resolverrule_id'] = resolverruleId;
        return this;
    }
    public set resolverruleId(resolverruleId: string  | undefined) {
        this['resolverrule_id'] = resolverruleId;
    }
    public get resolverruleId(): string | undefined {
        return this['resolverrule_id'];
    }
    public withBody(body: AssociateOrDisassociateRouterWithRuleRequestBody): DisassociateResolverRuleRouterRequest {
        this['body'] = body;
        return this;
    }
}