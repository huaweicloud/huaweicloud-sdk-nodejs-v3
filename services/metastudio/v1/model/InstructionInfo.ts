import { InstructionReplyWordsInfo } from './InstructionReplyWordsInfo';
import { InstructionSlotInfo } from './InstructionSlotInfo';


export class InstructionInfo {
    private 'instruction_id'?: string;
    public name?: string;
    public description?: string;
    public instruction?: string;
    private 'slot_list'?: Array<InstructionSlotInfo>;
    private 'reply_words_list'?: Array<InstructionReplyWordsInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withInstructionId(instructionId: string): InstructionInfo {
        this['instruction_id'] = instructionId;
        return this;
    }
    public set instructionId(instructionId: string  | undefined) {
        this['instruction_id'] = instructionId;
    }
    public get instructionId(): string | undefined {
        return this['instruction_id'];
    }
    public withName(name: string): InstructionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InstructionInfo {
        this['description'] = description;
        return this;
    }
    public withInstruction(instruction: string): InstructionInfo {
        this['instruction'] = instruction;
        return this;
    }
    public withSlotList(slotList: Array<InstructionSlotInfo>): InstructionInfo {
        this['slot_list'] = slotList;
        return this;
    }
    public set slotList(slotList: Array<InstructionSlotInfo>  | undefined) {
        this['slot_list'] = slotList;
    }
    public get slotList(): Array<InstructionSlotInfo> | undefined {
        return this['slot_list'];
    }
    public withReplyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>): InstructionInfo {
        this['reply_words_list'] = replyWordsList;
        return this;
    }
    public set replyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>  | undefined) {
        this['reply_words_list'] = replyWordsList;
    }
    public get replyWordsList(): Array<InstructionReplyWordsInfo> | undefined {
        return this['reply_words_list'];
    }
    public withCreateTime(createTime: string): InstructionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): InstructionInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}