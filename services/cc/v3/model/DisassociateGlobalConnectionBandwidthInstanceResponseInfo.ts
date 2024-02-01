import { GcbProjectId } from './GcbProjectId';
import { GcbRegionId } from './GcbRegionId';
import { GcbResourceId } from './GcbResourceId';
import { GcbResourceType } from './GcbResourceType';


export class DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public result?: DisassociateGlobalConnectionBandwidthInstanceResponseInfoResultEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withRegionId(regionId: string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResult(result: DisassociateGlobalConnectionBandwidthInstanceResponseInfoResultEnum | string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): DisassociateGlobalConnectionBandwidthInstanceResponseInfo {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisassociateGlobalConnectionBandwidthInstanceResponseInfoResultEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
