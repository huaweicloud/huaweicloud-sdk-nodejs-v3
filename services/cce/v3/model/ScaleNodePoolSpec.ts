import { ScaleNodePoolOptions } from './ScaleNodePoolOptions';


export class ScaleNodePoolSpec {
    public desiredNodeCount?: number;
    public scaleGroups?: Array<string>;
    public options?: ScaleNodePoolOptions;
    public constructor(desiredNodeCount?: number, scaleGroups?: Array<string>) { 
        this['desiredNodeCount'] = desiredNodeCount;
        this['scaleGroups'] = scaleGroups;
    }
    public withDesiredNodeCount(desiredNodeCount: number): ScaleNodePoolSpec {
        this['desiredNodeCount'] = desiredNodeCount;
        return this;
    }
    public withScaleGroups(scaleGroups: Array<string>): ScaleNodePoolSpec {
        this['scaleGroups'] = scaleGroups;
        return this;
    }
    public withOptions(options: ScaleNodePoolOptions): ScaleNodePoolSpec {
        this['options'] = options;
        return this;
    }
}