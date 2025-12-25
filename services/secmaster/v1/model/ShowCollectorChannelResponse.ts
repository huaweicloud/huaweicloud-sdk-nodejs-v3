import { ChannelErrorType } from './ChannelErrorType';
import { ChannelOperationStatus } from './ChannelOperationStatus';
import { NodeVo } from './NodeVo';
import { ShowModuleVo } from './ShowModuleVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCollectorChannelResponse extends SdkResponse {
    private 'create_by'?: string;
    public description?: string;
    public error?: ChannelErrorType;
    private 'group_id'?: string;
    public input?: Array<ShowModuleVo>;
    public nodes?: Array<NodeVo>;
    private 'operation_status'?: ChannelOperationStatus;
    public output?: Array<ShowModuleVo>;
    private 'parser_id'?: string;
    private 'parser_name'?: string;
    public title?: string;
    public constructor() { 
        super();
    }
    public withCreateBy(createBy: string): ShowCollectorChannelResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withDescription(description: string): ShowCollectorChannelResponse {
        this['description'] = description;
        return this;
    }
    public withError(error: ChannelErrorType): ShowCollectorChannelResponse {
        this['error'] = error;
        return this;
    }
    public withGroupId(groupId: string): ShowCollectorChannelResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withInput(input: Array<ShowModuleVo>): ShowCollectorChannelResponse {
        this['input'] = input;
        return this;
    }
    public withNodes(nodes: Array<NodeVo>): ShowCollectorChannelResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withOperationStatus(operationStatus: ChannelOperationStatus): ShowCollectorChannelResponse {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: ChannelOperationStatus  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): ChannelOperationStatus | undefined {
        return this['operation_status'];
    }
    public withOutput(output: Array<ShowModuleVo>): ShowCollectorChannelResponse {
        this['output'] = output;
        return this;
    }
    public withParserId(parserId: string): ShowCollectorChannelResponse {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withParserName(parserName: string): ShowCollectorChannelResponse {
        this['parser_name'] = parserName;
        return this;
    }
    public set parserName(parserName: string  | undefined) {
        this['parser_name'] = parserName;
    }
    public get parserName(): string | undefined {
        return this['parser_name'];
    }
    public withTitle(title: string): ShowCollectorChannelResponse {
        this['title'] = title;
        return this;
    }
}