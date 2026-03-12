

export class Authentification {
    private 'record_name'?: string;
    private 'record_type'?: string;
    private 'record_value'?: string;
    public domain?: string;
    public constructor() { 
    }
    public withRecordName(recordName: string): Authentification {
        this['record_name'] = recordName;
        return this;
    }
    public set recordName(recordName: string  | undefined) {
        this['record_name'] = recordName;
    }
    public get recordName(): string | undefined {
        return this['record_name'];
    }
    public withRecordType(recordType: string): Authentification {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): string | undefined {
        return this['record_type'];
    }
    public withRecordValue(recordValue: string): Authentification {
        this['record_value'] = recordValue;
        return this;
    }
    public set recordValue(recordValue: string  | undefined) {
        this['record_value'] = recordValue;
    }
    public get recordValue(): string | undefined {
        return this['record_value'];
    }
    public withDomain(domain: string): Authentification {
        this['domain'] = domain;
        return this;
    }
}