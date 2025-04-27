

export class DeleteResolverRuleRequest {
    private 'resolverrule_id'?: string;
    public constructor(resolverruleId?: string) { 
        this['resolverrule_id'] = resolverruleId;
    }
    public withResolverruleId(resolverruleId: string): DeleteResolverRuleRequest {
        this['resolverrule_id'] = resolverruleId;
        return this;
    }
    public set resolverruleId(resolverruleId: string  | undefined) {
        this['resolverrule_id'] = resolverruleId;
    }
    public get resolverruleId(): string | undefined {
        return this['resolverrule_id'];
    }
}