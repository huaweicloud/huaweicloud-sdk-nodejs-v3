import { MaskStrategies } from './MaskStrategies';


export class DynamicDataMask {
    private 'mask_strategies'?: Array<MaskStrategies>;
    public data?: Array<{ [key: string]: object; }>;
    public constructor(maskStrategies?: Array<MaskStrategies>, data?: Array<{ [key: string]: object; }>) { 
        this['mask_strategies'] = maskStrategies;
        this['data'] = data;
    }
    public withMaskStrategies(maskStrategies: Array<MaskStrategies>): DynamicDataMask {
        this['mask_strategies'] = maskStrategies;
        return this;
    }
    public set maskStrategies(maskStrategies: Array<MaskStrategies>  | undefined) {
        this['mask_strategies'] = maskStrategies;
    }
    public get maskStrategies(): Array<MaskStrategies> | undefined {
        return this['mask_strategies'];
    }
    public withData(data: Array<{ [key: string]: object; }>): DynamicDataMask {
        this['data'] = data;
        return this;
    }
}