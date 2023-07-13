import { AddComponentReq } from './AddComponentReq';


export class EnableComponentRequest {
    private 'cluster_id': string | undefined;
    private 'component_name': string | undefined;
    private 'X-Language'?: string | undefined;
    public body?: AddComponentReq;
    public constructor(clusterId?: any, componentName?: any) { 
        this['cluster_id'] = clusterId;
        this['component_name'] = componentName;
    }
    public withClusterId(clusterId: string): EnableComponentRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withComponentName(componentName: string): EnableComponentRequest {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName() {
        return this['component_name'];
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