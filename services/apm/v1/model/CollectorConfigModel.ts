import { DetailViewConfigModel } from './DetailViewConfigModel';
import { LineViewConfigModel } from './LineViewConfigModel';


export class CollectorConfigModel {
    private 'line_view_config'?: LineViewConfigModel;
    private 'detail_view_config'?: DetailViewConfigModel;
    public constructor() { 
    }
    public withLineViewConfig(lineViewConfig: LineViewConfigModel): CollectorConfigModel {
        this['line_view_config'] = lineViewConfig;
        return this;
    }
    public set lineViewConfig(lineViewConfig: LineViewConfigModel  | undefined) {
        this['line_view_config'] = lineViewConfig;
    }
    public get lineViewConfig(): LineViewConfigModel | undefined {
        return this['line_view_config'];
    }
    public withDetailViewConfig(detailViewConfig: DetailViewConfigModel): CollectorConfigModel {
        this['detail_view_config'] = detailViewConfig;
        return this;
    }
    public set detailViewConfig(detailViewConfig: DetailViewConfigModel  | undefined) {
        this['detail_view_config'] = detailViewConfig;
    }
    public get detailViewConfig(): DetailViewConfigModel | undefined {
        return this['detail_view_config'];
    }
}