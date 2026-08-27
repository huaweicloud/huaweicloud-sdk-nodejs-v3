

export class ListInstanceStatisticsRequest {
    private 'ai_agent_type'?: string;
    public constructor() { 
    }
    public withAiAgentType(aiAgentType: string): ListInstanceStatisticsRequest {
        this['ai_agent_type'] = aiAgentType;
        return this;
    }
    public set aiAgentType(aiAgentType: string  | undefined) {
        this['ai_agent_type'] = aiAgentType;
    }
    public get aiAgentType(): string | undefined {
        return this['ai_agent_type'];
    }
}