import { ActiveStandbyConfigDTO } from './ActiveStandbyConfigDTO';


export class HaConfigDTO {
    private 'ha_type'?: string;
    private 'active_standby_config'?: ActiveStandbyConfigDTO;
    public constructor() { 
    }
    public withHaType(haType: string): HaConfigDTO {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: string  | undefined) {
        this['ha_type'] = haType;
    }
    public get haType(): string | undefined {
        return this['ha_type'];
    }
    public withActiveStandbyConfig(activeStandbyConfig: ActiveStandbyConfigDTO): HaConfigDTO {
        this['active_standby_config'] = activeStandbyConfig;
        return this;
    }
    public set activeStandbyConfig(activeStandbyConfig: ActiveStandbyConfigDTO  | undefined) {
        this['active_standby_config'] = activeStandbyConfig;
    }
    public get activeStandbyConfig(): ActiveStandbyConfigDTO | undefined {
        return this['active_standby_config'];
    }
}