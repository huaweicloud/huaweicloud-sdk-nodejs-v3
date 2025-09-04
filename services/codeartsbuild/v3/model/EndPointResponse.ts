import { EndPointResponseAuthorization } from './EndPointResponseAuthorization';
import { EndPointResponseCreatedBy } from './EndPointResponseCreatedBy';


export class EndPointResponse {
    public authorization?: EndPointResponseAuthorization;
    public uuid?: string;
    public url?: string;
    public name?: string;
    private 'project_uuid'?: string;
    private 'region_name'?: string;
    public data?: object;
    private 'module_id'?: string;
    private 'created_by'?: EndPointResponseCreatedBy;
    public constructor() { 
    }
    public withAuthorization(authorization: EndPointResponseAuthorization): EndPointResponse {
        this['authorization'] = authorization;
        return this;
    }
    public withUuid(uuid: string): EndPointResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withUrl(url: string): EndPointResponse {
        this['url'] = url;
        return this;
    }
    public withName(name: string): EndPointResponse {
        this['name'] = name;
        return this;
    }
    public withProjectUuid(projectUuid: string): EndPointResponse {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRegionName(regionName: string): EndPointResponse {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withData(data: object): EndPointResponse {
        this['data'] = data;
        return this;
    }
    public withModuleId(moduleId: string): EndPointResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withCreatedBy(createdBy: EndPointResponseCreatedBy): EndPointResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: EndPointResponseCreatedBy  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): EndPointResponseCreatedBy | undefined {
        return this['created_by'];
    }
}