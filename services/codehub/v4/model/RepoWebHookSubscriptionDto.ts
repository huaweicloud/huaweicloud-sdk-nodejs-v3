

export class RepoWebHookSubscriptionDto {
    public url?: string;
    private 'mention_users'?: string;
    private 'mention_phone'?: string;
    private 'has_token'?: boolean;
    public constructor() { 
    }
    public withUrl(url: string): RepoWebHookSubscriptionDto {
        this['url'] = url;
        return this;
    }
    public withMentionUsers(mentionUsers: string): RepoWebHookSubscriptionDto {
        this['mention_users'] = mentionUsers;
        return this;
    }
    public set mentionUsers(mentionUsers: string  | undefined) {
        this['mention_users'] = mentionUsers;
    }
    public get mentionUsers(): string | undefined {
        return this['mention_users'];
    }
    public withMentionPhone(mentionPhone: string): RepoWebHookSubscriptionDto {
        this['mention_phone'] = mentionPhone;
        return this;
    }
    public set mentionPhone(mentionPhone: string  | undefined) {
        this['mention_phone'] = mentionPhone;
    }
    public get mentionPhone(): string | undefined {
        return this['mention_phone'];
    }
    public withHasToken(hasToken: boolean): RepoWebHookSubscriptionDto {
        this['has_token'] = hasToken;
        return this;
    }
    public set hasToken(hasToken: boolean  | undefined) {
        this['has_token'] = hasToken;
    }
    public get hasToken(): boolean | undefined {
        return this['has_token'];
    }
}