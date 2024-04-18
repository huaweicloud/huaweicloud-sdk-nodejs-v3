

export class ListTopIoTrafficsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'top_io_num'?: number;
    private 'sort_condition'?: ListTopIoTrafficsRequestSortConditionEnum | string;
    public constructor(instanceId?: string, nodeId?: string, componentId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
    }
    public withXLanguage(xLanguage: string): ListTopIoTrafficsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListTopIoTrafficsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListTopIoTrafficsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): ListTopIoTrafficsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withTopIoNum(topIoNum: number): ListTopIoTrafficsRequest {
        this['top_io_num'] = topIoNum;
        return this;
    }
    public set topIoNum(topIoNum: number  | undefined) {
        this['top_io_num'] = topIoNum;
    }
    public get topIoNum(): number | undefined {
        return this['top_io_num'];
    }
    public withSortCondition(sortCondition: ListTopIoTrafficsRequestSortConditionEnum | string): ListTopIoTrafficsRequest {
        this['sort_condition'] = sortCondition;
        return this;
    }
    public set sortCondition(sortCondition: ListTopIoTrafficsRequestSortConditionEnum | string  | undefined) {
        this['sort_condition'] = sortCondition;
    }
    public get sortCondition(): ListTopIoTrafficsRequestSortConditionEnum | string | undefined {
        return this['sort_condition'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTopIoTrafficsRequestSortConditionEnum {
    READ = 'read',
    WRITE = 'write'
}
