import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';


export class RoleKnowledgeLibraryReq {
    private 'knowledge_type'?: KnowledgeTypeEnum;
    private 'knowledge_library_id_list'?: Array<string>;
    public constructor(knowledgeType?: KnowledgeTypeEnum, knowledgeLibraryIdList?: Array<string>) { 
        this['knowledge_type'] = knowledgeType;
        this['knowledge_library_id_list'] = knowledgeLibraryIdList;
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): RoleKnowledgeLibraryReq {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withKnowledgeLibraryIdList(knowledgeLibraryIdList: Array<string>): RoleKnowledgeLibraryReq {
        this['knowledge_library_id_list'] = knowledgeLibraryIdList;
        return this;
    }
    public set knowledgeLibraryIdList(knowledgeLibraryIdList: Array<string>  | undefined) {
        this['knowledge_library_id_list'] = knowledgeLibraryIdList;
    }
    public get knowledgeLibraryIdList(): Array<string> | undefined {
        return this['knowledge_library_id_list'];
    }
}