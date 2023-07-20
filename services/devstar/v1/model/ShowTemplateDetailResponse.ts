
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateDetailResponse extends SdkResponse {
    public id?: string;
    public title?: string;
    public description?: string;
    private 'region_id'?: string;
    private 'repostory_id'?: string;
    private 'code_url'?: string;
    private 'ssh_url'?: string;
    private 'project_uuid'?: string;
    public status?: number;
    public properties?: Array<object>;
    public dependencies?: Array<object>;
    private 'dependency_type'?: string;
    public deployment?: object;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowTemplateDetailResponse {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): ShowTemplateDetailResponse {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ShowTemplateDetailResponse {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): ShowTemplateDetailResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRepostoryId(repostoryId: string): ShowTemplateDetailResponse {
        this['repostory_id'] = repostoryId;
        return this;
    }
    public set repostoryId(repostoryId: string  | undefined) {
        this['repostory_id'] = repostoryId;
    }
    public get repostoryId(): string | undefined {
        return this['repostory_id'];
    }
    public withCodeUrl(codeUrl: string): ShowTemplateDetailResponse {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withSshUrl(sshUrl: string): ShowTemplateDetailResponse {
        this['ssh_url'] = sshUrl;
        return this;
    }
    public set sshUrl(sshUrl: string  | undefined) {
        this['ssh_url'] = sshUrl;
    }
    public get sshUrl(): string | undefined {
        return this['ssh_url'];
    }
    public withProjectUuid(projectUuid: string): ShowTemplateDetailResponse {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withStatus(status: number): ShowTemplateDetailResponse {
        this['status'] = status;
        return this;
    }
    public withProperties(properties: Array<object>): ShowTemplateDetailResponse {
        this['properties'] = properties;
        return this;
    }
    public withDependencies(dependencies: Array<object>): ShowTemplateDetailResponse {
        this['dependencies'] = dependencies;
        return this;
    }
    public withDependencyType(dependencyType: string): ShowTemplateDetailResponse {
        this['dependency_type'] = dependencyType;
        return this;
    }
    public set dependencyType(dependencyType: string  | undefined) {
        this['dependency_type'] = dependencyType;
    }
    public get dependencyType(): string | undefined {
        return this['dependency_type'];
    }
    public withDeployment(deployment: object): ShowTemplateDetailResponse {
        this['deployment'] = deployment;
        return this;
    }
}