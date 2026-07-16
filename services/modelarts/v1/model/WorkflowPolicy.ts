import { Scene } from './Scene';


export class WorkflowPolicy {
    private 'use_scene'?: string;
    private 'scene_id'?: string;
    public scenes?: Array<Scene>;
    public constructor() { 
    }
    public withUseScene(useScene: string): WorkflowPolicy {
        this['use_scene'] = useScene;
        return this;
    }
    public set useScene(useScene: string  | undefined) {
        this['use_scene'] = useScene;
    }
    public get useScene(): string | undefined {
        return this['use_scene'];
    }
    public withSceneId(sceneId: string): WorkflowPolicy {
        this['scene_id'] = sceneId;
        return this;
    }
    public set sceneId(sceneId: string  | undefined) {
        this['scene_id'] = sceneId;
    }
    public get sceneId(): string | undefined {
        return this['scene_id'];
    }
    public withScenes(scenes: Array<Scene>): WorkflowPolicy {
        this['scenes'] = scenes;
        return this;
    }
}