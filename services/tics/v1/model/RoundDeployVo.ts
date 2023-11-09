import { DeployVo } from './DeployVo';


export class RoundDeployVo {
    public deploys?: Array<DeployVo>;
    private 'round_id'?: number;
    public constructor() { 
    }
    public withDeploys(deploys: Array<DeployVo>): RoundDeployVo {
        this['deploys'] = deploys;
        return this;
    }
    public withRoundId(roundId: number): RoundDeployVo {
        this['round_id'] = roundId;
        return this;
    }
    public set roundId(roundId: number  | undefined) {
        this['round_id'] = roundId;
    }
    public get roundId(): number | undefined {
        return this['round_id'];
    }
}