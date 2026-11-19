

export class ShowSessionSummaryUseOpsTunnelRequest {
    private 'X-Language'?: ShowSessionSummaryUseOpsTunnelRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'use_ops_tunnel'?: boolean;
    public constructor(instanceId?: string, useOpsTunnel?: boolean) { 
        this['instance_id'] = instanceId;
        this['use_ops_tunnel'] = useOpsTunnel;
    }
    public withXLanguage(xLanguage: ShowSessionSummaryUseOpsTunnelRequestXLanguageEnum | string): ShowSessionSummaryUseOpsTunnelRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSessionSummaryUseOpsTunnelRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSessionSummaryUseOpsTunnelRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowSessionSummaryUseOpsTunnelRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowSessionSummaryUseOpsTunnelRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): ShowSessionSummaryUseOpsTunnelRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withUseOpsTunnel(useOpsTunnel: boolean): ShowSessionSummaryUseOpsTunnelRequest {
        this['use_ops_tunnel'] = useOpsTunnel;
        return this;
    }
    public set useOpsTunnel(useOpsTunnel: boolean  | undefined) {
        this['use_ops_tunnel'] = useOpsTunnel;
    }
    public get useOpsTunnel(): boolean | undefined {
        return this['use_ops_tunnel'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSessionSummaryUseOpsTunnelRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
