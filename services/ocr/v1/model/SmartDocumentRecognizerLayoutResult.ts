import { SmartDocumentRecognizerLayoutBlock } from './SmartDocumentRecognizerLayoutBlock';


export class SmartDocumentRecognizerLayoutResult {
    private 'layout_block_count'?: number;
    private 'layout_block_list'?: Array<SmartDocumentRecognizerLayoutBlock>;
    public constructor() { 
    }
    public withLayoutBlockCount(layoutBlockCount: number): SmartDocumentRecognizerLayoutResult {
        this['layout_block_count'] = layoutBlockCount;
        return this;
    }
    public set layoutBlockCount(layoutBlockCount: number  | undefined) {
        this['layout_block_count'] = layoutBlockCount;
    }
    public get layoutBlockCount(): number | undefined {
        return this['layout_block_count'];
    }
    public withLayoutBlockList(layoutBlockList: Array<SmartDocumentRecognizerLayoutBlock>): SmartDocumentRecognizerLayoutResult {
        this['layout_block_list'] = layoutBlockList;
        return this;
    }
    public set layoutBlockList(layoutBlockList: Array<SmartDocumentRecognizerLayoutBlock>  | undefined) {
        this['layout_block_list'] = layoutBlockList;
    }
    public get layoutBlockList(): Array<SmartDocumentRecognizerLayoutBlock> | undefined {
        return this['layout_block_list'];
    }
}