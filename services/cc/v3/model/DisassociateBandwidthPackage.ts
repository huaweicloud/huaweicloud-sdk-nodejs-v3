import { ResourceId } from './ResourceId';
import { ResourceType } from './ResourceType';


export class DisassociateBandwidthPackage {
    private 'resource_id'?: string;
    private 'resource_type'?: DisassociateBandwidthPackageResourceTypeEnum | string;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): DisassociateBandwidthPackage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: DisassociateBandwidthPackageResourceTypeEnum | string): DisassociateBandwidthPackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DisassociateBandwidthPackageResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DisassociateBandwidthPackageResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisassociateBandwidthPackageResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection'
}
