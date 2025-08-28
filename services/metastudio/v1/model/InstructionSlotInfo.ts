import { SlotKnowledgeLibraryInfo } from './SlotKnowledgeLibraryInfo';


export class InstructionSlotInfo {
    public name?: string;
    public description?: string;
    private 'knowledge_library_list'?: Array<SlotKnowledgeLibraryInfo>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): InstructionSlotInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InstructionSlotInfo {
        this['description'] = description;
        return this;
    }
    public withKnowledgeLibraryList(knowledgeLibraryList: Array<SlotKnowledgeLibraryInfo>): InstructionSlotInfo {
        this['knowledge_library_list'] = knowledgeLibraryList;
        return this;
    }
    public set knowledgeLibraryList(knowledgeLibraryList: Array<SlotKnowledgeLibraryInfo>  | undefined) {
        this['knowledge_library_list'] = knowledgeLibraryList;
    }
    public get knowledgeLibraryList(): Array<SlotKnowledgeLibraryInfo> | undefined {
        return this['knowledge_library_list'];
    }
}