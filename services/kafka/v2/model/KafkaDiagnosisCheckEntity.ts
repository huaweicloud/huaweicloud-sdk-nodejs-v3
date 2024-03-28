

export class KafkaDiagnosisCheckEntity {
    public name?: string;
    public reason?: string;
    public success?: boolean;
    public constructor(name?: string, reason?: string, success?: boolean) { 
        this['name'] = name;
        this['reason'] = reason;
        this['success'] = success;
    }
    public withName(name: string): KafkaDiagnosisCheckEntity {
        this['name'] = name;
        return this;
    }
    public withReason(reason: string): KafkaDiagnosisCheckEntity {
        this['reason'] = reason;
        return this;
    }
    public withSuccess(success: boolean): KafkaDiagnosisCheckEntity {
        this['success'] = success;
        return this;
    }
}