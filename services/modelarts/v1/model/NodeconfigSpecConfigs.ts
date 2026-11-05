import { NodeconfigSpecConfigsCpuManager } from './NodeconfigSpecConfigsCpuManager';
import { NodeconfigSpecConfigsDropCache } from './NodeconfigSpecConfigsDropCache';
import { NodeconfigSpecConfigsImageWarmUp } from './NodeconfigSpecConfigsImageWarmUp';
import { NodeconfigSpecConfigsTransparentHugepage } from './NodeconfigSpecConfigsTransparentHugepage';


export class NodeconfigSpecConfigs {
    private 'image_warm_up'?: Array<NodeconfigSpecConfigsImageWarmUp>;
    private 'cpu_manager'?: NodeconfigSpecConfigsCpuManager;
    private 'drop_cache'?: NodeconfigSpecConfigsDropCache;
    private 'transparent_hugepage'?: NodeconfigSpecConfigsTransparentHugepage;
    public constructor() { 
    }
    public withImageWarmUp(imageWarmUp: Array<NodeconfigSpecConfigsImageWarmUp>): NodeconfigSpecConfigs {
        this['image_warm_up'] = imageWarmUp;
        return this;
    }
    public set imageWarmUp(imageWarmUp: Array<NodeconfigSpecConfigsImageWarmUp>  | undefined) {
        this['image_warm_up'] = imageWarmUp;
    }
    public get imageWarmUp(): Array<NodeconfigSpecConfigsImageWarmUp> | undefined {
        return this['image_warm_up'];
    }
    public withCpuManager(cpuManager: NodeconfigSpecConfigsCpuManager): NodeconfigSpecConfigs {
        this['cpu_manager'] = cpuManager;
        return this;
    }
    public set cpuManager(cpuManager: NodeconfigSpecConfigsCpuManager  | undefined) {
        this['cpu_manager'] = cpuManager;
    }
    public get cpuManager(): NodeconfigSpecConfigsCpuManager | undefined {
        return this['cpu_manager'];
    }
    public withDropCache(dropCache: NodeconfigSpecConfigsDropCache): NodeconfigSpecConfigs {
        this['drop_cache'] = dropCache;
        return this;
    }
    public set dropCache(dropCache: NodeconfigSpecConfigsDropCache  | undefined) {
        this['drop_cache'] = dropCache;
    }
    public get dropCache(): NodeconfigSpecConfigsDropCache | undefined {
        return this['drop_cache'];
    }
    public withTransparentHugepage(transparentHugepage: NodeconfigSpecConfigsTransparentHugepage): NodeconfigSpecConfigs {
        this['transparent_hugepage'] = transparentHugepage;
        return this;
    }
    public set transparentHugepage(transparentHugepage: NodeconfigSpecConfigsTransparentHugepage  | undefined) {
        this['transparent_hugepage'] = transparentHugepage;
    }
    public get transparentHugepage(): NodeconfigSpecConfigsTransparentHugepage | undefined {
        return this['transparent_hugepage'];
    }
}