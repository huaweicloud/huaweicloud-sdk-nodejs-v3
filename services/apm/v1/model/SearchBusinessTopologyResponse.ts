import { CollectorConfigModel } from './CollectorConfigModel';
import { TopoLine } from './TopoLine';
import { TopoNode } from './TopoNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchBusinessTopologyResponse extends SdkResponse {
    private 'node_list'?: Array<TopoNode>;
    private 'line_list'?: Array<TopoLine>;
    private 'collector_config'?: { [key: string]: CollectorConfigModel; };
    private 'real_start_time'?: number;
    private 'real_end_time'?: number;
    public constructor() { 
        super();
    }
    public withNodeList(nodeList: Array<TopoNode>): SearchBusinessTopologyResponse {
        this['node_list'] = nodeList;
        return this;
    }
    public set nodeList(nodeList: Array<TopoNode>  | undefined) {
        this['node_list'] = nodeList;
    }
    public get nodeList(): Array<TopoNode> | undefined {
        return this['node_list'];
    }
    public withLineList(lineList: Array<TopoLine>): SearchBusinessTopologyResponse {
        this['line_list'] = lineList;
        return this;
    }
    public set lineList(lineList: Array<TopoLine>  | undefined) {
        this['line_list'] = lineList;
    }
    public get lineList(): Array<TopoLine> | undefined {
        return this['line_list'];
    }
    public withCollectorConfig(collectorConfig: { [key: string]: CollectorConfigModel; }): SearchBusinessTopologyResponse {
        this['collector_config'] = collectorConfig;
        return this;
    }
    public set collectorConfig(collectorConfig: { [key: string]: CollectorConfigModel; }  | undefined) {
        this['collector_config'] = collectorConfig;
    }
    public get collectorConfig(): { [key: string]: CollectorConfigModel; } | undefined {
        return this['collector_config'];
    }
    public withRealStartTime(realStartTime: number): SearchBusinessTopologyResponse {
        this['real_start_time'] = realStartTime;
        return this;
    }
    public set realStartTime(realStartTime: number  | undefined) {
        this['real_start_time'] = realStartTime;
    }
    public get realStartTime(): number | undefined {
        return this['real_start_time'];
    }
    public withRealEndTime(realEndTime: number): SearchBusinessTopologyResponse {
        this['real_end_time'] = realEndTime;
        return this;
    }
    public set realEndTime(realEndTime: number  | undefined) {
        this['real_end_time'] = realEndTime;
    }
    public get realEndTime(): number | undefined {
        return this['real_end_time'];
    }
}