import { UpdateResolverRuleRequestBody } from './UpdateResolverRuleRequestBody';


export class UpdateResolverRuleRequest {
    private 'resolverrule_id'?: string;
    public body?: UpdateResolverRuleRequestBody;
    public constructor(resolverruleId?: string) { 
        this['resolverrule_id'] = resolverruleId;
    }
    public withResolverruleId(resolverruleId: string): UpdateResolverRuleRequest {
        this['resolverrule_id'] = resolverruleId;
        return this;
    }
    public set resolverruleId(resolverruleId: string  | undefined) {
        this['resolverrule_id'] = resolverruleId;
    }
    public get resolverruleId(): string | undefined {
        return this['resolverrule_id'];
    }
    public withBody(body: UpdateResolverRuleRequestBody): UpdateResolverRuleRequest {
        this['body'] = body;
        return this;
    }
}