import { KnowledgeLibraryBaseInfo } from './KnowledgeLibraryBaseInfo';
import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';


export class RoleKnowledgeLibraryInfo {
    private 'knowledge_type'?: KnowledgeTypeEnum;
    private 'knowledge_library_info_list'?: Array<KnowledgeLibraryBaseInfo>;
    public constructor(knowledgeType?: KnowledgeTypeEnum, knowledgeLibraryInfoList?: Array<KnowledgeLibraryBaseInfo>) { 
        this['knowledge_type'] = knowledgeType;
        this['knowledge_library_info_list'] = knowledgeLibraryInfoList;
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): RoleKnowledgeLibraryInfo {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withKnowledgeLibraryInfoList(knowledgeLibraryInfoList: Array<KnowledgeLibraryBaseInfo>): RoleKnowledgeLibraryInfo {
        this['knowledge_library_info_list'] = knowledgeLibraryInfoList;
        return this;
    }
    public set knowledgeLibraryInfoList(knowledgeLibraryInfoList: Array<KnowledgeLibraryBaseInfo>  | undefined) {
        this['knowledge_library_info_list'] = knowledgeLibraryInfoList;
    }
    public get knowledgeLibraryInfoList(): Array<KnowledgeLibraryBaseInfo> | undefined {
        return this['knowledge_library_info_list'];
    }
}