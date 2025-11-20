

export class ListAnalyzersRequest {
    public limit?: number;
    public marker?: string;
    public type?: ListAnalyzersRequestTypeEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAnalyzersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAnalyzersRequest {
        this['marker'] = marker;
        return this;
    }
    public withType(type: ListAnalyzersRequestTypeEnum | string): ListAnalyzersRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAnalyzersRequestTypeEnum {
    ACCOUNT = 'account',
    ORGANIZATION = 'organization',
    ACCOUNT_UNUSED_ACCESS = 'account_unused_access',
    ORGANIZATION_UNUSED_ACCESS = 'organization_unused_access',
    ACCOUNT_PRIVILEGE_ESCALATION = 'account_privilege_escalation',
    ACCOUNT_IAM_BEST_PRACTICE = 'account_iam_best_practice'
}
