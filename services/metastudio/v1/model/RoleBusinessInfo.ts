import { LanguageEnum } from './LanguageEnum';
import { RoleKnowledgeLibraryInfo } from './RoleKnowledgeLibraryInfo';


export class RoleBusinessInfo {
    private 'role_business_id'?: string;
    private 'role_id'?: string;
    public language?: LanguageEnum;
    public prompt?: string;
    private 'knowledge_library_list'?: Array<RoleKnowledgeLibraryInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withRoleBusinessId(roleBusinessId: string): RoleBusinessInfo {
        this['role_business_id'] = roleBusinessId;
        return this;
    }
    public set roleBusinessId(roleBusinessId: string  | undefined) {
        this['role_business_id'] = roleBusinessId;
    }
    public get roleBusinessId(): string | undefined {
        return this['role_business_id'];
    }
    public withRoleId(roleId: string): RoleBusinessInfo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withLanguage(language: LanguageEnum): RoleBusinessInfo {
        this['language'] = language;
        return this;
    }
    public withPrompt(prompt: string): RoleBusinessInfo {
        this['prompt'] = prompt;
        return this;
    }
    public withKnowledgeLibraryList(knowledgeLibraryList: Array<RoleKnowledgeLibraryInfo>): RoleBusinessInfo {
        this['knowledge_library_list'] = knowledgeLibraryList;
        return this;
    }
    public set knowledgeLibraryList(knowledgeLibraryList: Array<RoleKnowledgeLibraryInfo>  | undefined) {
        this['knowledge_library_list'] = knowledgeLibraryList;
    }
    public get knowledgeLibraryList(): Array<RoleKnowledgeLibraryInfo> | undefined {
        return this['knowledge_library_list'];
    }
    public withCreateTime(createTime: string): RoleBusinessInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RoleBusinessInfo {
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