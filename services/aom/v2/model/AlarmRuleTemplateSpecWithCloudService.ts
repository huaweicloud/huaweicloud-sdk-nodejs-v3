import { AlarmNotification } from './AlarmNotification';
import { AlarmTemplateSpecItem } from './AlarmTemplateSpecItem';


export class AlarmRuleTemplateSpecWithCloudService {
    private 'related_cloud_service'?: string;
    private 'related_cce_clusters'?: Array<string>;
    private 'related_prometheus_instances'?: Array<string>;
    private 'alarm_notification'?: AlarmNotification;
    private 'alarm_template_spec_items'?: Array<AlarmTemplateSpecItem>;
    public constructor() { 
    }
    public withRelatedCloudService(relatedCloudService: string): AlarmRuleTemplateSpecWithCloudService {
        this['related_cloud_service'] = relatedCloudService;
        return this;
    }
    public set relatedCloudService(relatedCloudService: string  | undefined) {
        this['related_cloud_service'] = relatedCloudService;
    }
    public get relatedCloudService(): string | undefined {
        return this['related_cloud_service'];
    }
    public withRelatedCceClusters(relatedCceClusters: Array<string>): AlarmRuleTemplateSpecWithCloudService {
        this['related_cce_clusters'] = relatedCceClusters;
        return this;
    }
    public set relatedCceClusters(relatedCceClusters: Array<string>  | undefined) {
        this['related_cce_clusters'] = relatedCceClusters;
    }
    public get relatedCceClusters(): Array<string> | undefined {
        return this['related_cce_clusters'];
    }
    public withRelatedPrometheusInstances(relatedPrometheusInstances: Array<string>): AlarmRuleTemplateSpecWithCloudService {
        this['related_prometheus_instances'] = relatedPrometheusInstances;
        return this;
    }
    public set relatedPrometheusInstances(relatedPrometheusInstances: Array<string>  | undefined) {
        this['related_prometheus_instances'] = relatedPrometheusInstances;
    }
    public get relatedPrometheusInstances(): Array<string> | undefined {
        return this['related_prometheus_instances'];
    }
    public withAlarmNotification(alarmNotification: AlarmNotification): AlarmRuleTemplateSpecWithCloudService {
        this['alarm_notification'] = alarmNotification;
        return this;
    }
    public set alarmNotification(alarmNotification: AlarmNotification  | undefined) {
        this['alarm_notification'] = alarmNotification;
    }
    public get alarmNotification(): AlarmNotification | undefined {
        return this['alarm_notification'];
    }
    public withAlarmTemplateSpecItems(alarmTemplateSpecItems: Array<AlarmTemplateSpecItem>): AlarmRuleTemplateSpecWithCloudService {
        this['alarm_template_spec_items'] = alarmTemplateSpecItems;
        return this;
    }
    public set alarmTemplateSpecItems(alarmTemplateSpecItems: Array<AlarmTemplateSpecItem>  | undefined) {
        this['alarm_template_spec_items'] = alarmTemplateSpecItems;
    }
    public get alarmTemplateSpecItems(): Array<AlarmTemplateSpecItem> | undefined {
        return this['alarm_template_spec_items'];
    }
}