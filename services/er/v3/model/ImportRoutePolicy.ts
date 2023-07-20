

export class ImportRoutePolicy {
    private 'import_policy_id'?: string;
    public constructor() { 
    }
    public withImportPolicyId(importPolicyId: string): ImportRoutePolicy {
        this['import_policy_id'] = importPolicyId;
        return this;
    }
    public set importPolicyId(importPolicyId: string  | undefined) {
        this['import_policy_id'] = importPolicyId;
    }
    public get importPolicyId(): string | undefined {
        return this['import_policy_id'];
    }
}