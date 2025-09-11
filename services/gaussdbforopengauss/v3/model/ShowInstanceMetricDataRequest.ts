

export class ShowInstanceMetricDataRequest {
    private 'X-Language'?: ShowInstanceMetricDataRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public metric?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    public constructor(instanceId?: string, startTime?: string, endTime?: string, metric?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['metric'] = metric;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: ShowInstanceMetricDataRequestXLanguageEnum | string): ShowInstanceMetricDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowInstanceMetricDataRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowInstanceMetricDataRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowInstanceMetricDataRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: string): ShowInstanceMetricDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowInstanceMetricDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMetric(metric: string): ShowInstanceMetricDataRequest {
        this['metric'] = metric;
        return this;
    }
    public withNodeId(nodeId: string): ShowInstanceMetricDataRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): ShowInstanceMetricDataRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceMetricDataRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
