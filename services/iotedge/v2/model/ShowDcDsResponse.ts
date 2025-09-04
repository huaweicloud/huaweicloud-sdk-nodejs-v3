
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDcDsResponse extends SdkResponse {
    private 'ds_id'?: string;
    public config?: object;
    public name?: string;
    private 'edge_node_id'?: string;
    private 'module_id'?: string;
    private 'tpl_id'?: string;
    private 'quality_report'?: boolean;
    private 'edge_app_name'?: string;
    private 'connection_info'?: object;
    private 'module_state'?: string;
    public count?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'synchronized'?: boolean;
    private 'synchronized_time'?: string;
    public constructor() { 
        super();
    }
    public withDsId(dsId: string): ShowDcDsResponse {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withConfig(config: object): ShowDcDsResponse {
        this['config'] = config;
        return this;
    }
    public withName(name: string): ShowDcDsResponse {
        this['name'] = name;
        return this;
    }
    public withEdgeNodeId(edgeNodeId: string): ShowDcDsResponse {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withModuleId(moduleId: string): ShowDcDsResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTplId(tplId: string): ShowDcDsResponse {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withQualityReport(qualityReport: boolean): ShowDcDsResponse {
        this['quality_report'] = qualityReport;
        return this;
    }
    public set qualityReport(qualityReport: boolean  | undefined) {
        this['quality_report'] = qualityReport;
    }
    public get qualityReport(): boolean | undefined {
        return this['quality_report'];
    }
    public withEdgeAppName(edgeAppName: string): ShowDcDsResponse {
        this['edge_app_name'] = edgeAppName;
        return this;
    }
    public set edgeAppName(edgeAppName: string  | undefined) {
        this['edge_app_name'] = edgeAppName;
    }
    public get edgeAppName(): string | undefined {
        return this['edge_app_name'];
    }
    public withConnectionInfo(connectionInfo: object): ShowDcDsResponse {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: object  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): object | undefined {
        return this['connection_info'];
    }
    public withModuleState(moduleState: string): ShowDcDsResponse {
        this['module_state'] = moduleState;
        return this;
    }
    public set moduleState(moduleState: string  | undefined) {
        this['module_state'] = moduleState;
    }
    public get moduleState(): string | undefined {
        return this['module_state'];
    }
    public withCount(count: number): ShowDcDsResponse {
        this['count'] = count;
        return this;
    }
    public withCreateTime(createTime: string): ShowDcDsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowDcDsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSynchronized(_synchronized: boolean): ShowDcDsResponse {
        this['synchronized'] = _synchronized;
        return this;
    }
    public set _synchronized(_synchronized: boolean  | undefined) {
        this['synchronized'] = _synchronized;
    }
    public get _synchronized(): boolean | undefined {
        return this['synchronized'];
    }
    public withSynchronizedTime(synchronizedTime: string): ShowDcDsResponse {
        this['synchronized_time'] = synchronizedTime;
        return this;
    }
    public set synchronizedTime(synchronizedTime: string  | undefined) {
        this['synchronized_time'] = synchronizedTime;
    }
    public get synchronizedTime(): string | undefined {
        return this['synchronized_time'];
    }
}