import { SceneComponentInfo } from './SceneComponentInfo';


export class SceneAssetMeta {
    public components?: Array<SceneComponentInfo>;
    private 'default_configs'?: { [key: string]: SceneComponentInfo; };
    public constructor() { 
    }
    public withComponents(components: Array<SceneComponentInfo>): SceneAssetMeta {
        this['components'] = components;
        return this;
    }
    public withDefaultConfigs(defaultConfigs: { [key: string]: SceneComponentInfo; }): SceneAssetMeta {
        this['default_configs'] = defaultConfigs;
        return this;
    }
    public set defaultConfigs(defaultConfigs: { [key: string]: SceneComponentInfo; }  | undefined) {
        this['default_configs'] = defaultConfigs;
    }
    public get defaultConfigs(): { [key: string]: SceneComponentInfo; } | undefined {
        return this['default_configs'];
    }
}