import { InstructionReplyWordsInfo } from './InstructionReplyWordsInfo';
import { InstructionSlotInfo } from './InstructionSlotInfo';


export class UpdateInstructionReq {
    public name?: string;
    public description?: string;
    public instruction?: string;
    private 'slot_list'?: Array<InstructionSlotInfo>;
    private 'reply_words_list'?: Array<InstructionReplyWordsInfo>;
    public constructor() { 
    }
    public withName(name: string): UpdateInstructionReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateInstructionReq {
        this['description'] = description;
        return this;
    }
    public withInstruction(instruction: string): UpdateInstructionReq {
        this['instruction'] = instruction;
        return this;
    }
    public withSlotList(slotList: Array<InstructionSlotInfo>): UpdateInstructionReq {
        this['slot_list'] = slotList;
        return this;
    }
    public set slotList(slotList: Array<InstructionSlotInfo>  | undefined) {
        this['slot_list'] = slotList;
    }
    public get slotList(): Array<InstructionSlotInfo> | undefined {
        return this['slot_list'];
    }
    public withReplyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>): UpdateInstructionReq {
        this['reply_words_list'] = replyWordsList;
        return this;
    }
    public set replyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>  | undefined) {
        this['reply_words_list'] = replyWordsList;
    }
    public get replyWordsList(): Array<InstructionReplyWordsInfo> | undefined {
        return this['reply_words_list'];
    }
}