import { ApigDataSourceVo } from './ApigDataSourceVo';


export class ApigDataSourcesVo {
    public mode?: number;
    public visible?: number;
    private 'data_source_vos'?: Array<ApigDataSourceVo>;
    public constructor() { 
    }
    public withMode(mode: number): ApigDataSourcesVo {
        this['mode'] = mode;
        return this;
    }
    public withVisible(visible: number): ApigDataSourcesVo {
        this['visible'] = visible;
        return this;
    }
    public withDataSourceVos(dataSourceVos: Array<ApigDataSourceVo>): ApigDataSourcesVo {
        this['data_source_vos'] = dataSourceVos;
        return this;
    }
    public set dataSourceVos(dataSourceVos: Array<ApigDataSourceVo>  | undefined) {
        this['data_source_vos'] = dataSourceVos;
    }
    public get dataSourceVos(): Array<ApigDataSourceVo> | undefined {
        return this['data_source_vos'];
    }
}