import { DBCheckDetail } from './DBCheckDetail';


export class DBUpgradePrecheck {
    public result?: number;
    private 'checks_performed'?: Array<DBCheckDetail>;
    public constructor() { 
    }
    public withResult(result: number): DBUpgradePrecheck {
        this['result'] = result;
        return this;
    }
    public withChecksPerformed(checksPerformed: Array<DBCheckDetail>): DBUpgradePrecheck {
        this['checks_performed'] = checksPerformed;
        return this;
    }
    public set checksPerformed(checksPerformed: Array<DBCheckDetail>  | undefined) {
        this['checks_performed'] = checksPerformed;
    }
    public get checksPerformed(): Array<DBCheckDetail> | undefined {
        return this['checks_performed'];
    }
}