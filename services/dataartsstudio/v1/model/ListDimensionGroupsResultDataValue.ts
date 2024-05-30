import { DimensionLogicTableVO } from './DimensionLogicTableVO';
import { FactLogicTableVO } from './FactLogicTableVO';


export class ListDimensionGroupsResultDataValue {
    private 'main_table'?: FactLogicTableVO;
    private 'dimension_tables'?: Array<DimensionLogicTableVO>;
    public constructor() { 
    }
    public withMainTable(mainTable: FactLogicTableVO): ListDimensionGroupsResultDataValue {
        this['main_table'] = mainTable;
        return this;
    }
    public set mainTable(mainTable: FactLogicTableVO  | undefined) {
        this['main_table'] = mainTable;
    }
    public get mainTable(): FactLogicTableVO | undefined {
        return this['main_table'];
    }
    public withDimensionTables(dimensionTables: Array<DimensionLogicTableVO>): ListDimensionGroupsResultDataValue {
        this['dimension_tables'] = dimensionTables;
        return this;
    }
    public set dimensionTables(dimensionTables: Array<DimensionLogicTableVO>  | undefined) {
        this['dimension_tables'] = dimensionTables;
    }
    public get dimensionTables(): Array<DimensionLogicTableVO> | undefined {
        return this['dimension_tables'];
    }
}