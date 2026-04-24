

export class SubscribeAiAssistantListResponseProject {
    private 'project_id'?: string;
    private 'ai_func'?: boolean;
    public constructor() { 
    }
    public withProjectId(projectId: string): SubscribeAiAssistantListResponseProject {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAiFunc(aiFunc: boolean): SubscribeAiAssistantListResponseProject {
        this['ai_func'] = aiFunc;
        return this;
    }
    public set aiFunc(aiFunc: boolean  | undefined) {
        this['ai_func'] = aiFunc;
    }
    public get aiFunc(): boolean | undefined {
        return this['ai_func'];
    }
}