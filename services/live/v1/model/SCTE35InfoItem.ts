

export class SCTE35InfoItem {
    public type?: SCTE35InfoItemTypeEnum | string;
    private 'event_id'?: number;
    private 'start_date'?: number;
    public duration?: number;
    private 'segmentation_type'?: SCTE35InfoItemSegmentationTypeEnum | string;
    private 'base64_data'?: string;
    private 'raw_splice'?: string;
    public constructor(type?: string, eventId?: number, startDate?: number, duration?: number, segmentationType?: string, base64Data?: string, rawSplice?: string) { 
        this['type'] = type;
        this['event_id'] = eventId;
        this['start_date'] = startDate;
        this['duration'] = duration;
        this['segmentation_type'] = segmentationType;
        this['base64_data'] = base64Data;
        this['raw_splice'] = rawSplice;
    }
    public withType(type: SCTE35InfoItemTypeEnum | string): SCTE35InfoItem {
        this['type'] = type;
        return this;
    }
    public withEventId(eventId: number): SCTE35InfoItem {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: number  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): number | undefined {
        return this['event_id'];
    }
    public withStartDate(startDate: number): SCTE35InfoItem {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withDuration(duration: number): SCTE35InfoItem {
        this['duration'] = duration;
        return this;
    }
    public withSegmentationType(segmentationType: SCTE35InfoItemSegmentationTypeEnum | string): SCTE35InfoItem {
        this['segmentation_type'] = segmentationType;
        return this;
    }
    public set segmentationType(segmentationType: SCTE35InfoItemSegmentationTypeEnum | string  | undefined) {
        this['segmentation_type'] = segmentationType;
    }
    public get segmentationType(): SCTE35InfoItemSegmentationTypeEnum | string | undefined {
        return this['segmentation_type'];
    }
    public withBase64Data(base64Data: string): SCTE35InfoItem {
        this['base64_data'] = base64Data;
        return this;
    }
    public set base64Data(base64Data: string  | undefined) {
        this['base64_data'] = base64Data;
    }
    public get base64Data(): string | undefined {
        return this['base64_data'];
    }
    public withRawSplice(rawSplice: string): SCTE35InfoItem {
        this['raw_splice'] = rawSplice;
        return this;
    }
    public set rawSplice(rawSplice: string  | undefined) {
        this['raw_splice'] = rawSplice;
    }
    public get rawSplice(): string | undefined {
        return this['raw_splice'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SCTE35InfoItemTypeEnum {
    SPLICE_INSERT = 'splice_insert',
    TIME_SIGNAL = 'time_signal'
}
/**
    * @export
    * @enum {string}
    */
export enum SCTE35InfoItemSegmentationTypeEnum {
    Minus = '-',
    PROVIDERADVERTISEMENTSTART = 'ProviderAdvertisementStart',
    PROVIDERADVERTISEMENTEND = 'ProviderAdvertisementEnd',
    DISTRIBUTORADVERTISEMENTSTART = 'DistributorAdvertisementStart',
    DISTRIBUTORADVERTISEMENTEND = 'DistributorAdvertisementEnd',
    PROVIDERPLACEMENTOPPORTUNITYSTART = 'ProviderPlacementOpportunityStart',
    PROVIDERPLACEMENTOPPORTUNITYEND = 'ProviderPlacementOpportunityEnd',
    DISTRIBUTORPLACEMENTOPPORTUNITYSTART = 'DistributorPlacementOpportunityStart',
    DISTRIBUTORPLACEMENTOPPORTUNITYEND = 'DistributorPlacementOpportunityEnd'
}
