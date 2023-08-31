import { SmartDocumentRecognizerKVBlock } from './SmartDocumentRecognizerKVBlock';


export class SmartDocumentRecognizerKvResult {
    private 'kv_block_count'?: number;
    private 'kv_block_list'?: Array<SmartDocumentRecognizerKVBlock>;
    public constructor() { 
    }
    public withKvBlockCount(kvBlockCount: number): SmartDocumentRecognizerKvResult {
        this['kv_block_count'] = kvBlockCount;
        return this;
    }
    public set kvBlockCount(kvBlockCount: number  | undefined) {
        this['kv_block_count'] = kvBlockCount;
    }
    public get kvBlockCount(): number | undefined {
        return this['kv_block_count'];
    }
    public withKvBlockList(kvBlockList: Array<SmartDocumentRecognizerKVBlock>): SmartDocumentRecognizerKvResult {
        this['kv_block_list'] = kvBlockList;
        return this;
    }
    public set kvBlockList(kvBlockList: Array<SmartDocumentRecognizerKVBlock>  | undefined) {
        this['kv_block_list'] = kvBlockList;
    }
    public get kvBlockList(): Array<SmartDocumentRecognizerKVBlock> | undefined {
        return this['kv_block_list'];
    }
}