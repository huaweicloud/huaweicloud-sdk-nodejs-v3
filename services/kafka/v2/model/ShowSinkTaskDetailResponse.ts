import { ShowSinkTaskDetailRespObsDestinationDescriptor } from './ShowSinkTaskDetailRespObsDestinationDescriptor';
import { ShowSinkTaskDetailRespTopicsInfo } from './ShowSinkTaskDetailRespTopicsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSinkTaskDetailResponse extends SdkResponse {
    private 'task_name'?: string;
    private 'destination_type'?: string;
    private 'create_time'?: number;
    public status?: string;
    public topics?: string;
    private 'obs_destination_descriptor'?: ShowSinkTaskDetailRespObsDestinationDescriptor;
    private 'topics_info'?: Array<ShowSinkTaskDetailRespTopicsInfo>;
    public constructor() { 
        super();
    }
    public withTaskName(taskName: string): ShowSinkTaskDetailResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withDestinationType(destinationType: string): ShowSinkTaskDetailResponse {
        this['destination_type'] = destinationType;
        return this;
    }
    public set destinationType(destinationType: string  | undefined) {
        this['destination_type'] = destinationType;
    }
    public get destinationType(): string | undefined {
        return this['destination_type'];
    }
    public withCreateTime(createTime: number): ShowSinkTaskDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withStatus(status: string): ShowSinkTaskDetailResponse {
        this['status'] = status;
        return this;
    }
    public withTopics(topics: string): ShowSinkTaskDetailResponse {
        this['topics'] = topics;
        return this;
    }
    public withObsDestinationDescriptor(obsDestinationDescriptor: ShowSinkTaskDetailRespObsDestinationDescriptor): ShowSinkTaskDetailResponse {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
        return this;
    }
    public set obsDestinationDescriptor(obsDestinationDescriptor: ShowSinkTaskDetailRespObsDestinationDescriptor  | undefined) {
        this['obs_destination_descriptor'] = obsDestinationDescriptor;
    }
    public get obsDestinationDescriptor(): ShowSinkTaskDetailRespObsDestinationDescriptor | undefined {
        return this['obs_destination_descriptor'];
    }
    public withTopicsInfo(topicsInfo: Array<ShowSinkTaskDetailRespTopicsInfo>): ShowSinkTaskDetailResponse {
        this['topics_info'] = topicsInfo;
        return this;
    }
    public set topicsInfo(topicsInfo: Array<ShowSinkTaskDetailRespTopicsInfo>  | undefined) {
        this['topics_info'] = topicsInfo;
    }
    public get topicsInfo(): Array<ShowSinkTaskDetailRespTopicsInfo> | undefined {
        return this['topics_info'];
    }
}