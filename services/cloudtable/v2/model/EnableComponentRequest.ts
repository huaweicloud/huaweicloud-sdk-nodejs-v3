import { AddComponentReq } from './AddComponentReq';


export class EnableComponentRequest {
    private 'cluster_id'?: string;
    private 'component_name'?: string;
    private 'X-Language'?: string;
    public body?: AddComponentReq;
    public constructor(clusterId?: string, componentName?: string) { 
        this['cluster_id'] = clusterId;
        this['component_name'] = componentName;
    }
    public withClusterId(clusterId: string): EnableComponentRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withComponentName(componentName: string): EnableComponentRequest {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withXLanguage(xLanguage: string): EnableComponentRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: AddComponentReq): EnableComponentRequest {
        this['body'] = body;
        return this;
    }
}