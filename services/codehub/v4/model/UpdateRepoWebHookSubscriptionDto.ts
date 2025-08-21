

export class UpdateRepoWebHookSubscriptionDto {
    public url?: string;
    public token?: string;
    private 'mention_users'?: string;
    private 'mention_phone'?: string;
    public constructor() { 
    }
    public withUrl(url: string): UpdateRepoWebHookSubscriptionDto {
        this['url'] = url;
        return this;
    }
    public withToken(token: string): UpdateRepoWebHookSubscriptionDto {
        this['token'] = token;
        return this;
    }
    public withMentionUsers(mentionUsers: string): UpdateRepoWebHookSubscriptionDto {
        this['mention_users'] = mentionUsers;
        return this;
    }
    public set mentionUsers(mentionUsers: string  | undefined) {
        this['mention_users'] = mentionUsers;
    }
    public get mentionUsers(): string | undefined {
        return this['mention_users'];
    }
    public withMentionPhone(mentionPhone: string): UpdateRepoWebHookSubscriptionDto {
        this['mention_phone'] = mentionPhone;
        return this;
    }
    public set mentionPhone(mentionPhone: string  | undefined) {
        this['mention_phone'] = mentionPhone;
    }
    public get mentionPhone(): string | undefined {
        return this['mention_phone'];
    }
}