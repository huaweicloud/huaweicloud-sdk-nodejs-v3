import { IsapAlertSeverity } from './IsapAlertSeverity';


export class IsapJobOutputSetting {
    private 'alert_custom_properties'?: { [key: string]: string; };
    private 'alert_description'?: string;
    private 'alert_grouping'?: boolean;
    private 'alert_mapping'?: { [key: string]: string; };
    private 'alert_name'?: string;
    private 'alert_remediation'?: string;
    private 'alert_severity'?: IsapAlertSeverity;
    private 'alert_suppression'?: boolean;
    private 'alert_type'?: { [key: string]: string; };
    private 'entity_extraction'?: { [key: string]: string; };
    private 'field_mapping'?: { [key: string]: string; };
    public constructor() { 
    }
    public withAlertCustomProperties(alertCustomProperties: { [key: string]: string; }): IsapJobOutputSetting {
        this['alert_custom_properties'] = alertCustomProperties;
        return this;
    }
    public set alertCustomProperties(alertCustomProperties: { [key: string]: string; }  | undefined) {
        this['alert_custom_properties'] = alertCustomProperties;
    }
    public get alertCustomProperties(): { [key: string]: string; } | undefined {
        return this['alert_custom_properties'];
    }
    public withAlertDescription(alertDescription: string): IsapJobOutputSetting {
        this['alert_description'] = alertDescription;
        return this;
    }
    public set alertDescription(alertDescription: string  | undefined) {
        this['alert_description'] = alertDescription;
    }
    public get alertDescription(): string | undefined {
        return this['alert_description'];
    }
    public withAlertGrouping(alertGrouping: boolean): IsapJobOutputSetting {
        this['alert_grouping'] = alertGrouping;
        return this;
    }
    public set alertGrouping(alertGrouping: boolean  | undefined) {
        this['alert_grouping'] = alertGrouping;
    }
    public get alertGrouping(): boolean | undefined {
        return this['alert_grouping'];
    }
    public withAlertMapping(alertMapping: { [key: string]: string; }): IsapJobOutputSetting {
        this['alert_mapping'] = alertMapping;
        return this;
    }
    public set alertMapping(alertMapping: { [key: string]: string; }  | undefined) {
        this['alert_mapping'] = alertMapping;
    }
    public get alertMapping(): { [key: string]: string; } | undefined {
        return this['alert_mapping'];
    }
    public withAlertName(alertName: string): IsapJobOutputSetting {
        this['alert_name'] = alertName;
        return this;
    }
    public set alertName(alertName: string  | undefined) {
        this['alert_name'] = alertName;
    }
    public get alertName(): string | undefined {
        return this['alert_name'];
    }
    public withAlertRemediation(alertRemediation: string): IsapJobOutputSetting {
        this['alert_remediation'] = alertRemediation;
        return this;
    }
    public set alertRemediation(alertRemediation: string  | undefined) {
        this['alert_remediation'] = alertRemediation;
    }
    public get alertRemediation(): string | undefined {
        return this['alert_remediation'];
    }
    public withAlertSeverity(alertSeverity: IsapAlertSeverity): IsapJobOutputSetting {
        this['alert_severity'] = alertSeverity;
        return this;
    }
    public set alertSeverity(alertSeverity: IsapAlertSeverity  | undefined) {
        this['alert_severity'] = alertSeverity;
    }
    public get alertSeverity(): IsapAlertSeverity | undefined {
        return this['alert_severity'];
    }
    public withAlertSuppression(alertSuppression: boolean): IsapJobOutputSetting {
        this['alert_suppression'] = alertSuppression;
        return this;
    }
    public set alertSuppression(alertSuppression: boolean  | undefined) {
        this['alert_suppression'] = alertSuppression;
    }
    public get alertSuppression(): boolean | undefined {
        return this['alert_suppression'];
    }
    public withAlertType(alertType: { [key: string]: string; }): IsapJobOutputSetting {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: { [key: string]: string; }  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): { [key: string]: string; } | undefined {
        return this['alert_type'];
    }
    public withEntityExtraction(entityExtraction: { [key: string]: string; }): IsapJobOutputSetting {
        this['entity_extraction'] = entityExtraction;
        return this;
    }
    public set entityExtraction(entityExtraction: { [key: string]: string; }  | undefined) {
        this['entity_extraction'] = entityExtraction;
    }
    public get entityExtraction(): { [key: string]: string; } | undefined {
        return this['entity_extraction'];
    }
    public withFieldMapping(fieldMapping: { [key: string]: string; }): IsapJobOutputSetting {
        this['field_mapping'] = fieldMapping;
        return this;
    }
    public set fieldMapping(fieldMapping: { [key: string]: string; }  | undefined) {
        this['field_mapping'] = fieldMapping;
    }
    public get fieldMapping(): { [key: string]: string; } | undefined {
        return this['field_mapping'];
    }
}