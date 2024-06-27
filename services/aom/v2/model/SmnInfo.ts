

export class SmnInfo {
    private 'smn_notified_content'?: string;
    private 'smn_subscription_status'?: number;
    private 'smn_subscription_type'?: string;
    public constructor() { 
    }
    public withSmnNotifiedContent(smnNotifiedContent: string): SmnInfo {
        this['smn_notified_content'] = smnNotifiedContent;
        return this;
    }
    public set smnNotifiedContent(smnNotifiedContent: string  | undefined) {
        this['smn_notified_content'] = smnNotifiedContent;
    }
    public get smnNotifiedContent(): string | undefined {
        return this['smn_notified_content'];
    }
    public withSmnSubscriptionStatus(smnSubscriptionStatus: number): SmnInfo {
        this['smn_subscription_status'] = smnSubscriptionStatus;
        return this;
    }
    public set smnSubscriptionStatus(smnSubscriptionStatus: number  | undefined) {
        this['smn_subscription_status'] = smnSubscriptionStatus;
    }
    public get smnSubscriptionStatus(): number | undefined {
        return this['smn_subscription_status'];
    }
    public withSmnSubscriptionType(smnSubscriptionType: string): SmnInfo {
        this['smn_subscription_type'] = smnSubscriptionType;
        return this;
    }
    public set smnSubscriptionType(smnSubscriptionType: string  | undefined) {
        this['smn_subscription_type'] = smnSubscriptionType;
    }
    public get smnSubscriptionType(): string | undefined {
        return this['smn_subscription_type'];
    }
}