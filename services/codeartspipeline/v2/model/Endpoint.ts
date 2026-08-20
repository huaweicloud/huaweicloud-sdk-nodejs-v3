import { EndpointCreatorInfo } from './EndpointCreatorInfo';


export class Endpoint {
    private 'created_by'?: EndpointCreatorInfo;
    public data?: object;
    private 'module_id'?: string;
    public name?: string;
    private 'project_uuid'?: string;
    private 'region_name'?: string;
    public url?: string;
    public uuid?: string;
    public constructor() { 
    }
    public withCreatedBy(createdBy: EndpointCreatorInfo): Endpoint {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: EndpointCreatorInfo  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): EndpointCreatorInfo | undefined {
        return this['created_by'];
    }
    public withData(data: object): Endpoint {
        this['data'] = data;
        return this;
    }
    public withModuleId(moduleId: string): Endpoint {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): Endpoint {
        this['name'] = name;
        return this;
    }
    public withProjectUuid(projectUuid: string): Endpoint {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRegionName(regionName: string): Endpoint {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withUrl(url: string): Endpoint {
        this['url'] = url;
        return this;
    }
    public withUuid(uuid: string): Endpoint {
        this['uuid'] = uuid;
        return this;
    }
}