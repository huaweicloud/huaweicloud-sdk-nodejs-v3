import { AddComponentReq } from './AddComponentReq';


export class EnableComponentRequest {
    public projectId: string;
    public clusterId: string;
    public componentName: string;
    private 'X-Language'?: string | undefined;
    public body?: AddComponentReq;
    public constructor(projectId?: any, clusterId?: any, componentName?: any) { 
        this['projectId'] = projectId;
        this['clusterId'] = clusterId;
        this['componentName'] = componentName;
    }
    public withProjectId(projectId: string): EnableComponentRequest {
        this['projectId'] = projectId;
        return this;
    }
    public withClusterId(clusterId: string): EnableComponentRequest {
        this['clusterId'] = clusterId;
        return this;
    }
    public withComponentName(componentName: string): EnableComponentRequest {
        this['componentName'] = componentName;
        return this;
    }
    public withXLanguage(xLanguage: string): EnableComponentRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: AddComponentReq): EnableComponentRequest {
        this['body'] = body;
        return this;
    }
}