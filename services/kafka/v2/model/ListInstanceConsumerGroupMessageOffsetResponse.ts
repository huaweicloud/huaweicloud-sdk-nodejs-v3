import { GroupMessageOffsetsDetailEntity } from './GroupMessageOffsetsDetailEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConsumerGroupMessageOffsetResponse extends SdkResponse {
    private 'group_message_offsets'?: Array<GroupMessageOffsetsDetailEntity>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withGroupMessageOffsets(groupMessageOffsets: Array<GroupMessageOffsetsDetailEntity>): ListInstanceConsumerGroupMessageOffsetResponse {
        this['group_message_offsets'] = groupMessageOffsets;
        return this;
    }
    public set groupMessageOffsets(groupMessageOffsets: Array<GroupMessageOffsetsDetailEntity>  | undefined) {
        this['group_message_offsets'] = groupMessageOffsets;
    }
    public get groupMessageOffsets(): Array<GroupMessageOffsetsDetailEntity> | undefined {
        return this['group_message_offsets'];
    }
    public withTotal(total: number): ListInstanceConsumerGroupMessageOffsetResponse {
        this['total'] = total;
        return this;
    }
}