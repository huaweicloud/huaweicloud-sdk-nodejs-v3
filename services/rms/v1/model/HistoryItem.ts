import { ResourceEntity } from './ResourceEntity';
import { ResourceRelation } from './ResourceRelation';


export class HistoryItem {
    private 'domain_id'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'capture_time'?: string | undefined;
    public status?: string;
    public relations?: Array<ResourceRelation>;
    public resource?: ResourceEntity;
    public constructor() { 
    }
    public withDomainId(domainId: string): HistoryItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withResourceId(resourceId: string): HistoryItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): HistoryItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withCaptureTime(captureTime: string): HistoryItem {
        this['capture_time'] = captureTime;
        return this;
    }
    public set captureTime(captureTime: string | undefined) {
        this['capture_time'] = captureTime;
    }
    public get captureTime() {
        return this['capture_time'];
    }
    public withStatus(status: string): HistoryItem {
        this['status'] = status;
        return this;
    }
    public withRelations(relations: Array<ResourceRelation>): HistoryItem {
        this['relations'] = relations;
        return this;
    }
    public withResource(resource: ResourceEntity): HistoryItem {
        this['resource'] = resource;
        return this;
    }
}