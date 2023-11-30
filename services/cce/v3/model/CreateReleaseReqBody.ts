import { CreateReleaseReqBodyValues } from './CreateReleaseReqBodyValues';
import { ReleaseReqBodyParams } from './ReleaseReqBodyParams';


export class CreateReleaseReqBody {
    private 'chart_id'?: string;
    public description?: string;
    public name?: string;
    public namespace?: string;
    public parameters?: ReleaseReqBodyParams;
    public values?: CreateReleaseReqBodyValues;
    public constructor(chartId?: string, name?: string, namespace?: string, values?: CreateReleaseReqBodyValues) { 
        this['chart_id'] = chartId;
        this['name'] = name;
        this['namespace'] = namespace;
        this['values'] = values;
    }
    public withChartId(chartId: string): CreateReleaseReqBody {
        this['chart_id'] = chartId;
        return this;
    }
    public set chartId(chartId: string  | undefined) {
        this['chart_id'] = chartId;
    }
    public get chartId(): string | undefined {
        return this['chart_id'];
    }
    public withDescription(description: string): CreateReleaseReqBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateReleaseReqBody {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateReleaseReqBody {
        this['namespace'] = namespace;
        return this;
    }
    public withParameters(parameters: ReleaseReqBodyParams): CreateReleaseReqBody {
        this['parameters'] = parameters;
        return this;
    }
    public withValues(values: CreateReleaseReqBodyValues): CreateReleaseReqBody {
        this['values'] = values;
        return this;
    }
}