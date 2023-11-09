

export class AlertAlertType {
    public category?: string;
    private 'alert_type'?: string;
    public constructor() { 
    }
    public withCategory(category: string): AlertAlertType {
        this['category'] = category;
        return this;
    }
    public withAlertType(alertType: string): AlertAlertType {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: string  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): string | undefined {
        return this['alert_type'];
    }
}