import { NodeWdrDto } from './NodeWdrDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokeWdrReportResponse extends SdkResponse {
    private 'instance_wdr'?: string;
    private 'instance_wdr_name'?: string;
    private 'node_wdr_list'?: Array<NodeWdrDto>;
    private 'wdr_status'?: number;
    private 'start_snapshot_id'?: number;
    private 'end_snapshot_id'?: number;
    public constructor() { 
        super();
    }
    public withInstanceWdr(instanceWdr: string): InvokeWdrReportResponse {
        this['instance_wdr'] = instanceWdr;
        return this;
    }
    public set instanceWdr(instanceWdr: string  | undefined) {
        this['instance_wdr'] = instanceWdr;
    }
    public get instanceWdr(): string | undefined {
        return this['instance_wdr'];
    }
    public withInstanceWdrName(instanceWdrName: string): InvokeWdrReportResponse {
        this['instance_wdr_name'] = instanceWdrName;
        return this;
    }
    public set instanceWdrName(instanceWdrName: string  | undefined) {
        this['instance_wdr_name'] = instanceWdrName;
    }
    public get instanceWdrName(): string | undefined {
        return this['instance_wdr_name'];
    }
    public withNodeWdrList(nodeWdrList: Array<NodeWdrDto>): InvokeWdrReportResponse {
        this['node_wdr_list'] = nodeWdrList;
        return this;
    }
    public set nodeWdrList(nodeWdrList: Array<NodeWdrDto>  | undefined) {
        this['node_wdr_list'] = nodeWdrList;
    }
    public get nodeWdrList(): Array<NodeWdrDto> | undefined {
        return this['node_wdr_list'];
    }
    public withWdrStatus(wdrStatus: number): InvokeWdrReportResponse {
        this['wdr_status'] = wdrStatus;
        return this;
    }
    public set wdrStatus(wdrStatus: number  | undefined) {
        this['wdr_status'] = wdrStatus;
    }
    public get wdrStatus(): number | undefined {
        return this['wdr_status'];
    }
    public withStartSnapshotId(startSnapshotId: number): InvokeWdrReportResponse {
        this['start_snapshot_id'] = startSnapshotId;
        return this;
    }
    public set startSnapshotId(startSnapshotId: number  | undefined) {
        this['start_snapshot_id'] = startSnapshotId;
    }
    public get startSnapshotId(): number | undefined {
        return this['start_snapshot_id'];
    }
    public withEndSnapshotId(endSnapshotId: number): InvokeWdrReportResponse {
        this['end_snapshot_id'] = endSnapshotId;
        return this;
    }
    public set endSnapshotId(endSnapshotId: number  | undefined) {
        this['end_snapshot_id'] = endSnapshotId;
    }
    public get endSnapshotId(): number | undefined {
        return this['end_snapshot_id'];
    }
}