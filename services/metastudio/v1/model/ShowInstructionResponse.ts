import { InstructionReplyWordsInfo } from './InstructionReplyWordsInfo';
import { InstructionSlotInfo } from './InstructionSlotInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstructionResponse extends SdkResponse {
    private 'instruction_id'?: string;
    public name?: string;
    public description?: string;
    public instruction?: string;
    private 'slot_list'?: Array<InstructionSlotInfo>;
    private 'reply_words_list'?: Array<InstructionReplyWordsInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withInstructionId(instructionId: string): ShowInstructionResponse {
        this['instruction_id'] = instructionId;
        return this;
    }
    public set instructionId(instructionId: string  | undefined) {
        this['instruction_id'] = instructionId;
    }
    public get instructionId(): string | undefined {
        return this['instruction_id'];
    }
    public withName(name: string): ShowInstructionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowInstructionResponse {
        this['description'] = description;
        return this;
    }
    public withInstruction(instruction: string): ShowInstructionResponse {
        this['instruction'] = instruction;
        return this;
    }
    public withSlotList(slotList: Array<InstructionSlotInfo>): ShowInstructionResponse {
        this['slot_list'] = slotList;
        return this;
    }
    public set slotList(slotList: Array<InstructionSlotInfo>  | undefined) {
        this['slot_list'] = slotList;
    }
    public get slotList(): Array<InstructionSlotInfo> | undefined {
        return this['slot_list'];
    }
    public withReplyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>): ShowInstructionResponse {
        this['reply_words_list'] = replyWordsList;
        return this;
    }
    public set replyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>  | undefined) {
        this['reply_words_list'] = replyWordsList;
    }
    public get replyWordsList(): Array<InstructionReplyWordsInfo> | undefined {
        return this['reply_words_list'];
    }
    public withCreateTime(createTime: string): ShowInstructionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowInstructionResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowInstructionResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}