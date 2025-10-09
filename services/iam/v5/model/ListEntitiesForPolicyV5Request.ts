

export class ListEntitiesForPolicyV5Request {
    private 'policy_id'?: string;
    private 'entity_type'?: ListEntitiesForPolicyV5RequestEntityTypeEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): ListEntitiesForPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withEntityType(entityType: ListEntitiesForPolicyV5RequestEntityTypeEnum | string): ListEntitiesForPolicyV5Request {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: ListEntitiesForPolicyV5RequestEntityTypeEnum | string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): ListEntitiesForPolicyV5RequestEntityTypeEnum | string | undefined {
        return this['entity_type'];
    }
    public withLimit(limit: number): ListEntitiesForPolicyV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEntitiesForPolicyV5Request {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEntitiesForPolicyV5RequestEntityTypeEnum {
    USER = 'user',
    GROUP = 'group',
    AGENCY = 'agency'
}
