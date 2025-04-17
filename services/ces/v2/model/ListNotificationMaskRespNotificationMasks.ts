import { MaskResourceType } from './MaskResourceType';
import { MaskStatus } from './MaskStatus';
import { MaskType } from './MaskType';
import { PoliciesInListResp } from './PoliciesInListResp';
import { ProductMetric } from './ProductMetric';
import { RelationType } from './RelationType';
import { ResourceCategory } from './ResourceCategory';


export class ListNotificationMaskRespNotificationMasks {
    private 'notification_mask_id'?: string;
    private 'mask_name'?: string;
    private 'relation_type'?: RelationType;
    private 'relation_id'?: string;
    private 'resource_type'?: MaskResourceType;
    private 'metric_names'?: Array<string>;
    private 'product_metrics'?: Array<ProductMetric>;
    private 'resource_level'?: ListNotificationMaskRespNotificationMasksResourceLevelEnum | string;
    private 'product_name'?: string;
    public resources?: Array<ResourceCategory>;
    private 'mask_status'?: MaskStatus;
    private 'mask_type'?: MaskType;
    private 'create_time'?: number;
    private 'update_time'?: number;
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
    public withResourceType(resourceType: MaskResourceType): ListNotificationMaskRespNotificationMasks {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: MaskResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): MaskResourceType | undefined {
        return this['resource_type'];
    }
    public withMetricNames(metricNames: Array<string>): ListNotificationMaskRespNotificationMasks {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withProductMetrics(productMetrics: Array<ProductMetric>): ListNotificationMaskRespNotificationMasks {
        this['product_metrics'] = productMetrics;
        return this;
    }
    public set productMetrics(productMetrics: Array<ProductMetric>  | undefined) {
        this['product_metrics'] = productMetrics;
    }
    public get productMetrics(): Array<ProductMetric> | undefined {
        return this['product_metrics'];
    }
    public withResourceLevel(resourceLevel: ListNotificationMaskRespNotificationMasksResourceLevelEnum | string): ListNotificationMaskRespNotificationMasks {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ListNotificationMaskRespNotificationMasksResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ListNotificationMaskRespNotificationMasksResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withProductName(productName: string): ListNotificationMaskRespNotificationMasks {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
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
    public withCreateTime(createTime: number): ListNotificationMaskRespNotificationMasks {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListNotificationMaskRespNotificationMasks {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
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

/**
    * @export
    * @enum {string}
    */
export enum ListNotificationMaskRespNotificationMasksResourceLevelEnum {
    DIMENSION = 'dimension',
    PRODUCT = 'product'
}
