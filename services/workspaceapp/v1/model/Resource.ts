import { AddVolumes } from './AddVolumes';
import { CreateServices } from './CreateServices';


export class Resource {
    private 'add_volumes'?: AddVolumes;
    private 'cloud_service_console_url'?: string;
    private 'create_services'?: CreateServices;
    private 'is_auto_renew'?: number;
    private 'period_num'?: number;
    private 'period_type'?: number;
    private 'subscription_num'?: number;
    public constructor(createServices?: CreateServices, subscriptionNum?: number) { 
        this['create_services'] = createServices;
        this['subscription_num'] = subscriptionNum;
    }
    public withAddVolumes(addVolumes: AddVolumes): Resource {
        this['add_volumes'] = addVolumes;
        return this;
    }
    public set addVolumes(addVolumes: AddVolumes  | undefined) {
        this['add_volumes'] = addVolumes;
    }
    public get addVolumes(): AddVolumes | undefined {
        return this['add_volumes'];
    }
    public withCloudServiceConsoleUrl(cloudServiceConsoleUrl: string): Resource {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
        return this;
    }
    public set cloudServiceConsoleUrl(cloudServiceConsoleUrl: string  | undefined) {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
    }
    public get cloudServiceConsoleUrl(): string | undefined {
        return this['cloud_service_console_url'];
    }
    public withCreateServices(createServices: CreateServices): Resource {
        this['create_services'] = createServices;
        return this;
    }
    public set createServices(createServices: CreateServices  | undefined) {
        this['create_services'] = createServices;
    }
    public get createServices(): CreateServices | undefined {
        return this['create_services'];
    }
    public withIsAutoRenew(isAutoRenew: number): Resource {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withPeriodNum(periodNum: number): Resource {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodType(periodType: number): Resource {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withSubscriptionNum(subscriptionNum: number): Resource {
        this['subscription_num'] = subscriptionNum;
        return this;
    }
    public set subscriptionNum(subscriptionNum: number  | undefined) {
        this['subscription_num'] = subscriptionNum;
    }
    public get subscriptionNum(): number | undefined {
        return this['subscription_num'];
    }
}