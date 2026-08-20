import { EndpointAuthorizationBody } from './EndpointAuthorizationBody';


export class EndpointProxyParam {
    public authorization?: EndpointAuthorizationBody;
    public data?: object;
    private 'datasource_name'?: string;
    private 'endpoint_uuid'?: string;
    private 'module_id'?: string;
    public url?: string;
    private 'is_inner'?: boolean;
    private 'project_uuid'?: string;
    private 'region_name'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: EndpointAuthorizationBody): EndpointProxyParam {
        this['authorization'] = authorization;
        return this;
    }
    public withData(data: object): EndpointProxyParam {
        this['data'] = data;
        return this;
    }
    public withDatasourceName(datasourceName: string): EndpointProxyParam {
        this['datasource_name'] = datasourceName;
        return this;
    }
    public set datasourceName(datasourceName: string  | undefined) {
        this['datasource_name'] = datasourceName;
    }
    public get datasourceName(): string | undefined {
        return this['datasource_name'];
    }
    public withEndpointUuid(endpointUuid: string): EndpointProxyParam {
        this['endpoint_uuid'] = endpointUuid;
        return this;
    }
    public set endpointUuid(endpointUuid: string  | undefined) {
        this['endpoint_uuid'] = endpointUuid;
    }
    public get endpointUuid(): string | undefined {
        return this['endpoint_uuid'];
    }
    public withModuleId(moduleId: string): EndpointProxyParam {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withUrl(url: string): EndpointProxyParam {
        this['url'] = url;
        return this;
    }
    public withIsInner(isInner: boolean): EndpointProxyParam {
        this['is_inner'] = isInner;
        return this;
    }
    public set isInner(isInner: boolean  | undefined) {
        this['is_inner'] = isInner;
    }
    public get isInner(): boolean | undefined {
        return this['is_inner'];
    }
    public withProjectUuid(projectUuid: string): EndpointProxyParam {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withRegionName(regionName: string): EndpointProxyParam {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
}