import { BatchWindow } from './BatchWindow';


export class RunOption {
    private 'thread_num'?: number;
    private 'batch_window'?: BatchWindow;
    public constructor() { 
    }
    public withThreadNum(threadNum: number): RunOption {
        this['thread_num'] = threadNum;
        return this;
    }
    public set threadNum(threadNum: number  | undefined) {
        this['thread_num'] = threadNum;
    }
    public get threadNum(): number | undefined {
        return this['thread_num'];
    }
    public withBatchWindow(batchWindow: BatchWindow): RunOption {
        this['batch_window'] = batchWindow;
        return this;
    }
    public set batchWindow(batchWindow: BatchWindow  | undefined) {
        this['batch_window'] = batchWindow;
    }
    public get batchWindow(): BatchWindow | undefined {
        return this['batch_window'];
    }
}