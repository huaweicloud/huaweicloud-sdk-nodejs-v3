import { InstructionReplyWordsInfo } from './InstructionReplyWordsInfo';
import { InstructionSlotInfo } from './InstructionSlotInfo';


export class CreateInstructionReq {
    public name?: string;
    public description?: string;
    public instruction?: string;
    private 'instruction_library_id'?: string;
    private 'slot_list'?: Array<InstructionSlotInfo>;
    private 'reply_words_list'?: Array<InstructionReplyWordsInfo>;
    public constructor(name?: string, description?: string, instruction?: string, instructionLibraryId?: string) { 
        this['name'] = name;
        this['description'] = description;
        this['instruction'] = instruction;
        this['instruction_library_id'] = instructionLibraryId;
    }
    public withName(name: string): CreateInstructionReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstructionReq {
        this['description'] = description;
        return this;
    }
    public withInstruction(instruction: string): CreateInstructionReq {
        this['instruction'] = instruction;
        return this;
    }
    public withInstructionLibraryId(instructionLibraryId: string): CreateInstructionReq {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withSlotList(slotList: Array<InstructionSlotInfo>): CreateInstructionReq {
        this['slot_list'] = slotList;
        return this;
    }
    public set slotList(slotList: Array<InstructionSlotInfo>  | undefined) {
        this['slot_list'] = slotList;
    }
    public get slotList(): Array<InstructionSlotInfo> | undefined {
        return this['slot_list'];
    }
    public withReplyWordsList(replyWordsList: Array<InstructionReplyWordsInfo>): CreateInstructionReq {
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