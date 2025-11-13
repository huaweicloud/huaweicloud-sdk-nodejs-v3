import { Subscription4InstanceInfo } from './Subscription4InstanceInfo';
import { Subscription4PublicationInfo } from './Subscription4PublicationInfo';
import { UsedJobSchedule } from './UsedJobSchedule';


export class ListSubscriptionInfo {
    public id?: string;
    public status?: string;
    private 'publication_id'?: string;
    private 'publication_name'?: string;
    private 'is_cloud'?: boolean;
    private 'subscription_database'?: string;
    private 'subscription_type'?: string;
    private 'publication_subscription'?: Subscription4PublicationInfo;
    private 'local_subscription'?: Subscription4InstanceInfo;
    private 'job_schedule'?: UsedJobSchedule;
    public constructor() { 
    }
    public withId(id: string): ListSubscriptionInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ListSubscriptionInfo {
        this['status'] = status;
        return this;
    }
    public withPublicationId(publicationId: string): ListSubscriptionInfo {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
    public withPublicationName(publicationName: string): ListSubscriptionInfo {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
    public withIsCloud(isCloud: boolean): ListSubscriptionInfo {
        this['is_cloud'] = isCloud;
        return this;
    }
    public set isCloud(isCloud: boolean  | undefined) {
        this['is_cloud'] = isCloud;
    }
    public get isCloud(): boolean | undefined {
        return this['is_cloud'];
    }
    public withSubscriptionDatabase(subscriptionDatabase: string): ListSubscriptionInfo {
        this['subscription_database'] = subscriptionDatabase;
        return this;
    }
    public set subscriptionDatabase(subscriptionDatabase: string  | undefined) {
        this['subscription_database'] = subscriptionDatabase;
    }
    public get subscriptionDatabase(): string | undefined {
        return this['subscription_database'];
    }
    public withSubscriptionType(subscriptionType: string): ListSubscriptionInfo {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withPublicationSubscription(publicationSubscription: Subscription4PublicationInfo): ListSubscriptionInfo {
        this['publication_subscription'] = publicationSubscription;
        return this;
    }
    public set publicationSubscription(publicationSubscription: Subscription4PublicationInfo  | undefined) {
        this['publication_subscription'] = publicationSubscription;
    }
    public get publicationSubscription(): Subscription4PublicationInfo | undefined {
        return this['publication_subscription'];
    }
    public withLocalSubscription(localSubscription: Subscription4InstanceInfo): ListSubscriptionInfo {
        this['local_subscription'] = localSubscription;
        return this;
    }
    public set localSubscription(localSubscription: Subscription4InstanceInfo  | undefined) {
        this['local_subscription'] = localSubscription;
    }
    public get localSubscription(): Subscription4InstanceInfo | undefined {
        return this['local_subscription'];
    }
    public withJobSchedule(jobSchedule: UsedJobSchedule): ListSubscriptionInfo {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: UsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): UsedJobSchedule | undefined {
        return this['job_schedule'];
    }
}