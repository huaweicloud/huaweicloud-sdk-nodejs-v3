import { FrontCell } from './FrontCell';


export class FrontRow {
    private 'cell_list'?: Array<FrontCell>;
    public filter?: string;
    public header?: boolean;
    private 'tx_id'?: number;
    public constructor() { 
    }
    public withCellList(cellList: Array<FrontCell>): FrontRow {
        this['cell_list'] = cellList;
        return this;
    }
    public set cellList(cellList: Array<FrontCell>  | undefined) {
        this['cell_list'] = cellList;
    }
    public get cellList(): Array<FrontCell> | undefined {
        return this['cell_list'];
    }
    public withFilter(filter: string): FrontRow {
        this['filter'] = filter;
        return this;
    }
    public withHeader(header: boolean): FrontRow {
        this['header'] = header;
        return this;
    }
    public withTxId(txId: number): FrontRow {
        this['tx_id'] = txId;
        return this;
    }
    public set txId(txId: number  | undefined) {
        this['tx_id'] = txId;
    }
    public get txId(): number | undefined {
        return this['tx_id'];
    }
}