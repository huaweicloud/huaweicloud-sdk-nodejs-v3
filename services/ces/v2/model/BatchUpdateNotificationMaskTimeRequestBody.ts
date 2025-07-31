import { MaskType } from './MaskType';


export class BatchUpdateNotificationMaskTimeRequestBody {
    private 'notification_mask_ids'?: Array<string>;
    private 'mask_type'?: MaskType;
    private 'start_date'?: string;
    private 'start_time'?: string;
    private 'end_date'?: string;
    private 'end_time'?: string;
    private 'effective_timezone'?: string;
    public constructor(notificationMaskIds?: Array<string>, maskType?: MaskType) { 
        this['notification_mask_ids'] = notificationMaskIds;
        this['mask_type'] = maskType;
    }
    public withNotificationMaskIds(notificationMaskIds: Array<string>): BatchUpdateNotificationMaskTimeRequestBody {
        this['notification_mask_ids'] = notificationMaskIds;
        return this;
    }
    public set notificationMaskIds(notificationMaskIds: Array<string>  | undefined) {
        this['notification_mask_ids'] = notificationMaskIds;
    }
    public get notificationMaskIds(): Array<string> | undefined {
        return this['notification_mask_ids'];
    }
    public withMaskType(maskType: MaskType): BatchUpdateNotificationMaskTimeRequestBody {
        this['mask_type'] = maskType;
        return this;
    }
    public set maskType(maskType: MaskType  | undefined) {
        this['mask_type'] = maskType;
    }
    public get maskType(): MaskType | undefined {
        return this['mask_type'];
    }
    public withStartDate(startDate: string): BatchUpdateNotificationMaskTimeRequestBody {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withStartTime(startTime: string): BatchUpdateNotificationMaskTimeRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndDate(endDate: string): BatchUpdateNotificationMaskTimeRequestBody {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withEndTime(endTime: string): BatchUpdateNotificationMaskTimeRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEffectiveTimezone(effectiveTimezone: string): BatchUpdateNotificationMaskTimeRequestBody {
        this['effective_timezone'] = effectiveTimezone;
        return this;
    }
    public set effectiveTimezone(effectiveTimezone: string  | undefined) {
        this['effective_timezone'] = effectiveTimezone;
    }
    public get effectiveTimezone(): string | undefined {
        return this['effective_timezone'];
    }
}