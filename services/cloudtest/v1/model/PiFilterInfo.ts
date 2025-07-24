import { PiInfo } from './PiInfo';


export class PiFilterInfo {
    private 'pi_sprints'?: Array<PiInfo>;
    private 'all_pi'?: boolean;
    public constructor() { 
    }
    public withPiSprints(piSprints: Array<PiInfo>): PiFilterInfo {
        this['pi_sprints'] = piSprints;
        return this;
    }
    public set piSprints(piSprints: Array<PiInfo>  | undefined) {
        this['pi_sprints'] = piSprints;
    }
    public get piSprints(): Array<PiInfo> | undefined {
        return this['pi_sprints'];
    }
    public withAllPi(allPi: boolean): PiFilterInfo {
        this['all_pi'] = allPi;
        return this;
    }
    public set allPi(allPi: boolean  | undefined) {
        this['all_pi'] = allPi;
    }
    public get allPi(): boolean | undefined {
        return this['all_pi'];
    }
}