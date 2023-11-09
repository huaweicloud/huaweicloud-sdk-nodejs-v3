
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectDetailResponse extends SdkResponse {
    private 'namespace_id'?: string;
    public namespace?: string;
    private 'project_id'?: string;
    public project?: string;
    public constructor() { 
        super();
    }
    public withNamespaceId(namespaceId: string): ShowProjectDetailResponse {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: string  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): string | undefined {
        return this['namespace_id'];
    }
    public withNamespace(namespace: string): ShowProjectDetailResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withProjectId(projectId: string): ShowProjectDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProject(project: string): ShowProjectDetailResponse {
        this['project'] = project;
        return this;
    }
}