import { DeployStrategyGrayRelease } from './DeployStrategyGrayRelease';
import { DeployStrategyRollingRelease } from './DeployStrategyRollingRelease';


export class DeployStrategy {
    public type?: DeployStrategyTypeEnum | string;
    private 'rolling_release'?: DeployStrategyRollingRelease;
    private 'gray_release'?: DeployStrategyGrayRelease;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: DeployStrategyTypeEnum | string): DeployStrategy {
        this['type'] = type;
        return this;
    }
    public withRollingRelease(rollingRelease: DeployStrategyRollingRelease): DeployStrategy {
        this['rolling_release'] = rollingRelease;
        return this;
    }
    public set rollingRelease(rollingRelease: DeployStrategyRollingRelease  | undefined) {
        this['rolling_release'] = rollingRelease;
    }
    public get rollingRelease(): DeployStrategyRollingRelease | undefined {
        return this['rolling_release'];
    }
    public withGrayRelease(grayRelease: DeployStrategyGrayRelease): DeployStrategy {
        this['gray_release'] = grayRelease;
        return this;
    }
    public set grayRelease(grayRelease: DeployStrategyGrayRelease  | undefined) {
        this['gray_release'] = grayRelease;
    }
    public get grayRelease(): DeployStrategyGrayRelease | undefined {
        return this['gray_release'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyTypeEnum {
    ONEBATCHRELEASE = 'OneBatchRelease',
    ROLLINGRELEASE = 'RollingRelease',
    GRAYRELEASE = 'GrayRelease'
}
