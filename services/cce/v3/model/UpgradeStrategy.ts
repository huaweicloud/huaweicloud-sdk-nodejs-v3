import { InPlaceRollingUpdate } from './InPlaceRollingUpdate';


export class UpgradeStrategy {
    public type?: string;
    public inPlaceRollingUpdate?: InPlaceRollingUpdate;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): UpgradeStrategy {
        this['type'] = type;
        return this;
    }
    public withInPlaceRollingUpdate(inPlaceRollingUpdate: InPlaceRollingUpdate): UpgradeStrategy {
        this['inPlaceRollingUpdate'] = inPlaceRollingUpdate;
        return this;
    }
}