import { HotfixDeployMode } from './HotfixDeployMode';


export class DbHotfixInfoResult {
    public version?: string;
    private 'create_time'?: number;
    private 'deploy_modes'?: Array<HotfixDeployMode>;
    public constructor() { 
    }
    public withVersion(version: string): DbHotfixInfoResult {
        this['version'] = version;
        return this;
    }
    public withCreateTime(createTime: number): DbHotfixInfoResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDeployModes(deployModes: Array<HotfixDeployMode>): DbHotfixInfoResult {
        this['deploy_modes'] = deployModes;
        return this;
    }
    public set deployModes(deployModes: Array<HotfixDeployMode>  | undefined) {
        this['deploy_modes'] = deployModes;
    }
    public get deployModes(): Array<HotfixDeployMode> | undefined {
        return this['deploy_modes'];
    }
}