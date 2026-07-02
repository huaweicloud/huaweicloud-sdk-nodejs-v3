import { ListRelationType } from './ListRelationType';
import { ResourceDimension } from './ResourceDimension';


export class ListNotificationMaskRequestBody {
    private 'relation_type'?: ListRelationType;
    private 'relation_ids'?: Array<string>;
    private 'metric_name'?: string;
    private 'resource_level'?: ListNotificationMaskRequestBodyResourceLevelEnum | string;
    private 'mask_id'?: string;
    private 'mask_name'?: string;
    private 'mask_status'?: ListNotificationMaskRequestBodyMaskStatusEnum | string;
    private 'resource_id'?: string;
    public namespace?: string;
    public dimensions?: Array<ResourceDimension>;
    public constructor(relationType?: ListRelationType, relationIds?: Array<string>) { 
        this['relation_type'] = relationType;
        this['relation_ids'] = relationIds;
    }
    public withRelationType(relationType: ListRelationType): ListNotificationMaskRequestBody {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: ListRelationType  | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType(): ListRelationType | undefined {
        return this['relation_type'];
    }
    public withRelationIds(relationIds: Array<string>): ListNotificationMaskRequestBody {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withMetricName(metricName: string): ListNotificationMaskRequestBody {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withResourceLevel(resourceLevel: ListNotificationMaskRequestBodyResourceLevelEnum | string): ListNotificationMaskRequestBody {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ListNotificationMaskRequestBodyResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ListNotificationMaskRequestBodyResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withMaskId(maskId: string): ListNotificationMaskRequestBody {
        this['mask_id'] = maskId;
        return this;
    }
    public set maskId(maskId: string  | undefined) {
        this['mask_id'] = maskId;
    }
    public get maskId(): string | undefined {
        return this['mask_id'];
    }
    public withMaskName(maskName: string): ListNotificationMaskRequestBody {
        this['mask_name'] = maskName;
        return this;
    }
    public set maskName(maskName: string  | undefined) {
        this['mask_name'] = maskName;
    }
    public get maskName(): string | undefined {
        return this['mask_name'];
    }
    public withMaskStatus(maskStatus: ListNotificationMaskRequestBodyMaskStatusEnum | string): ListNotificationMaskRequestBody {
        this['mask_status'] = maskStatus;
        return this;
    }
    public set maskStatus(maskStatus: ListNotificationMaskRequestBodyMaskStatusEnum | string  | undefined) {
        this['mask_status'] = maskStatus;
    }
    public get maskStatus(): ListNotificationMaskRequestBodyMaskStatusEnum | string | undefined {
        return this['mask_status'];
    }
    public withResourceId(resourceId: string): ListNotificationMaskRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withNamespace(namespace: string): ListNotificationMaskRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<ResourceDimension>): ListNotificationMaskRequestBody {
        this['dimensions'] = dimensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNotificationMaskRequestBodyResourceLevelEnum {
    DIMENSION = 'dimension',
    PRODUCT = 'product'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNotificationMaskRequestBodyMaskStatusEnum {
    MASK_EFFECTIVE = 'MASK_EFFECTIVE',
    MASK_INEFFECTIVE = 'MASK_INEFFECTIVE'
}
