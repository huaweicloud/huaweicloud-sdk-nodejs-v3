

export class StagePluginsQueryDTO {
    private 'use_condition'?: string;
    private 'comp_id'?: string;
    private 'comp_name'?: string;
    private 'cloud_id'?: string;
    private 'strategy_id'?: string;
    public category?: string;
    private 'publish_tab'?: string;
    public platform?: string;
    private 'comp_extend_type'?: string;
    private 'deploy_type'?: string;
    public constructor() { 
    }
    public withUseCondition(useCondition: string): StagePluginsQueryDTO {
        this['use_condition'] = useCondition;
        return this;
    }
    public set useCondition(useCondition: string  | undefined) {
        this['use_condition'] = useCondition;
    }
    public get useCondition(): string | undefined {
        return this['use_condition'];
    }
    public withCompId(compId: string): StagePluginsQueryDTO {
        this['comp_id'] = compId;
        return this;
    }
    public set compId(compId: string  | undefined) {
        this['comp_id'] = compId;
    }
    public get compId(): string | undefined {
        return this['comp_id'];
    }
    public withCompName(compName: string): StagePluginsQueryDTO {
        this['comp_name'] = compName;
        return this;
    }
    public set compName(compName: string  | undefined) {
        this['comp_name'] = compName;
    }
    public get compName(): string | undefined {
        return this['comp_name'];
    }
    public withCloudId(cloudId: string): StagePluginsQueryDTO {
        this['cloud_id'] = cloudId;
        return this;
    }
    public set cloudId(cloudId: string  | undefined) {
        this['cloud_id'] = cloudId;
    }
    public get cloudId(): string | undefined {
        return this['cloud_id'];
    }
    public withStrategyId(strategyId: string): StagePluginsQueryDTO {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withCategory(category: string): StagePluginsQueryDTO {
        this['category'] = category;
        return this;
    }
    public withPublishTab(publishTab: string): StagePluginsQueryDTO {
        this['publish_tab'] = publishTab;
        return this;
    }
    public set publishTab(publishTab: string  | undefined) {
        this['publish_tab'] = publishTab;
    }
    public get publishTab(): string | undefined {
        return this['publish_tab'];
    }
    public withPlatform(platform: string): StagePluginsQueryDTO {
        this['platform'] = platform;
        return this;
    }
    public withCompExtendType(compExtendType: string): StagePluginsQueryDTO {
        this['comp_extend_type'] = compExtendType;
        return this;
    }
    public set compExtendType(compExtendType: string  | undefined) {
        this['comp_extend_type'] = compExtendType;
    }
    public get compExtendType(): string | undefined {
        return this['comp_extend_type'];
    }
    public withDeployType(deployType: string): StagePluginsQueryDTO {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
}