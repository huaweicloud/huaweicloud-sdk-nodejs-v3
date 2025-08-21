

export class MergeRequestReviewerExternalDto {
    public id?: number;
    public username?: string;
    public name?: string;
    private 'nick_name'?: string;
    public state?: boolean;
    public score?: number;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: number): MergeRequestReviewerExternalDto {
        this['id'] = id;
        return this;
    }
    public withUsername(username: string): MergeRequestReviewerExternalDto {
        this['username'] = username;
        return this;
    }
    public withName(name: string): MergeRequestReviewerExternalDto {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): MergeRequestReviewerExternalDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withState(state: boolean): MergeRequestReviewerExternalDto {
        this['state'] = state;
        return this;
    }
    public withScore(score: number): MergeRequestReviewerExternalDto {
        this['score'] = score;
        return this;
    }
    public withTenantName(tenantName: string): MergeRequestReviewerExternalDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
}