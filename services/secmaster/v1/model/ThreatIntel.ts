import { ThreatIntelProperties } from './ThreatIntelProperties';


export class ThreatIntel {
    public id?: string;
    private 'indicator_type'?: string;
    public labels?: string;
    public confidence?: number;
    private 'information_source'?: string;
    public severity?: number;
    public description?: string;
    public modified?: Date;
    private 'valid_from'?: string;
    private 'valid_until'?: string;
    public properties?: ThreatIntelProperties;
    public constructor(id?: string, informationSource?: string, description?: string) { 
        this['id'] = id;
        this['information_source'] = informationSource;
        this['description'] = description;
    }
    public withId(id: string): ThreatIntel {
        this['id'] = id;
        return this;
    }
    public withIndicatorType(indicatorType: string): ThreatIntel {
        this['indicator_type'] = indicatorType;
        return this;
    }
    public set indicatorType(indicatorType: string  | undefined) {
        this['indicator_type'] = indicatorType;
    }
    public get indicatorType(): string | undefined {
        return this['indicator_type'];
    }
    public withLabels(labels: string): ThreatIntel {
        this['labels'] = labels;
        return this;
    }
    public withConfidence(confidence: number): ThreatIntel {
        this['confidence'] = confidence;
        return this;
    }
    public withInformationSource(informationSource: string): ThreatIntel {
        this['information_source'] = informationSource;
        return this;
    }
    public set informationSource(informationSource: string  | undefined) {
        this['information_source'] = informationSource;
    }
    public get informationSource(): string | undefined {
        return this['information_source'];
    }
    public withSeverity(severity: number): ThreatIntel {
        this['severity'] = severity;
        return this;
    }
    public withDescription(description: string): ThreatIntel {
        this['description'] = description;
        return this;
    }
    public withModified(modified: Date): ThreatIntel {
        this['modified'] = modified;
        return this;
    }
    public withValidFrom(validFrom: string): ThreatIntel {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string  | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom(): string | undefined {
        return this['valid_from'];
    }
    public withValidUntil(validUntil: string): ThreatIntel {
        this['valid_until'] = validUntil;
        return this;
    }
    public set validUntil(validUntil: string  | undefined) {
        this['valid_until'] = validUntil;
    }
    public get validUntil(): string | undefined {
        return this['valid_until'];
    }
    public withProperties(properties: ThreatIntelProperties): ThreatIntel {
        this['properties'] = properties;
        return this;
    }
}