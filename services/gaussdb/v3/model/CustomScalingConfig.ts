import { ScalingScene } from './ScalingScene';


export class CustomScalingConfig {
    private 'enlarge_scene'?: ScalingScene;
    public constructor() { 
    }
    public withEnlargeScene(enlargeScene: ScalingScene): CustomScalingConfig {
        this['enlarge_scene'] = enlargeScene;
        return this;
    }
    public set enlargeScene(enlargeScene: ScalingScene  | undefined) {
        this['enlarge_scene'] = enlargeScene;
    }
    public get enlargeScene(): ScalingScene | undefined {
        return this['enlarge_scene'];
    }
}