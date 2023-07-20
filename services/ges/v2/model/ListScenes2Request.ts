

export class ListScenes2Request {
    private 'scene_name'?: string;
    private 'application_name'?: string;
    private 'graph_id'?: string;
    public constructor() { 
    }
    public withSceneName(sceneName: string): ListScenes2Request {
        this['scene_name'] = sceneName;
        return this;
    }
    public set sceneName(sceneName: string  | undefined) {
        this['scene_name'] = sceneName;
    }
    public get sceneName(): string | undefined {
        return this['scene_name'];
    }
    public withApplicationName(applicationName: string): ListScenes2Request {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withGraphId(graphId: string): ListScenes2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
}