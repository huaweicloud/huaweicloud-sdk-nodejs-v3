import { ChangeEventRequestInfo } from './ChangeEventRequestInfo';


export class ChangeEventRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'container_name'?: string;
    private 'container_id'?: string;
    public body?: ChangeEventRequestInfo;
    public constructor() { 
    }
    public withRegion(region: string): ChangeEventRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeEventRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContainerName(containerName: string): ChangeEventRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withContainerId(containerId: string): ChangeEventRequest {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withBody(body: ChangeEventRequestInfo): ChangeEventRequest {
        this['body'] = body;
        return this;
    }
}