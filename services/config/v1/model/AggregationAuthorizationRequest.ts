import { ResourceTag } from './ResourceTag';


export class AggregationAuthorizationRequest {
    private 'authorized_account_id'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(authorizedAccountId?: string) { 
        this['authorized_account_id'] = authorizedAccountId;
    }
    public withAuthorizedAccountId(authorizedAccountId: string): AggregationAuthorizationRequest {
        this['authorized_account_id'] = authorizedAccountId;
        return this;
    }
    public set authorizedAccountId(authorizedAccountId: string  | undefined) {
        this['authorized_account_id'] = authorizedAccountId;
    }
    public get authorizedAccountId(): string | undefined {
        return this['authorized_account_id'];
    }
    public withTags(tags: Array<ResourceTag>): AggregationAuthorizationRequest {
        this['tags'] = tags;
        return this;
    }
}