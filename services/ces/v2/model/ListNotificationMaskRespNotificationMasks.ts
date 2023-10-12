import { MaskStatus } from './MaskStatus';
import { MaskType } from './MaskType';
import { PoliciesInListResp } from './PoliciesInListResp';
import { RelationType } from './RelationType';
import { ResourceCategory } from './ResourceCategory';


export class ListNotificationMaskRespNotificationMasks {
    private 'notification_mask_id'?: string;
    private 'mask_name'?: string;
    private 'relation_type'?: RelationType;
    private 'relation_id'?: string;
    public resources?: Array<ResourceCategory>;
    private 'mask_status'?: MaskStatus;
    private 'mask_type'?: MaskType;
    private 'start_date'?: string;
    private 'start_time'?: string;
    private 'end_date'?: string;
    private 'end_time'?: string;
    public policies?: Array<PoliciesInListResp>;
    public constructor(notificationMaskId?: string, relationType?: RelationType, maskStatus?: MaskStatus, maskType?: MaskType) { 
        this['notification_mask_id'] = notificationMaskId;
        this['relation_type'] = relationType;
        this['mask_status'] = maskStatus;
        this['mask_type'] = maskType;
    }
    public withNotificationMaskId(notificationMaskId: string): ListNotificationMaskRespNotificationMasks {
        this['notification_mask_id'] = notificationMaskId;
        return this;
    }
    public set notificationMaskId(notificationMaskId: string  | undefined) {
        this['notification_mask_id'] = notificationMaskId;
    }
    public get notificationMaskId(): string | undefined {
        return this['notification_mask_id'];
    }
    public withMaskName(maskName: string): ListNotificationMaskRespNotificationMasks {
        this['mask_name'] = maskName;
        return this;
    }
    public set maskName(maskName: string  | undefined) {
        this['mask_name'] = maskName;
    }
    public get maskName(): string | undefined {
        return this['mask_name'];
    }
    public withRelationType(relationType: RelationType): ListNotificationMaskRespNotificationMasks {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: RelationType  | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType(): RelationType | undefined {
        return this['relation_type'];
    }
    public withRelationId(relationId: string): ListNotificationMaskRespNotificationMasks {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: string  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): string | undefined {
        return this['relation_id'];
    }
    public withResources(resources: Array<ResourceCategory>): ListNotificationMaskRespNotificationMasks {
        this['resources'] = resources;
        return this;
    }
    public withMaskStatus(maskStatus: MaskStatus): ListNotificationMaskRespNotificationMasks {
        this['mask_status'] = maskStatus;
        return this;
    }
    public set maskStatus(maskStatus: MaskStatus  | undefined) {
        this['mask_status'] = maskStatus;
    }
    public get maskStatus(): MaskStatus | undefined {
        return this['mask_status'];
    }
    public withMaskType(maskType: MaskType): ListNotificationMaskRespNotificationMasks {
        this['mask_type'] = maskType;
        return this;
    }
    public set maskType(maskType: MaskType  | undefined) {
        this['mask_type'] = maskType;
    }
    public get maskType(): MaskType | undefined {
        return this['mask_type'];
    }
    public withStartDate(startDate: string): ListNotificationMaskRespNotificationMasks {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withStartTime(startTime: string): ListNotificationMaskRespNotificationMasks {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndDate(endDate: string): ListNotificationMaskRespNotificationMasks {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withEndTime(endTime: string): ListNotificationMaskRespNotificationMasks {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withPolicies(policies: Array<PoliciesInListResp>): ListNotificationMaskRespNotificationMasks {
        this['policies'] = policies;
        return this;
    }
}