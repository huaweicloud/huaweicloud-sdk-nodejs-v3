import { FtMetricData } from './FtMetricData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFtMetricsResponse extends SdkResponse {
    public loss?: object;
    private 'eval_loss'?: object;
    private 'training_info'?: object;
    private 'train_process'?: number;
    public data?: FtMetricData;
    public constructor() { 
        super();
    }
    public withLoss(loss: object): ShowFtMetricsResponse {
        this['loss'] = loss;
        return this;
    }
    public withEvalLoss(evalLoss: object): ShowFtMetricsResponse {
        this['eval_loss'] = evalLoss;
        return this;
    }
    public set evalLoss(evalLoss: object  | undefined) {
        this['eval_loss'] = evalLoss;
    }
    public get evalLoss(): object | undefined {
        return this['eval_loss'];
    }
    public withTrainingInfo(trainingInfo: object): ShowFtMetricsResponse {
        this['training_info'] = trainingInfo;
        return this;
    }
    public set trainingInfo(trainingInfo: object  | undefined) {
        this['training_info'] = trainingInfo;
    }
    public get trainingInfo(): object | undefined {
        return this['training_info'];
    }
    public withTrainProcess(trainProcess: number): ShowFtMetricsResponse {
        this['train_process'] = trainProcess;
        return this;
    }
    public set trainProcess(trainProcess: number  | undefined) {
        this['train_process'] = trainProcess;
    }
    public get trainProcess(): number | undefined {
        return this['train_process'];
    }
    public withData(data: FtMetricData): ShowFtMetricsResponse {
        this['data'] = data;
        return this;
    }
}