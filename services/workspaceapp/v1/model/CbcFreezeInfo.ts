import { CbcFreezeScene } from './CbcFreezeScene';


export class CbcFreezeInfo {
    public effect?: number;
    public scene?: CbcFreezeScene;
    public constructor() { 
    }
    public withEffect(effect: number): CbcFreezeInfo {
        this['effect'] = effect;
        return this;
    }
    public withScene(scene: CbcFreezeScene): CbcFreezeInfo {
        this['scene'] = scene;
        return this;
    }
}