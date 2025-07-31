

export class SaveTtscVocabularyGroupsRequestBody {
    private 'group_name'?: string;
    public constructor() { 
    }
    public withGroupName(groupName: string): SaveTtscVocabularyGroupsRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}