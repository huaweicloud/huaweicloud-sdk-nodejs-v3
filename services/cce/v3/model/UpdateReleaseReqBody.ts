import { CreateReleaseReqBodyValues } from './CreateReleaseReqBodyValues';
import { ReleaseReqBodyParams } from './ReleaseReqBodyParams';


export class UpdateReleaseReqBody {
    private 'chart_id'?: string;
    public action?: UpdateReleaseReqBodyActionEnum | string;
    public parameters?: ReleaseReqBodyParams;
    public values?: CreateReleaseReqBodyValues;
    public constructor(chartId?: string, action?: string, parameters?: ReleaseReqBodyParams, values?: CreateReleaseReqBodyValues) { 
        this['chart_id'] = chartId;
        this['action'] = action;
        this['parameters'] = parameters;
        this['values'] = values;
    }
    public withChartId(chartId: string): UpdateReleaseReqBody {
        this['chart_id'] = chartId;
        return this;
    }
    public set chartId(chartId: string  | undefined) {
        this['chart_id'] = chartId;
    }
    public get chartId(): string | undefined {
        return this['chart_id'];
    }
    public withAction(action: UpdateReleaseReqBodyActionEnum | string): UpdateReleaseReqBody {
        this['action'] = action;
        return this;
    }
    public withParameters(parameters: ReleaseReqBodyParams): UpdateReleaseReqBody {
        this['parameters'] = parameters;
        return this;
    }
    public withValues(values: CreateReleaseReqBodyValues): UpdateReleaseReqBody {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateReleaseReqBodyActionEnum {
    UPGRADE = 'upgrade',
    ROLLBACK = 'rollback'
}
