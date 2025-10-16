import { CreateSubscription4InstanceInfo } from './CreateSubscription4InstanceInfo';
import { CreateSubscription4PublicationInfo } from './CreateSubscription4PublicationInfo';
import { CreateSubscriptionInfoInitializeInfo } from './CreateSubscriptionInfoInitializeInfo';
import { OperateUsedJobSchedule } from './OperateUsedJobSchedule';


export class CreateSubscriptionInfo {
    private 'subscription_database'?: string;
    private 'subscription_type'?: string;
    private 'initialize_at'?: string;
    private 'initialize_info'?: CreateSubscriptionInfoInitializeInfo;
    private 'independent_agent'?: boolean;
    private 'job_schedule'?: OperateUsedJobSchedule;
    private 'bak_file_name'?: string;
    private 'bak_bucket_name'?: string;
    private 'publication_subscription'?: CreateSubscription4PublicationInfo;
    private 'local_subscription'?: CreateSubscription4InstanceInfo;
    public constructor(subscriptionDatabase?: string, subscriptionType?: string, initializeAt?: string, jobSchedule?: OperateUsedJobSchedule) { 
        this['subscription_database'] = subscriptionDatabase;
        this['subscription_type'] = subscriptionType;
        this['initialize_at'] = initializeAt;
        this['job_schedule'] = jobSchedule;
    }
    public withSubscriptionDatabase(subscriptionDatabase: string): CreateSubscriptionInfo {
        this['subscription_database'] = subscriptionDatabase;
        return this;
    }
    public set subscriptionDatabase(subscriptionDatabase: string  | undefined) {
        this['subscription_database'] = subscriptionDatabase;
    }
    public get subscriptionDatabase(): string | undefined {
        return this['subscription_database'];
    }
    public withSubscriptionType(subscriptionType: string): CreateSubscriptionInfo {
        this['subscription_type'] = subscriptionType;
        return this;
    }
    public set subscriptionType(subscriptionType: string  | undefined) {
        this['subscription_type'] = subscriptionType;
    }
    public get subscriptionType(): string | undefined {
        return this['subscription_type'];
    }
    public withInitializeAt(initializeAt: string): CreateSubscriptionInfo {
        this['initialize_at'] = initializeAt;
        return this;
    }
    public set initializeAt(initializeAt: string  | undefined) {
        this['initialize_at'] = initializeAt;
    }
    public get initializeAt(): string | undefined {
        return this['initialize_at'];
    }
    public withInitializeInfo(initializeInfo: CreateSubscriptionInfoInitializeInfo): CreateSubscriptionInfo {
        this['initialize_info'] = initializeInfo;
        return this;
    }
    public set initializeInfo(initializeInfo: CreateSubscriptionInfoInitializeInfo  | undefined) {
        this['initialize_info'] = initializeInfo;
    }
    public get initializeInfo(): CreateSubscriptionInfoInitializeInfo | undefined {
        return this['initialize_info'];
    }
    public withIndependentAgent(independentAgent: boolean): CreateSubscriptionInfo {
        this['independent_agent'] = independentAgent;
        return this;
    }
    public set independentAgent(independentAgent: boolean  | undefined) {
        this['independent_agent'] = independentAgent;
    }
    public get independentAgent(): boolean | undefined {
        return this['independent_agent'];
    }
    public withJobSchedule(jobSchedule: OperateUsedJobSchedule): CreateSubscriptionInfo {
        this['job_schedule'] = jobSchedule;
        return this;
    }
    public set jobSchedule(jobSchedule: OperateUsedJobSchedule  | undefined) {
        this['job_schedule'] = jobSchedule;
    }
    public get jobSchedule(): OperateUsedJobSchedule | undefined {
        return this['job_schedule'];
    }
    public withBakFileName(bakFileName: string): CreateSubscriptionInfo {
        this['bak_file_name'] = bakFileName;
        return this;
    }
    public set bakFileName(bakFileName: string  | undefined) {
        this['bak_file_name'] = bakFileName;
    }
    public get bakFileName(): string | undefined {
        return this['bak_file_name'];
    }
    public withBakBucketName(bakBucketName: string): CreateSubscriptionInfo {
        this['bak_bucket_name'] = bakBucketName;
        return this;
    }
    public set bakBucketName(bakBucketName: string  | undefined) {
        this['bak_bucket_name'] = bakBucketName;
    }
    public get bakBucketName(): string | undefined {
        return this['bak_bucket_name'];
    }
    public withPublicationSubscription(publicationSubscription: CreateSubscription4PublicationInfo): CreateSubscriptionInfo {
        this['publication_subscription'] = publicationSubscription;
        return this;
    }
    public set publicationSubscription(publicationSubscription: CreateSubscription4PublicationInfo  | undefined) {
        this['publication_subscription'] = publicationSubscription;
    }
    public get publicationSubscription(): CreateSubscription4PublicationInfo | undefined {
        return this['publication_subscription'];
    }
    public withLocalSubscription(localSubscription: CreateSubscription4InstanceInfo): CreateSubscriptionInfo {
        this['local_subscription'] = localSubscription;
        return this;
    }
    public set localSubscription(localSubscription: CreateSubscription4InstanceInfo  | undefined) {
        this['local_subscription'] = localSubscription;
    }
    public get localSubscription(): CreateSubscription4InstanceInfo | undefined {
        return this['local_subscription'];
    }
}