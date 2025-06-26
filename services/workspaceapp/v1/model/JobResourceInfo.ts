import { RelativeResource } from './RelativeResource';


export class JobResourceInfo {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'cloud_service_type'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'spec_type'?: { [key: string]: object; };
    private 'spec_size'?: number;
    public measure?: number;
    private 'processed_time'?: Date;
    private 'is_main_resource'?: number;
    private 'main_resources'?: Array<RelativeResource>;
    private 'extend_params'?: string;
    private 'old_resource_id'?: string;
    private 'old_cloud_service_type'?: string;
    private 'old_resource_type'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): JobResourceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): JobResourceInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withCloudServiceType(cloudServiceType: string): JobResourceInfo {
        this['cloud_service_type'] = cloudServiceType;
        return this;
    }
    public set cloudServiceType(cloudServiceType: string  | undefined) {
        this['cloud_service_type'] = cloudServiceType;
    }
    public get cloudServiceType(): string | undefined {
        return this['cloud_service_type'];
    }
    public withResourceType(resourceType: string): JobResourceInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): JobResourceInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withSpecType(specType: { [key: string]: object; }): JobResourceInfo {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: { [key: string]: object; }  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): { [key: string]: object; } | undefined {
        return this['spec_type'];
    }
    public withSpecSize(specSize: number): JobResourceInfo {
        this['spec_size'] = specSize;
        return this;
    }
    public set specSize(specSize: number  | undefined) {
        this['spec_size'] = specSize;
    }
    public get specSize(): number | undefined {
        return this['spec_size'];
    }
    public withMeasure(measure: number): JobResourceInfo {
        this['measure'] = measure;
        return this;
    }
    public withProcessedTime(processedTime: Date): JobResourceInfo {
        this['processed_time'] = processedTime;
        return this;
    }
    public set processedTime(processedTime: Date  | undefined) {
        this['processed_time'] = processedTime;
    }
    public get processedTime(): Date | undefined {
        return this['processed_time'];
    }
    public withIsMainResource(isMainResource: number): JobResourceInfo {
        this['is_main_resource'] = isMainResource;
        return this;
    }
    public set isMainResource(isMainResource: number  | undefined) {
        this['is_main_resource'] = isMainResource;
    }
    public get isMainResource(): number | undefined {
        return this['is_main_resource'];
    }
    public withMainResources(mainResources: Array<RelativeResource>): JobResourceInfo {
        this['main_resources'] = mainResources;
        return this;
    }
    public set mainResources(mainResources: Array<RelativeResource>  | undefined) {
        this['main_resources'] = mainResources;
    }
    public get mainResources(): Array<RelativeResource> | undefined {
        return this['main_resources'];
    }
    public withExtendParams(extendParams: string): JobResourceInfo {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: string  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): string | undefined {
        return this['extend_params'];
    }
    public withOldResourceId(oldResourceId: string): JobResourceInfo {
        this['old_resource_id'] = oldResourceId;
        return this;
    }
    public set oldResourceId(oldResourceId: string  | undefined) {
        this['old_resource_id'] = oldResourceId;
    }
    public get oldResourceId(): string | undefined {
        return this['old_resource_id'];
    }
    public withOldCloudServiceType(oldCloudServiceType: string): JobResourceInfo {
        this['old_cloud_service_type'] = oldCloudServiceType;
        return this;
    }
    public set oldCloudServiceType(oldCloudServiceType: string  | undefined) {
        this['old_cloud_service_type'] = oldCloudServiceType;
    }
    public get oldCloudServiceType(): string | undefined {
        return this['old_cloud_service_type'];
    }
    public withOldResourceType(oldResourceType: string): JobResourceInfo {
        this['old_resource_type'] = oldResourceType;
        return this;
    }
    public set oldResourceType(oldResourceType: string  | undefined) {
        this['old_resource_type'] = oldResourceType;
    }
    public get oldResourceType(): string | undefined {
        return this['old_resource_type'];
    }
}