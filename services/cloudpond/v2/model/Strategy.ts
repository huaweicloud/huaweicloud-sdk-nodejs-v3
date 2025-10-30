import { Effect } from './Effect';
import { OperationStatus } from './OperationStatus';
import { Scene } from './Scene';


export class Strategy {
    public status?: OperationStatus;
    public scene?: Scene;
    public effect?: Effect;
    public constructor() { 
    }
    public withStatus(status: OperationStatus): Strategy {
        this['status'] = status;
        return this;
    }
    public withScene(scene: Scene): Strategy {
        this['scene'] = scene;
        return this;
    }
    public withEffect(effect: Effect): Strategy {
        this['effect'] = effect;
        return this;
    }
}