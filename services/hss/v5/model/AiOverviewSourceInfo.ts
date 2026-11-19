

export class AiOverviewSourceInfo {
    private 'total_agents'?: number;
    private 'protected_agents'?: number;
    private 'unprotected_agents'?: number;
    public constructor() { 
    }
    public withTotalAgents(totalAgents: number): AiOverviewSourceInfo {
        this['total_agents'] = totalAgents;
        return this;
    }
    public set totalAgents(totalAgents: number  | undefined) {
        this['total_agents'] = totalAgents;
    }
    public get totalAgents(): number | undefined {
        return this['total_agents'];
    }
    public withProtectedAgents(protectedAgents: number): AiOverviewSourceInfo {
        this['protected_agents'] = protectedAgents;
        return this;
    }
    public set protectedAgents(protectedAgents: number  | undefined) {
        this['protected_agents'] = protectedAgents;
    }
    public get protectedAgents(): number | undefined {
        return this['protected_agents'];
    }
    public withUnprotectedAgents(unprotectedAgents: number): AiOverviewSourceInfo {
        this['unprotected_agents'] = unprotectedAgents;
        return this;
    }
    public set unprotectedAgents(unprotectedAgents: number  | undefined) {
        this['unprotected_agents'] = unprotectedAgents;
    }
    public get unprotectedAgents(): number | undefined {
        return this['unprotected_agents'];
    }
}