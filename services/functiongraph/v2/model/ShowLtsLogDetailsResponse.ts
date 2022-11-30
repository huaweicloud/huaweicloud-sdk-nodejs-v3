
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLtsLogDetailsResponse extends SdkResponse {
    private 'group_name'?: string | undefined;
    private 'group_id'?: string | undefined;
    private 'stream_id'?: string | undefined;
    private 'stream_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): ShowLtsLogDetailsResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withGroupId(groupId: string): ShowLtsLogDetailsResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStreamId(streamId: string): ShowLtsLogDetailsResponse {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
    public withStreamName(streamName: string): ShowLtsLogDetailsResponse {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName() {
        return this['stream_name'];
    }
}